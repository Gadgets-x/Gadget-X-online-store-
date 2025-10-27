function buyNow(itemName, amount) {
  FlutterwaveCheckout({
    public_key: "FLWPUBK-2b01ca9653cbf025d8843ce27e456c4b-X",
    tx_ref: "GadgetX_" + Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,banktransfer,ussd",
    customer: {
      email: "customer@example.com",
      phone_number: "08100000000",
      name: itemName,
    },
    customizations: {
      title: "Raztune FLW",
      description: "Payment for " + itemName,
      logo: "images/logo.jpg",
    },
    callback: function (data) {
      // Redirect after payment success
      window.location.href = "https://form.svhrt.com/68ee7fa9c526e9f3b64609a9";
    },
    onclose: function () {
      alert("Payment window closed.");
    },
  });
}