import React, { useEffect, useRef, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "../components/shared/form/checkoutForm";
import CheckoutProgress from "../components/shared/checkout/checkoutProgress";
import CheckoutState from "../types/checkoutState";
import Layout from '../templates/layout';

//outside of function because we only need one instance
const stripePromise = loadStripe("pk_test_51KchKjBnhd3hTTDFY5SHc201jrZoDuKbEYKdvOWRQtW9eM8JBkbYEAJOmBAAnI4QvF8NFFEyvswbK2ydbdIg9L3600orsbei5p");

function PaymentPage({ location }) {
    console.log(location.state)
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:4242/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
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
            <div className="container is-flex  is-flex-direction-column is-align-items-center">
                <CheckoutProgress stage={CheckoutState.PAYMENT} />
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </Layout>
    )
}

export default PaymentPage;
