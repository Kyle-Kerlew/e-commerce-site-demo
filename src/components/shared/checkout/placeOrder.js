import React from 'react';

const PlaceOrder = ({handleSubmit}) => {
    return (
        <div className="is-flex-grow-1 is-align-items-center is-justify-content-center">
            <div className="card p-3 is-fullheight">
                <div className="is-flex is-flex-direction-column">
                    <p className="is-size-5 mb-1 has-text-centered">Price Details</p>
                    <div className="mb-5">
                        <div className="is-flex is-justify-content-space-between">
                            <p>Cost:</p>
                            <p>$45</p>
                        </div>
                        <div className="is-flex is-justify-content-space-between">
                            <p>Tax:</p>
                            <p>$3.45</p>
                        </div>
                        <hr className="mt-1"/>
                        <div className="is-flex is-justify-content-space-between">
                            <b>Total</b>
                            <b>$48.45</b>
                        </div>
                    </div>
                    <button className="button is-primary" onClick={handleSubmit}>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder;
