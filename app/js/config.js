/* global window */
/* global RSBP_CONFIG */

(function () {

  "use strict";

  // Convert discount from a human readable percentage number to a multiplier.
  RSBP_CONFIG.payee.discount = RSBP_CONFIG.payee.discount / 100;

  // Initialize an empty payment amount.
  RSBP_CONFIG.payee.amount = "";

}());
