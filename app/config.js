let RSBP_CONFIG = { // eslint-disable-line no-unused-vars
  "interface": {
    "language": "en"
  },
  "payee": {
    "name": "Simple Point of Sale for Bitcoin Cash",
    "address": "1GEAX37W6TD1ZVPJRtgXjdujZXbCkBbA4j",
    "currency": "USD",
    "discount": 5 // in percent
  },
  "networkservices": {
    "fee_estimate": "https://cashexplorer.bitcoin.com/api/utils/estimatefee?nbBlocks=",
    "fee_target_block": 6,
    "address_transactions": "https://cashexplorer.bitcoin.com/api/txs/?address=",
    "exchange_rate_url": "https://apiv2.bitcoinaverage.com/indices/global/ticker/BCH"
  },
  "blockexplorer": {
    "address_lookup": "https://cashexplorer.bitcoin.com/address/",
    "transaction_lookup": "https://cashexplorer.bitcoin.com/tx/"
  },
  "connector": {
    "timeout": 2000, // in milliseconds
    "reconnectInterval": 1000, // in milliseconds
    "corsProxy": "https://crossorigin.me/"
  },
  "rate": {
    "useCorsProxy": false,
    "expiration": 2 * 60 * 1000 // in milliseconds
  }
};
