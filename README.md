# SimplePOS4BCH

*Simple Point of Sale for Bitcoin Cash* is a single webpage/webapp that facilitates Bitcoin Cash payments, converting a fiat currency amount into a Bitcoin Cash amount, creating a payment QR code, and acknowledging payment when broadcasted to the Bitcoin Cash network

For a live demo, visit:
https://payment.monsterbitar.se/

*(Donations are welcome, simply use the live demo with real value to send donations)*

 ![Screenshot](https://user-images.githubusercontent.com/8721695/33949010-9c5b9b52-e028-11e7-8d99-7aac6fdca0fc.png)

## Configuration

Parameters are configured in app/config.js and include:

- `language` - The two-letter language code, for example: 'en', 'sv'
- `currency` - The three-character currency code, for example: 'USD', 'EUR', 'CNY'
- `address` - The Bitcoin address that recieves payments.
- `discount` - The discount percentage (%), for example: '5'

## Requirements

The Point of Sale uses modern libraries (bootstrap, jquery) and features that might not work on older browser, and uses bower to manage the 3rd party libraries.

You can install bower with NPM from NodeJs:

```sh
npm install -g bower
```

## Installation

Start by cloning the github master branch:

```sh
git clone https://github.com/monsterbitar/SPOS4BCH
```

Then enter the directory and install the necessary libraries:

```sh
cd SPOS4BCH
bower install
```

This will install the required client-side libraries in `app/bower_components`. You can then deploy the `app` folder according to your web server configuration.
