import React from 'react';
import OilPhoto1 from "../../../images/stock.svg";
import "./cartItem.css";

const CartItem = ({ item }) => {
    const { base, ingredients, size } = item;
    console.log(base, ingredients, size)
    return (
        <div className="cart-item">
            <div className="card-image">
                <figure className="image is-3x5 mr-3">
                    <img src={OilPhoto1} alt="Oil" />
                </figure>
            </div>
            <div className="cart-item-content">
                <div className="is-flex is-flex-direction-column  ">
                    <p className="m-0 mr-2">Base: {base}</p>
                    <p className="m-0">Size: {size}</p>
                    <p className="m-0">Ingredients: {ingredients}</p>
                </div>
                <div className="is-flex is-align-items-center">
                    <button className="button mr-3">Remove</button>
                    <p>Quantity: 1</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
