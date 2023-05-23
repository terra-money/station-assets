const glob = require("glob-promise");
const path = require("path");
const { Buffer } = require("buffer");
const { Hash } = require("@keplr-wallet/crypto");
const { AccAddress } = require("@terra-money/feather.js");
const fs = require("fs").promises;
const axelar = require("./axelar.js");

(async () => {
  // create build directory
  fs.mkdir("./build", { recursive: true });

  // convert chains to json
  const chains = {};
  const chainsOutPath = "./build/chains.json";

  const chainFiles = await glob("./chains/*/*.js");
  const tokens = [];

  chainFiles.forEach((file) => {
    const [_, folder, network, fileName] = file.split("/");

    if (typeof chains[network] === "undefined") {
      chains[network] = {};
    }

    const fullPath = `./${file}`;
    const chainData = require(fullPath);

    if (network !== "localterra" && !isValidUrl(chainData.lcd)) {
      console.log(`${chainData.chainID}: Invalid LCD URL: ${chainData.lcd}`);
      return;
    }
    tokens.push(
      ...(chainData.tokens ?? []).map((t) => ({
        ...t,
        chainID: chainData.chainID,
        network,
      }))
    );

    delete chainData["tokens"];

    chains[network][chainData.chainID] = chainData;
  });

  // convert coins to json
  const coinsOutPath = "./build/denoms.json";
  const coinsOut = {};
  const ibcDenomMapOutPath = "./build/ibc.json";
  const ibcDenomMapOut = {};

  tokens.forEach((token) => {
    const { network, chainID, ...coinData } = token;

    if (typeof coinsOut[network] === "undefined") {
      coinsOut[network] = {};
    }
    if (typeof ibcDenomMapOut[network] === "undefined") {
      ibcDenomMapOut[network] = {};
    }

    const tokenId = [chainID, coinData.token].join(":");

    coinsOut[network][tokenId] = { ...coinData, chains: chainID };

    // add IBC denom on Terra

    // chain is disabled
    if (!chains[network][chainID]) {
      console.log(`${chainID} used by ${coinData.token} is disabled.`);
      return;
    }

    const isICS = AccAddress.validate(coinData.token);

    if (!isICS && chains[network][chainID].ibc) {
      const channel = chains[network][chainID].ibc.fromTerra;
      const ibcDenomOnTerra = calculateIBCDenom(channel, coinData.token);
      const nonHashedDenom = `transfer/${channel}/${coinData.token}`;

      ibcDenomMapOut[network][ibcDenomOnTerra] = {
        token: tokenId,
        chainID: Object.values(chains[network]).find(
          ({ prefix }) => prefix === "terra"
        ).chainID,
      };

      // add IBC denom on other chains
      if (!coinData.isAxelar) {
        Object.values(chains[network]).forEach(({ chainID: chainID2 }) => {
          if (!chains[network][chainID2].ibc || chainID === chainID2) return;

          const channel = chains[network][chainID2].ibc.toTerra;
          const ibcDenomOnOther = calculateIBCDenom(channel, nonHashedDenom);
          ibcDenomMapOut[network][ibcDenomOnOther] = {
            token: tokenId,
            chainID: chainID2,
          };
        });
      }
    } else if (isICS && chains[network][chainID]?.ibc?.ics) {
      const channel = chains[network][chainID].ibc.ics.fromTerra;
      const denom = `cw20:${coinData.token}`;
      const ibcDenomOnTerra = calculateIBCDenom(channel, denom);
      const nonHashedDenom = `transfer/${channel}/${denom}`;

      ibcDenomMapOut[network][ibcDenomOnTerra] = {
        token: tokenId,
        chainID: Object.values(chains[network]).find(
          ({ prefix }) => prefix === "terra"
        ).chainID,
        // to send it back on the original chain
        icsChannel: channel,
      };

      // add IBC denom on other chains
      Object.values(chains[network]).forEach(({ chainID: chainID2 }) => {
        if (!chains[network][chainID2].ibc || chainID === chainID2) return;
        const channel = chains[network][chainID2].ibc.toTerra;
        const ibcDenomOnOther = calculateIBCDenom(channel, nonHashedDenom);
        ibcDenomMapOut[network][ibcDenomOnOther] = {
          token: tokenId,
          chainID: chainID2,
        };
      });
    } else if (chains[network][chainID].prefix === "terra") {
      // add IBC denom on other chains
      if (!isICS) {
        Object.values(chains[network]).forEach(({ chainID: chainID2 }) => {
          if (!chains[network][chainID2].ibc || chainID === chainID2) return;

          const ibcDenomOnOther = calculateIBCDenom(
            chains[network][chainID2].ibc.toTerra,
            coinData.token
          );
          ibcDenomMapOut[network][ibcDenomOnOther] = {
            token: tokenId,
            chainID: chainID2,
          };
        });
      } else {
        Object.values(chains[network]).forEach(({ chainID: chainID2 }) => {
          if (
            !chains[network][chainID2].ibc?.icsFromTerra ||
            chainID === chainID2
          )
            return;
          const denom = `cw20:${coinData.token}`;
          const channel = chains[network][chainID2].ibc.icsFromTerra.toTerra;

          const ibcDenomOnOther = calculateIBCDenom(channel, denom);
          ibcDenomMapOut[network][ibcDenomOnOther] = {
            token: tokenId,
            chainID: chainID2,
            icsChannel: channel,
          };
        });
      }
    }
  });

  // Format the JSON with indentions before writing.
  const jsonList = JSON.stringify(chains, null, 2);
  await fs.writeFile(chainsOutPath, jsonList);
  const coinsList = JSON.stringify(coinsOut, null, 2);
  await fs.writeFile(coinsOutPath, coinsList);
  const ibcList = JSON.stringify(ibcDenomMapOut, null, 2);
  await fs.writeFile(ibcDenomMapOutPath, ibcList);
  const currenciesList = require("./currencies.js");
  await fs.writeFile(
    "./build/currencies.json",
    JSON.stringify(currenciesList, null, 2)
  );

  // copy images inside ./build
  const images = await glob("./img/*/*.{png,svg}");

  await Promise.all(
    images.map(async (file) => {
      await fs.mkdir(`./build/${path.dirname(file).replace("./", "")}`, {
        recursive: true,
      });
      await fs.copyFile(file, `./build/${file.replace("./", "")}`);
    })
  );
})();

function calculateIBCDenom(channel, denom) {
  return (
    "ibc/" +
    Buffer.from(Hash.sha256(Buffer.from(`transfer/${channel}/${denom}`)))
      .toString("hex")
      .toUpperCase()
  );
}

function isValidUrl(url) {
  try {
    return new URL(url).protocol === "https:";
  } catch (e) {
    return false;
  }
}
