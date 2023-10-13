import React, { useEffect, useRef, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../components/shared/form/checkoutForm";
import CheckoutProgress from "../components/shared/checkout/checkoutProgress";
import CheckoutState from "../types/checkoutState";
import Layout from '../templates/layout';

//outside of function because we only need one instance
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

function PaymentPage({ location }) {
    const { cart, address } = location.state;
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Load items from cart including prices to create payment intent
        fetch(`${process.env.BASE_URL}/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            //load items from cart
            body: JSON.stringify({ items: cart, address }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <Layout>
            <div className="container is-flex is-flex-direction-column is-align-items-center">
                <CheckoutProgress stage={CheckoutState.PAYMENT} />
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm address={address} items={cart} />
                    </Elements>
                )}
            </div>
        </Layout>
    )
}

export default PaymentPage;
