/* global console */
/* global document */
/* global $ */
/* global RSBP_CONFIG */
/* global RSBP */
/* global SPOS_LANGUAGE */

(function () {
  $(document).ready(function() {

    "use strict";

    console.info("Starting app...");

    const ADDRESS = RSBP_CONFIG.payee.address;
    const PAYEE_NAME = RSBP_CONFIG.payee.name;
    const AMOUNT = RSBP_CONFIG.payee.amount;
    const CURRENCY = RSBP_CONFIG.interface.currency;

    document.title = PAYEE_NAME;

    $("#logo-link").prop("href", RSBP_CONFIG.blockexplorer.address_lookup + ADDRESS);

    // Setup currency button
    $("#currency-button").text(CURRENCY);

    // Setup currency amount input field
    $("#currency-amount-input-field").val(AMOUNT);

    // Set up langague strings.
    $("#payment-modal-amount-text").text(SPOS_LANGUAGE.payment_modal_amount[RSBP_CONFIG.interface.language]);
    $("#payment-modal-discount-text").text(SPOS_LANGUAGE.payment_modal_discount[RSBP_CONFIG.interface.language]);
    $("#payment-modal-total-currency-text").text(SPOS_LANGUAGE.payment_modal_total_currency[RSBP_CONFIG.interface.language]);
    $("#payment-modal-rate-text").text(SPOS_LANGUAGE.payment_modal_rate[RSBP_CONFIG.interface.language]);
    $("#meta-title-text").text(SPOS_LANGUAGE.meta_title[RSBP_CONFIG.interface.language]);
    $("#payment-status-tx-details-text").text(SPOS_LANGUAGE.payment_status_tx_details)[RSBP_CONFIG.interface.language];
    $("#order-title-text").text(SPOS_LANGUAGE.order_title[RSBP_CONFIG.interface.language]);
    $("#payment-modal-total-payment-text").text(SPOS_LANGUAGE.payment_modal_total_payment[RSBP_CONFIG.interface.language]);
    $("#payment-modal-title-text").text(SPOS_LANGUAGE.payment_modal_title[RSBP_CONFIG.interface.language]);

	// Set up language on the payment button
    $("#pay-button").attr("value", SPOS_LANGUAGE.pay_button[RSBP_CONFIG.interface.language]);
    $("#currency-amount-input-field").attr("placeholder", SPOS_LANGUAGE.payment_modal_amount[RSBP_CONFIG.interface.language]);
    

    // Log payment modal state
    $("#payment-modal").on("shown.bs.modal", function () {
      console.info("Showing payment modal...");
    });
    $("#payment-modal").on("hidden.bs.modal", function () {
      console.info("Payment modal hidden");
    });

    // Add a service worked
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('webapp.js').then(function(registration) {

          // Registration was successful
          console.log('ServiceWorker registration successful with scope: ', registration.scope);

        }, function(err) {

          // registration failed :(
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }

    // Start services
    RSBP.connector.start();
    RSBP.rate.start();

    console.info("App started");
  });
}());
