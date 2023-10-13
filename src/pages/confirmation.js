import React, { useEffect, useState, Fragment } from "react";
import Layout from "../templates/layout";
import "./css/confirmation.css";

function PaymentConfirmation({ location }) {
    const { search } = location;
    const params = new URLSearchParams(search);
    const orderId = params.get('order_id');
    const [order, setOrder] = useState();
    useEffect(() => {
        const fetchOrder = async () => {
            const response = await fetch(`${process.env.BASE_URL}/order/${orderId}`);
            const orderResponse = await response.json();
            setOrder(orderResponse);
        }
        fetchOrder();

    }, [orderId])
    return (
        <Layout>
            <div className="container is-max-widescreen	">
                <div className="mb-6">
                    <h1 className="title mb-6 has-text-centered">
                        Your Order Has Been Placed!
                    </h1>
                    <div className="has-background-light columns bordered">
                        <div className="column p-4 bordered-right ">
                            <h2 className="subtitle mb-2 has-text-weight-semibold is-uppercase">Summary:</h2>
                            <div>
                                <span>Order #: </span>
                                <span>
                                    {order?.orderNumber}
                                </span>
                            </div>
                            <div>

                                <span>Order Date: </span>
                                <span>
                                    {order?.orderedOn.split('T')[0]}
                                </span>
                            </div>
                            <div>

                                <span>Order Total: </span>
                                <span>
                                    ${order?.total.toFixed(2)}
                                </span>
                            </div>
                        </div>
                        <div className="column p-4">
                            <h2 className="subtitle mb-2 has-text-weight-semibold is-uppercase">Shipping Address</h2>
                            <div>
                                <p className="is-capitalized">{order?.address.firstName + ' ' + order?.address.lastName}</p>
                            </div>
                            <div>
                                <p className="is-capitalized">{order?.address.line1}</p>
                            </div>
                            <div>
                                <p className="is-capitalized">{order?.address.line2}</p>
                            </div>
                            <div>
                                <p className="is-capitalized">{order?.address.city}, {order?.address.state} {order?.address.zip}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block">
                    <h2 className="subtitle has-text-weight-semibold is-uppercase has-text-centered">Items Ordered</h2>
                        <div className="item-summary-header has-background-light">
                            <p className="is-uppercase has-text-weight-semibold">Item</p>
                            <p className="is-uppercase has-text-weight-semibold">Quantity</p>
                            <p className="is-uppercase has-text-weight-semibold">Price</p>
                        </div>
                    <div className="item-summary">

                        {order?.items.map(item => {
                            return (
                                <Fragment key={item.size + item.base + item.ingredients}>
                                    {/* <div> */}
                                    {/* <img src={item.image} alt={item.name} className="image is-64x64" /> */}
                                    {/* </div> */}
                                    <p> {`${item.size} ${item.base} infused with ${item.ingredients}`}</p>
                                    <p className="mt-1 has-text-weight-semibold">{item.quantity}</p>
                                    <div>
                                        <p className="m-0 has-text-weight-semibold">${item.price.toFixed(2)}</p>
                                    </div>
                                </Fragment>
                            )
                        })}
                        <div className="order-summary">
                            <div className="m-0">Shipping: </div>
                            <div className="m-0">Subtotal: </div>
                            <div className="m-0">Tax: </div>
                            <div className="m-0 has-text-weight-semibold" >Total: </div>

                        </div>
                        <div>
                            <div className="m-0">${order?.shipping || 0.00.toFixed(2)}</div>
                            <div className="m-0">${order?.subtotal || 0.00.toFixed(2)}</div>
                            <div className="m-0">${order?.tax || 0.00.toFixed(2)}</div>
                            <div className="m-0  has-text-weight-semibold">${order?.total.toFixed(2) || 0.00.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div >
        </Layout >
    )
}

export default PaymentConfirmation;