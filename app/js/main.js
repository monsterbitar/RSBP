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
    const CURRENCY = RSBP_CONFIG.payee.currency;
    const AMOUNT = RSBP_CONFIG.payee.amount;

    document.title = PAYEE_NAME;

    $("#logo-link").prop("href", RSBP_CONFIG.blockexplorer.address_lookup + ADDRESS);

    // Setup currency button
    $("#currency-button").text(CURRENCY);

    // Setup currency amount input field
    $("#currency-amount-input-field").val(AMOUNT);

    // Set up langague strings.
    $("#payment-modal-amount-text").val(SPOS_LANGUAGE.words.payment_modal_amount);
    $("#payment-modal-discount-text").val(SPOS_LANGUAGE.words.payment_modal_discount);
    $("#payment-modal-total-currency-text").val(SPOS_LANGUAGE.words.payment_modal_total_currency);
    $("#payment-modal-rate-text").val(SPOS_LANGUAGE.words.payment_modal_rate);
    $("#meta-title-text").val(SPOS_LANGUAGE.phrases.meta_title);
    $("#payment-status-tx-details-text").val(SPOS_LANGUAGE.phrases.payment_status_tx_details);
    $("#order-title-text").val(SPOS_LANGUAGE.phrases.order_title);

	// Set up language on the payment button
    $("#pay-button").attr("value", SPOS_LANGUAGE.phrases.meta_title);
    

    // Log payment modal state
    $("#payment-modal").on("shown.bs.modal", function () {
      console.info("Showing payment modal...");
    });
    $("#payment-modal").on("hidden.bs.modal", function () {
      console.info("Payment modal hidden");
    });

    // Start services
    RSBP.connector.start();
    RSBP.rate.start();

    console.info("App started");
  });
}());
