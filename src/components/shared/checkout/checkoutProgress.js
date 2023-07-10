import React from 'react';
import CheckoutState from "../../../types/checkoutState";
import "./checkoutProgress.css";
import Arrow from "../../../images/arrow.svg";

function CheckoutProgress({stage}) {
    return (
        <div className="is-flex is-justify-content-center checkout-progress">
            <span className={stage === CheckoutState.CART && "is-underlined"}>Cart</span>
            <img className="no-gap" src={Arrow} alt="Arrow"/>
            <span className={stage === CheckoutState.ADDRESS && "is-underlined"}>Shipping</span>
            <img className="no-gap" src={Arrow} alt="Arrow"/>
            <span className={stage === CheckoutState.PAYMENT && "is-underlined"}>Payment</span>
        </div>
    )


}

export default CheckoutProgress;
