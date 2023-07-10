import React from 'react';

import CartItem from "../components/shared/checkout/cartItem";
import PlaceOrder from "../components/shared/checkout/placeOrder";
import "./css/cart.css";
import { navigate } from "gatsby-link";
import { connect } from "react-redux"
import Layout from '../templates/layout';

function CartPage({ location }) {
    function handleSubmit(data) {
        navigate("/address", { state: data });
    }
    const data = new URLSearchParams(location.search);
    //fetch price data from query param
    const object = {};
    for (const [key, value] of data.entries()) {
        object[key] = value;
    }
    return (
        <Layout >
            <div className="is-flex cart columns">
                <div className="column card is-flex-grow-2 p-3">
                    <div className="card-header-title is-flex is-justify-content-center is-align-items-center">
                        <span className="subtitle no-margin">My Shopping Cart (1 Item)</span>
                    </div>
                    <CartItem item={object} />
                </div>
                <div className='column'>
                    <PlaceOrder handleSubmit={handleSubmit} />
                </div>
            </div>
        </Layout>

    )
}
const mapStateToProps = ({ cart }) => {
    return { cart }
}

const mapDispatchToProps = dispatch => {
    return { addToCart: () => dispatch({ type: `ADD_TO_CART` }) }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
