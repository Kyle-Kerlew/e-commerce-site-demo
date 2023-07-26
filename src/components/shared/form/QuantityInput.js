import React from 'react';

export default function QuantityInput({quantity, decrementQuantity, incrementQuantity }) {

    return (
        <div class="field has-addons has-addons-right">
            <p class="control">
                <button class="button" onClick={decrementQuantity}>
                    -
                </button>
            </p>
            <p class="control">
                <input class="input" type="number" value={quantity} />
            </p>
            <p class="control">
                <button class="button" onClick={incrementQuantity}>
                    +
                </button>
            </p>
        </div>
    )

}
