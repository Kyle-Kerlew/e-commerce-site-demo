import { MongoClient, ObjectId } from "mongodb";

//TODO: REMOVE URL FROM GIT HISTORY AND ADD TO ENV FILE
const uri = "mongodb+srv://kylekerlew1:tdzb725JsJuNqwC7@cluster0.fy76a2g.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const db = client.db('infusion_creations')

async function getNextSequence(name) {
    const { value } = await db.collection('counters').findOneAndUpdate(
        {
            _id: name
        },
        {
            $inc: { seq: 1 }
        },
        {
            upsert: true
        }

    );

    return value.seq;
}
async function createOrderId(shipping, items, total) {
    let orderId;
    try {
        const orders = db.collection('orders');
        const query = {
            address: shipping.address,
            orderNumber: await getNextSequence("orderNumber"),
            items,
            total,
            orderedOn: new Date()
        }
        const { insertedId } = await orders.insertOne(query);

        orderId = insertedId;
    } catch (e) {
        console.error(e);
    }
    return orderId;
}
async function getOrderById(id) {
    let order;
    try {
        const orders = client.db('infusion_creations').collection('orders');
        order = await orders.findOne({ _id: new ObjectId(id) });
    } catch (e) {
        console.error(e);
    }
    return order;
}

export { createOrderId, getOrderById };