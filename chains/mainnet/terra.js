module.exports = {
  chainID: 'phoenix-1',
  lcd: 'https://phoenix-lcd.terra.dev',
  gasAdjustment: 1.75,
  gasPrices: { uluna: 0.015 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra',
  icon: 'https://station-assets.terra.money/img/chains/Terra.svg',
  alliance: true,
  // doesn't require IBC channels since it's already on all the other chains
  explorer: {
    address: 'https://terrasco.pe/mainnet/address/{}',
    tx: 'https://terrasco.pe/mainnet/tx/{}',
    validator: 'https://terrasco.pe/mainnet/validator/{}',
    block: 'https://terrasco.pe/mainnet/block/{}',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Terra Luna',
      icon: 'https://station-assets.terra.money/img/coins/Luna.svg',
      decimals: 6,
    },
    {
      token: 'terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
      symbol: 'CUB',
      name: 'Lion Cub Dao',
      icon: 'https://station-assets.terra.money/img/coins/cub.png',
      decimals: 6,
    },
    {
      token: 'terra1e5vchf97lakl6sulztkn54aapekzfzsa6amdt88exvwmu25s3z0sg6hplq',
      symbol: 'ASTRO-USDC ampLP',
      name: 'ERIS ASTRO-USDC ampLP',
      icon: 'https://station-assets.terra.money/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1ymwcpz20lcaue5kkawj3t2fe7et4xd7xkxtuxzc43at0dvcywrsqcuunk2',
      symbol: 'LUNA-ampLUNA ampLP',
      name: 'ERIS LUNA-ampLUNA ampLP',
      icon: 'https://station-assets.terra.money/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1zanekgprlqpdhu2nmqq9efcnr5f4f76vph2fykvw94pq8sylltdsll64qj',
      symbol: 'LUNA-stLUNA ampLP',
      name: 'ERIS LUNA-stLUNA ampLP',
      icon: 'https://station-assets.terra.money/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1m9fvkwjpwd4ddgkxd5ddvc2jst9wtv33u7kj89tq2wr0tjm34j8qyfmpwm',
      symbol: 'LUNA-TPT ampLP',
      name: 'ERIS LUNA-TPT ampLP',
      icon: 'https://station-assets.terra.money/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1as76h247wvey3aqmw22mlkq8g6vj8zj7qw4wywwn388s2mjt0rtqpp570z',
      symbol: 'LUNA-USDC ampLP',
      name: 'ERIS LUNA-USDC ampLP',
      icon: 'https://station-assets.terra.money/img/coins/ampLP.png',
      decimals: 6,
    },
    {
      token: 'terra1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2s5lvsct',
      symbol: 'ampLUNA',
      name: 'ERIS Amplified LUNA',
      icon: 'https://station-assets.terra.money/img/coins/ampLuna.svg',
      decimals: 6,
      lsd: 'uluna',
    },
    {
      token: 'terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      symbol: 'bLUNA',
      name: 'boneLuna',
      icon: 'https://station-assets.terra.money/img/coins/bLuna.png',
      decimals: 6,
      lsd: 'uluna',
    },
    {
      token: 'terra1cmf8ytutcwrjrv08zskj9phuh46a3w3nkjax7en4hxezsrdr58lqvzy05q',
      symbol: 'Alem',
      name: 'alentejo.money',
      icon: 'https://static.wixstatic.com/media/1e62a0_42c272173eb244a893daa63902538ffe~mv2.png/v1/fill/w_560,h_560,fp_0.50_0.50,enc_auto/1e62a0_42c272173eb244a893daa63902538ffe~mv2.png',
      decimals: 6
    },
    {
      token: 'terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
      symbol: 'ASTRO',
      name: 'Astroport Token',
      icon: 'https://astroport.fi/astro_logo.png',
      decimals: 6
    },
    {
      token: 'terra1x62mjnme4y0rdnag3r8rfgjuutsqlkkyuh4ndgex0wl3wue25uksau39q8',
      symbol: 'xASTRO',
      name: 'Staked Astroport Token',
      icon: 'https://app.astroport.fi/tokens/xAstro.png',
      decimals: 6
    },
    {
      token: 'terra1kkpf3f049trkyscv0av2pa9ad02dzls7f6m8s24q07ehetggytesru7qqp',
      symbol: 'BGT',
      name: 'Brand Governance Token',
      icon: 'https://s3.ap-southeast-2.wasabisys.com/bgt/bgtoken.png',
      decimals: 6
    },
    {
      token: 'terra10aa3zdkrc7jwuf8ekl3zq7e7m42vmzqehcmu74e4egc7xkm5kr2s0muyst',
      symbol: 'SOLID',
      name: 'Solid',
      icon: 'https://assets.capapult.finance/icon/Solid.svg',
      decimals: 6
    },
    {
      token: 'terra1t4p3u8khpd7f8qzurwyafxt648dya6mp6vur3vaapswt6m24gkuqrfdhar',
      symbol: 'CAPA',
      name: 'Capapult',
      icon: 'https://assets.capapult.finance/icon/Capa.svg',
      decimals: 6
    },
    {
      token: 'terra17gck626vgax9jpe6utm7dhx4vdzawfkt0jhru03l7a3dzu98wedsfad4sz',
      symbol: 'dUST',
      name: 'Depegged UST',
      icon: 'https://gateway.pinata.cloud/ipfs/QmTEo7AmbgygF2mek89MHBJ1wPrB23TA811VeXCdcXW5pf',
      decimals: 6
    },
    {
      token: 'terra1ttspm8jgeylc6us3mlpwpmlwzr3rkesm70vn6zkfr07pz7e3rzkq73ah2j',
      symbol: 'GIDO',
      name: 'Gidorah',
      icon: 'https://firebasestorage.googleapis.com/v0/b/wicca-c3bbe.appspot.com/o/app%2Fmainnet%2Ftoken%2FMIRhzK1keYKtJsRYg_oL9.jpeg?alt=media&token=5de0205f-d0f6-4a76-b765-e6dd59d7d47a',
      decimals: 6
    },
    {
      token: 'terra1d4j9lsl453mkvtlg4ctw8y52rdkhafsaefug0hq0z06phczuvvvs7uq0vg',
      symbol: 'IDC',
      name: 'INTERCHAIN DAO COIN',
      icon: 'https://raw.githubusercontent.com/IDC1201/IDC/f22b0f203867414b6473f8e8a935c3edf5524296/ASSET/IDC.png',
      decimals: 6
    },
    {
      token: 'terra1ulr678u52qwt27dsgxrftthq20a8v8t9s8f3hz5z8s62wsu6rslqyezul4',
      symbol: 'LBUN',
      name: 'LUNC Burn Token',
      icon: 'https://raw.githubusercontent.com/lbunproject/LBUNswap-web-app_Terra2/main/public/images/others/LBUN.svg',
      decimals: 6
    },
    {
      token: 'terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
      symbol: 'ROAR',
      name: 'Lion DAO',
      icon: 'https://app.astroport.fi/tokens/roar.png',
      decimals: 6
    },
    {
      token: 'terra1ee4g63c3sus9hnyyp3p2u3tulzdv5ag68l55q8ej64y4qpwswvus5mtag2',
      symbol: 'LIRA',
      name: 'Lira Token',
      icon: 'https://lira.financial/images/icons/lira.svg',
      decimals: 6
    },
    {
      token: 'terra1uv8ltv32tuq4qf6xspytpv058p0pef64s5xdncfywjexv22lfjzs7mul8s',
      symbol: 'LUBI',
      name: 'Luna Bird Token',
      icon: 'https://www.lunabird.network/logo.png',
      decimals: 6
    },
    {
      token: 'terra1ry9f6alqyf9dpj04u9ymq5u4whjndu485agh6gusn89dmqse3ggsnzducj',
      symbol: 'OPZA',
      name: 'Luna optimizer token',
      icon: 'https://avatars.githubusercontent.com/u/111164738?s=400&u=970d83fe90b55d4ca45e798fe0bc387d4ec5cbd5&v=4',
      decimals: 6
    },
    {
      token: 'terra19p20mfnvwh9yvyr7aus3a6z6g6uk28fv4jhx9kmnc2m7krg27q2qkfenjw',
      symbol: 'ORNE',
      name: 'Orne Token',
      icon: 'https://orne.io/img/token_icon.png',
      decimals: 6
    },
    {
      token: 'terra1spkm49wd9dqkranhrks4cupecl3rtgeqqljq3qrvrrts2ev2gw6sy5vz3k',
      symbol: 'Dinheiros',
      name: 'dinheiro',
      icon: 'https://static.wixstatic.com/media/1e62a0_04207897171e4f5c8931295172b3e34c~mv2.png',
      decimals: 0
    },
    {
      token: 'terra1sdglum2dt4f3fmq7jrt2phf2tegmnudc7qqqqujkpqcm9ujuxxkqakv5u8',
      symbol: 'Reis',
      name: 'real',
      icon: 'https://static.wixstatic.com/media/1e62a0_89af25478e5144089de9292b990493e2~mv2.png',
      decimals: 6
    },
    {
      token: 'terra1qj5hs3e86qn4vm9dvtgtlkdp550r0rayk9wpay44mfw3gn3tr8nq5jw3dg',
      symbol: 'Escudos',
      name: 'escudo',
      icon: 'https://static.wixstatic.com/media/1e62a0_37bd3a14b88646f987919ec4ea30533c~mv2.png',
      decimals: 6
    },
    {
      token: 'terra1xe8umegahlqphtpvjsuwfzfvyjfvag5h8rffsx6ezm0el4xzsf8s7uzezk',
      symbol: 'RED',
      name: 'Red',
      icon: 'https://red.redacted.money/red.svg',
      decimals: 6
    },
    {
      token: 'terra1rc6ssp5rym7a0hg29xpj4cc9e67tl56kg5jyzgl9qrhfxxc2ugvsnrkala',
      symbol: 'SEAS',
      name: 'SEAS',
      icon: 'https://raw.githubusercontent.com/SailingTheSeasDAO/web-assets/main/SEAS.png',
      decimals: 6
    },
    {
      token: 'terra1q8kfp0v9rhef0d3u44ds9shwvwcusjheh8nhye3n7gwjd95ze96sehyp6w',
      symbol: 'SANT',
      name: 'SANTERRA SANT Token',
      icon: 'https://santerra.app/sant_logo.svg',
      decimals: 6
    },
    {
      token: 'terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
      symbol: 'SAYVE',
      name: 'Sayve Token',
      icon: 'https://raw.githubusercontent.com/sayveprotocol/web-assets/main/logos/sayve-logo.png',
      decimals: 6
    },
    {
      token: 'terra16zc783wt2w5lvlt9u4as977lt39c3se427akkenrzyax5vtde70qa89ukv',
      symbol: 'xSAYVE',
      name: 'Staked Sayve Token',
      icon: 'https://raw.githubusercontent.com/sayveprotocol/web-assets/main/logos/xsayve-logo.png',
      decimals: 6
    },
    {
      token: 'terra14xsm2wzvu7xaf567r693vgfkhmvfs08l68h4tjj5wjgyn5ky8e2qvzyanh',
      symbol: 'LunaX',
      name: 'LunaX Token',
      icon: 'https://raw.githubusercontent.com/stader-labs/assets/main/terra/LunaX_1.png',
      decimals: 6
    },
    {
      token: 'terra1l23rtnsp0fcfgs2zlww4gcd8dlznkm580p5yrsangcen9jjjhuqstd2sle',
      symbol: 'SD',
      name: 'SD Token',
      icon: 'https://raw.githubusercontent.com/stader-labs/assets/main/terra/SD_Token.png',
      decimals: 8
    },
    {
      token: 'terra1xumzh893lfa7ak5qvpwmnle5m5xp47t3suwwa9s0ydqa8d8s5faqn6x7al',
      symbol: 'STEAK',
      name: 'STEAK Liquid Token',
      icon: 'https://liquidstaking.app/steak.png',
      decimals: 6
    },
    {
      token: 'terra1gwz4m0q6vq6nyunt88vlsf5u3ve0fv3qc40q0mdky58s4fjy4fcsqpkman',
      symbol: 'TALIS',
      name: 'TALIS Token',
      icon: 'https://gateway.pinata.cloud/ipfs/QmXama3Nj45sHFw5o43fDGuSmYLUirPtHTt9Jyi6RNKZmz',
      decimals: 6
    },
    {
      token: 'terra13j2k5rfkg0qhk58vz63cze0uze4hwswlrfnm0fa4rnyggjyfrcnqcrs5z2',
      symbol: 'TPT',
      name: 'Terra Poker Token',
      icon: 'https://terra.poker/ico/ms-icon-310x310.png',
      decimals: 6
    },
    {
      token: 'terra1e9s5m6vrl9ms75q0862llq2vcsz8r43czm36s6xnn3vh8dfmwe0s3c86e8',
      symbol: 'xTPT',
      name: 'Terra Poker Governance Token',
      icon: 'https://terra.poker/ico/ms-icon-310x310.png',
      decimals: 6
    },
    {
      token: 'terra1564y9uxzhast8sk5n47teypy4mxy7fg5vne2msuztsft7qk3pj9sxxuxmc',
      symbol: 'TFLOKI',
      name: 'TerraFloki Token',
      icon: 'https://terrafloki.io/tf-logo.png',
      decimals: 6
    },
    {
      token: 'terra18ha3r45syfpp46qg85p9wqxy6p0nj82rlxt7c74qkdr0yzcjut9sw7gerz',
      symbol: 'TRUMP',
      name: 'TRUMP',
      icon: 'https://raw.githubusercontent.com/trumpdao/public/main/data/trump_logo.png',
      decimals: 6
    },
    {
      token: 'terra1qx284aak0wl7vrvlsc6cwcsn6xwajragkh6cjqj87m9p34hx5l2s22p3cp',
      symbol: 'TUNA',
      name: 'Tuna Token',
      icon: 'https://s3.ap-southeast-2.wasabisys.com/tuna/tunatoken.png',
      decimals: 6
    },
    {
      token: 'terra1gy73st560m2j0esw5c5rjmr899hvtv4rhh4seeajt3clfhr4aupszjss4j',
      symbol: 'VKR',
      name: 'VKR Token',
      icon: 'https://app.valkyrieprotocol.com/icon_vkr.png',
      decimals: 6
    },
    {
      token: 'terra15hhqg8gyz04zapynqtk7uvlsp7lzay7etrt9ann0276v94yae63sxygeat',
      symbol: 'wETH',
      name: 'Wrapped Ether (Portal)',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs/logo.png',
      decimals: 8
    },
    {
      token: 'terra1ctelwayk6t2zu30a8v9kdg3u2gr0slpjdfny5pjp7m3tuquk32ysugyjdg',
      symbol: 'wSOL',
      name: 'Wrapped SOL',
      icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
      decimals: 8
    },
    {
      token: 'terra1qmnxhecc3vnmhef9q7vap7spx9tgpnw9fqe8ljqfwrlz7rur9y5qu2dlp6',
      symbol: 'wAVAX',
      name: 'AVAX (Portal)',
      icon: 'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/AVAX_wh.png',
      decimals: 8
    },
    {
      token: 'terra1rwg5kt6kcyxtz69acjgpeut7dgr4y3r7tvntdxqt03dvpqktrfxq4jrvpq',
      symbol: 'UST',
      name: 'UST (Portal)',
      icon: 'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/UST_wh.png',
      decimals: 6
    },
    {
      token: 'terra16h7keds26d52xj8rn9jfx6lj2x0ja79lt56yxnmlm4xsttf5mu5smq5f78',
      symbol: 'LUNC',
      name: 'LUNC (Portal)',
      icon: 'https://raw.githubusercontent.com/certusone/wormhole-token-list/main/assets/LUNA_wh.png',
      decimals: 6
    }
  ],
}
