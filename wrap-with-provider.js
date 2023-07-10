import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
const initialState = {
    cart: []
}
const reducer = (state, action) => {
    if (action.type === `ADD_TO_CART`) {
        console.log("add to cart called", action)
        return Object.assign({}, state, {
            cart: state.cart.concat(action.data),
        })
    }
    return state
}


export default ({ element }) => {
    // Instantiating store in `wrapRootElement` handler ensures:
    //  - there is fresh store for each SSR page
    //  - it will be called only once in browser, when React mounts
    const store = createStore(reducer, initialState);
    return <Provider store={store}>{element}</Provider>
}