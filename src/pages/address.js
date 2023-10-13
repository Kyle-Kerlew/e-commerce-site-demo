import React from "react";
import CheckoutProgress from "../components/shared/checkout/checkoutProgress";
import CheckoutState from "../types/checkoutState";
import "./css/address.css";
import { navigate } from "gatsby-link";
import Layout from "../templates/layout";
const Address = ({ location }) => {
    const items = location.state.items;
    function handleSubmit(e) {
        e.preventDefault();
        const values = {};

        Object.keys(e.target.elements).forEach(key => {
            const name = e.target[key].name;
            values[name] = e.target[key].value;
        })
        navigate("/payment", { state: { address: values, cart: items } });
    }

    return (
        <Layout>
            <div className="is-flex  is-flex-direction-column is-align-items-center">
                <div className="pt-5">
                    <CheckoutProgress stage={CheckoutState.ADDRESS} />
                </div>
                <form onSubmit={handleSubmit} className="has-background-white-ter m-5 p-5">
                    <div className="is-flex is-flex-direction-column">
                        <span className="title">Shipping Information</span>
                        <div className="shipping-info">
                            <div className="field">
                                <label className="label" >First Name</label>
                                <input className="input" required name="first" type="text" />
                            </div>
                            <div className="field">
                                <label className="label">Last Name</label>
                                <input className="input" required name="last" type="text" />
                            </div>
                            <div className="field wide">
                                <label className="label">Email Address</label>
                                <input className="input" required name="email" type="email" />
                            </div>

                            <div className="field wide">
                                <label className="label">Street Address</label>
                                <input className="input" required name="address1" type="text" />
                            </div>
                            <div className="field wide">
                                <label className="label">Address Line 2</label>
                                <input className="input" required name="address2" type="text" />
                            </div>
                            <div className="field">
                                <label className="label">City</label>
                                <input className="input" required name="city" type="text" />
                            </div>
                            <div className="field">
                                <label className="label">State</label>
                                <input className="input" required name="state" type="text" />
                            </div>
                            <div className="field">
                                <label className="label">Zip Code</label>
                                <input className="input" required name="zip" type="text" />
                            </div>
                            <div className="field wide">
                                <label className="label">Country</label>
                                <input className="input" required name="country" type="text" />
                            </div>
                        </div>
                        <div className="control">
                            <button type="submit" className="button is-medium is-fullwidth is-primary">
                                Continue to Payment
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}


export default Address;
