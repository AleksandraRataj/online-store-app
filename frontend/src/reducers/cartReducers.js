import {CART_ADD_ITEM, CART_DELETE_ITEM} from "../constants/cartConstants";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:

            const item = action.payload;
            //sprawdzenie czy jest już product o takim id w koszyku
            const existItem = state.cartItems.find(x => x.product === item.product);
            if (existItem) {
                //zamieniamy starszy na nowy produkt
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x),
                }
            } else {
                //concat
                return {...state, cartItems: [...state.cartItems, item]}
            }

        case CART_DELETE_ITEM:

            return {...state, cartItems: state.cartItems.filter(x => x.product !== action.payload)}

        default:
            return state;
    }
}