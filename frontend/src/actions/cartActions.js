import Axios from "axios";
import {CART_ADD_ITEM, CART_DELETE_ITEM, CART_SAVE_SHIPPING_ADDRESS} from "../constants/cartConstants";

export const addToCart = (productID, quantity) => async (dispatch, getState) => {

    const {data} = await Axios.get(`/api/products/${productID}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            quantity,
        }
    });

    //po przeładowaniu strony zawartość koszyka pozostanie
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const deleteFromCart = (productID) => async (dispatch, getState) => {

    dispatch({
        type: CART_DELETE_ITEM,
        payload: productID
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
}