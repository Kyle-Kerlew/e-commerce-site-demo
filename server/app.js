const express = require("express");
const cors = require("cors");
const app = express();
const stripe = require("stripe")('sk_test_51KchKjBnhd3hTTDFLHka3ReUZ2K3VryOracTAkw4Z5zskycOB4MHMLgpUBk1wR9TIocDp5HMmeG13dK8EA9QIRSB00PF9x8TsK');

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "USD",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
