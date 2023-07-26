import React, { useEffect, useState } from 'react';
import OilPhoto1 from "../../../images/rosemary-oil-2.jpg";
import "./cartItem.css";
import QuantityInput from '../form/QuantityInput';

const CartItem = ({ item, modifyCart }) => {
    const { base, size, ingredients, price } = item;
    const [quantity, setQuantity] = useState(1);

    function incrementQuantity() {
        modifyCart(prev => {
            setQuantity(prev => prev + 1);
            prev[0]['quantity'] = prev[0].quantity + 1;
            return [...prev];
        });
    }

    function decrementQuantity() {
        setQuantity(prev => prev - 1);
        modifyCart(prev => {
            prev[0]['quantity'] = prev[0].quantity - 1;
            return [...prev];
        });
    }

    return (
        <React.Fragment>

            <div className='is-flex is-flex-direction-column gap-1'>
                <div className='is-flex gap-1'>
                    <div className="card-image">
                        <figure className='image is-128x128'>
                            <img className='is-fullheight' src={OilPhoto1} alt="Oil" />
                        </figure>
                    </div>
                    <div>
                        <p className='subtitle'> {`${size} ${base} infused with ${ingredients}`}</p>
                        <p className="m-0">Base: {base}</p>
                        <p className="m-0">Size: {size}</p>
                        <p className="m-0">Ingredients: {ingredients}</p>
                        <p className="m-0 has-text-weight-bold">${price}</p>
                    </div>
                </div>
                <div className='is-flex is-align-items-center is-justify-content-flex-start'>
                    <QuantityInput quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
                </div>
            </div>
        </React.Fragment >
    )
}

export default CartItem;
