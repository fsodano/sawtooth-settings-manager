# sawtooth-settings-manager
Manager for Sawtooth's Settings Transaction Family

## Installation
`yarn install`

## Configure
You must have a `.env` file for the manager to work.

run `cp .env.dist .env` and modify the default values with the ones that suit your environment.

The default values are:
```
PROXY_SAWTOOTH_API_URL=http://localhost:8008
PROXY_PORT=3000
SAWTOOTH_API_URL=http://localhost:3000
SETTINGS_ADDRESS_NAMESPACE = 000000
```

`PROXY_SAWTOOTH_API_URL` is the real Sawtooth API address that you'll need to proxy to.'

Please note `SAWTOOTH_API_URL` is the address you'll use in the manager (in the browser) to connect to Sawtooth's REST api, it has been configured to point to your proxy by default. So if you update the `PROXY_PORT`, make sure `SAWTOOTH_API_URL` is up to date as well.  

## Proxy
Sawtooth's default restful API doesn't doesn't allow CORS, a proxy must be used instead.
In order to run the proxy you can simply execute `yarn proxy`.

The proxy is a very simple node application which adds CORS headers so your browser can interact with sawtooth's default restful API.

If you configured your restful API differently and allowed CORS then the proxy is not required at all.

## Run locally
`yarn dev`

A browser window will open and serve `index.html`

## Build assets
`yarn build`
