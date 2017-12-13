# SimplePOS4BCH

![Screenshot](https://user-images.githubusercontent.com/289994/33945783-fbc742b6-dfed-11e7-8efd-94850fdf130d.png)



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
