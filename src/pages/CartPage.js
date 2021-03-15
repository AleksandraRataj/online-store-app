import React, {useEffect} from "react";
import {addToCart, deleteFromCart} from "../actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import MessageBox from "../components/MessageBox";

const CartPage = (props) => {

    const productID = props.match.params.id;
    const quantity = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const dispatch = useDispatch();
    useEffect(() => {
        if (productID) {
            dispatch(addToCart(productID, quantity))
        }
    }, [dispatch, productID, quantity]);

    const removeFromCartHandler = (productID) => {
        dispatch(deleteFromCart(productID));
    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }

    return (
        <div className="cart">
            <div className="cart__wrapper">
                <h1 className="cart__title">Koszyk</h1>
                {cartItems.length === 0 ? <MessageBox> Koszyk jest pusty.
                    <Link exact to='/'>Przejdź do zakupów.</Link>
                </MessageBox> : (
                    <ul className="cart__list">
                        {
                            cartItems.map((item) => (
                                <li className="cart__element" key={item.product}>
                                    <div className="row">
                                        <div>
                                            <img className="cart__image" src={item.image} alt={item.name}/>
                                        </div>
                                    </div>
                                    <div className="cart__info">
                                        <Link className="cart__link" to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <select
                                            value={item.quantity}
                                            onChange={(event) =>
                                                dispatch(addToCart(item.product, Number(event.target.value)))
                                            }>
                                            {
                                                [...Array(item.countInStock).keys()].map(x => (
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        {item.price}zł
                                    </div>
                                    <div>
                                        <button type="button" onClick={() => removeFromCartHandler(item.product)}>
                                            Usuń
                                        </button>
                                    </div>
                                </li>
                            ))
                        }</ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Podsumowanie:
                            </h2>
                            <p>Ilość produktów: {cartItems.reduce((a, c) => a + c.quantity, 0)}</p>
                            <p>Cena: {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}zł</p>
                        </li>
                        <li>
                            <button
                                className="primary block"
                                type="button"
                                onClick={checkoutHandler}
                                disabled={cartItems.length === 0}>
                                Złóż zamówienie i opłać
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CartPage;