FROM node:18 as assets-builder

WORKDIR /assets

RUN set -eux && \
    git clone https://github.com/terra-money/assets.git ./

RUN set -eux && \
    npm install && \
    npm run build

###############################################################################
FROM node:18 as station-assets-builder

ARG CF_PAGES_URL="https://station-assets.pages.dev"
ARG FND_BASE_URL="https://finder.station.money"
ENV CF_PAGES_URL=${CF_PAGES_URL}
ENV FND_BASE_URL=${FND_BASE_URL}

WORKDIR /assets

COPY . .

RUN set -eux && \
    npm install && \
    npm run build

###############################################################################
FROM node:18-alpine

WORKDIR /assets

COPY ./serve.js ./serve.js
COPY --from=station-assets-builder /assets/build/* ./public/
COPY --from=assets-builder /assets/station/*json ./public/station/
COPY --from=assets-builder /assets/ibc/*json ./public/ibc/
COPY --from=assets-builder /assets/cw20/*json ./public/cw20/
COPY --from=assets-builder /assets/extensions.json ./public/extensions.json

RUN set -eux && \
    npm init -y && \
    npm install cors express && \
    mkdir -p /assets/public/img && \
    cd /assets/public/img && \
    ln -s ../coins coins && \
    ln -s ../chains chains

# Expose port 3001
EXPOSE 3001

# Start the Express app
CMD [ "node", "serve.js" ]