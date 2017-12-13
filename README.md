# SimplePOS4BCH

 ![Screenshot](https://user-images.githubusercontent.com/8721695/33949010-9c5b9b52-e028-11e7-8d99-7aac6fdca0fc.png)

*Simple Point of Sale for Bitcoin Cash* is a single webpage/webapp that facilitates bitcoin payments, converting a fiat currency amount into a bitcoin amount, creating a payment QR code, and acknowledging payment when broadcasted to the Bitcoin Cash network

Parameters are configured in the config.js and include:

- `currency` - The three-character currency code, i.e. BTC, USD, IDR, ZAR
- `amount` - The amount in fiat currency to be converted to BTC
- `address` - The Bitcoin address to be paid
- `discount` - The discount percentage to be applied to the conversation rate

For a live demo, visit:
https://payment.monsterbitar.se/

*(Donations are welcome, simply use the live demo with real value to send donations)*

## Installation

```sh
git clone https://github.com/monsterbitar/SPOS4BCH
cd SPOS4BCH
npm install -g bower
bower install
```

This will install the required client-side libraries in `app/bower_components`. You can then deploy the `app` folder according to your web server configuration.
