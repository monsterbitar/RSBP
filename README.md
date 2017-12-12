# SimplePOS4BCH

*Simple Point of Sale for Bitcoin Cash* is a single webpage/webapp that facilitates bitcoin payments, converting a fiat currency amount into a bitcoin amount, creating a payment QR code, and acknowledging payment when broadcasted to the Bitcoin Cash network

Parameters are configured in the config.js and include:

- `currency` - The three-character currency code, i.e. BTC, USD, IDR, ZAR
- `amount` - The amount in fiat currency to be converted to BTC
- `address` - The Bitcoin address to be paid
- `discount` - The discount percentage to be applied to the conversation rate

You can see a running example implementation here:
https://consensusreality.io/demo/RSBP/pay.html

## Installation

```sh
npm install -g bower
bower install
```

This will install the required client-side libraries in `app/bower_components`. You can then deploy the `app` folder according to your web server configuration.
