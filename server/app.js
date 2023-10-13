import express from "express";
import cors from "cors";
import Stripe from "stripe";
import { createOrderId, getOrderById } from "./config/mongo.js";
const app = express();

//Remove key from source history
const stripe = Stripe('sk_test_51KchKjBnhd3hTTDFLHka3ReUZ2K3VryOracTAkw4Z5zskycOB4MHMLgpUBk1wR9TIocDp5HMmeG13dK8EA9QIRSB00PF9x8TsK');
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
const calculateOrderAmount = (items) => {
    let total = 0;
    items.forEach(item => {
        switch (item.base) {
            case "Butter":
                total += 5;
                break;
            case "Ghee":
                total += 7;
                break;
            case "Coconut Oil":
                total += 6;
                break;
            case "Avocado Oil":
                total += 7;
                break;
            case "Olive Oil":
                total += 9;
                break;
            default:
                console.error("Base does not exist");
                break;
        }

        switch (item.size) {
            case "2 Oz":
                total += 4;
                break;
            case "4 Oz":
                total += 6;
                break;
            case "8 Oz":
                total += 9;
                break;
            case "12 Oz":
                total += 12;
                break;
            case "16 Oz":
                total += 15;
                break;
            default:
                console.error("Size does not exist");
                break;
        }

        total *= item.quantity;
    })
    return total;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items, address } = req.body;
    const amount = calculateOrderAmount(items);
    //include shipping address and item
    const total = amount;
    const recipient = address.first + ' ' + address.last;
    const shipping = {
        address: {
            country: address.country,
            line1: address.address1,
            line2: address.address2,
            city: address.city,
            state: address.state
        },
        name: recipient,

    }
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total * 100, //Convert to no decimal format
        currency: "USD",
        shipping,
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret
    });
});
app.post('/create-order', async (req, res) => {
    const { items, address } = req.body;
    const amount = calculateOrderAmount(items);
    const total = amount;
    const shipping = {
        address: {
            city: address.city,
            country: address.country,
            firstName: address.first,
            lastName: address.last,
            line1: address.address1,
            line2: address.address2,
            state: address.state,
            zip: address.zip,
        }
    }
    const orderId = await createOrderId(shipping, items, total);

    res.json({ orderId });
})

app.get('/order/:orderId', async (req, res) => {
    const { orderId } = req.params;
    const order = await getOrderById(orderId);
    console.log("order fetched", order);
    res.json(order);
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
