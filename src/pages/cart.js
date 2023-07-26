import React, { useEffect, useRef, useState } from 'react';

import CartItem from "../components/shared/checkout/cartItem";
import PlaceOrder from "../components/shared/checkout/placeOrder";
import "./css/cart.css";
import { connect } from "react-redux"
import Layout from '../templates/layout';

function CartPage({ location }) {
    const data = new URLSearchParams(location.search);
    function calculateSubtotal(items) {
        return items.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr)
    }

    //fetch price data from query param
    const [cart, setCart] = useState((function () {
        const obj = {};
        const getPrice = (item) => {
            let total = 0;
            switch (item.base) {
                case "Butter":
                    total += 5;
                    break;
                case "Ghee":
                    total += 7;
                    break;
                case "Coconut Oil":
                    total += 6;
                    break;
                case "Avocado Oil":
                    total += 7;
                    break;
                case "Olive Oil":
                    total += 9;
                    break;
                default:
                    console.error("Base does not exist");
                    break;
            }

            switch (item.size) {
                case "2 Oz":
                    total += 4;
                    break;
                case "4 Oz":
                    total += 6;
                    break;
                case "8 Oz":
                    total += 9;
                    break;
                case "12 Oz":
                    total += 12;
                    break;
                case "16 Oz":
                    total += 15;
                    break;
                default:
                    console.error("Size does not exist");
                    break;
            }
            return total;
        }
        //load query params into state 
        for (const [key, value] of data.entries()) {
            obj[key] = value;
        }
        //manually assign price based on item
        obj['price'] = getPrice(obj);
        obj['quantity'] = 1;
        return [obj]
    })());

    const [cartSubtotal, setSubtotal] = useState(calculateSubtotal(cart));
    useEffect(() => {
        const result = calculateSubtotal(cart);
        setSubtotal(result);
    }, [cart])


    return (
        <Layout>
            <div className='cart-grid'>
                <div className='has-background-white-ter m-5 p-5'>
                    <div className="is-size-3">Shopping Cart</div>
                    <div>
                        {
                            cart.map(item => {
                                return (
                                    <React.Fragment>
                                        <div className='grid-container has-background-white-ter m-2 p-5'>
                                            <CartItem item={item} modifyCart={setCart} />
                                        </div>
                                    </React.Fragment>

                                )
                            })}
                    </div>
                    <hr />
                    <div className=''>Subtotal:
                        <strong>
                            ${cartSubtotal}
                        </strong>
                    </div>
                </div>
                <div className='has-background-white-ter m-5 p-5'>
                    <PlaceOrder cartSubtotal={cartSubtotal} items={cart} />
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
