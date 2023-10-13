import React from 'react';
import { navigate } from "gatsby-link";

const PlaceOrder = ({ cartSubtotal, items }) => {

    function getTax(subtotal) {
        return subtotal * 0.07;
    }

    function setCart() {
        navigate('/address', { state: { items } })
    }

    const tax = getTax(cartSubtotal).toFixed(2);
    const finalTotal = (cartSubtotal + getTax(cartSubtotal)).toFixed(2);
    return (
        <React.Fragment>
            <div className='block'>
                <p className="subtitle has-text-centered">My Shopping Cart ({`${items.length} Item${items.length > 1 ? 's' : ''}`})</p>
            </div>
            <div className="mb-5">
                <div className="is-flex is-justify-content-space-between">
                    <p>Cost:</p>
                    <p>${cartSubtotal.toFixed(2)}</p>
                </div>
                <div className="is-flex is-justify-content-space-between">
                    <p>Tax:</p>
                    <p>${tax}</p>
                </div>
                <hr className="mt-1 has-background-primary" />
                <div className="is-flex is-justify-content-space-between">
                    <b>Total</b>
                    <b>${finalTotal}</b>
                </div>
            </div>
            <button className="button is-primary is-fullwidth" onClick={setCart}>Continue With Order</button>
        </React.Fragment>
    )
}

export default PlaceOrder;
