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
ENV CF_PAGES_URL=${CF_PAGES_URL}

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
    npm install cors express

# Expose port 3101
EXPOSE 3101

# Start the Express app
CMD [ "node", "serve.js" ]