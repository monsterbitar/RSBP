let RSBP_CONFIG = { // eslint-disable-line no-unused-vars
  "payee": {
    "name": "MerchantName",
    "address": "1E16XPFWKY2XaFDDzS6V93hGdXP2QEnddY",
    "currency": "USD",
    "discount": 0 // in percent
  },
  "networkservices": {
    "fee_estimate": "https://cashexplorer.bitcoin.com/api/utils/estimatefee?nbBlocks=",
    "fee_target_block": 6,
    "address_transactions": "https://cashexplorer.bitcoin.com/api/txs/?address=",
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
