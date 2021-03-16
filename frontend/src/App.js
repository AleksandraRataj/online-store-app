import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import {useDispatch, useSelector} from "react-redux";
import SigninPage from "./pages/SigninPage";
import {signout} from "./actions/userActions";
import RegisterPage from "./pages/RegisterPage";
import ShippingAddressPage from "./pages/ShippingAddressPage";

function App() {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;

    const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout);
    }

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <nav className="header__nav">
                        <div className="header__nav-logo">
                            <Link className="header__nav-link-logo" exact to="/">PlantsForYou</Link>
                        </div>
                        <ul className="header__nav-list">
                            <li className="header__nav-element">
                                <Link className="header__nav-link" to="/cart">Koszyk
                                    {cartItems.length > 0 && (
                                        <span className="badge">{cartItems.length}</span>
                                    )}
                                </Link>
                            </li>
                            <li className="header__nav-element dropdown">
                                {
                                    userInfo ? (
                                        <div>
                                            <Link className="dropdown__user-info" to="#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                                            <ul className="dropdown__content">
                                                <Link className="dropdown__content-element" to="#signout" onClick={signoutHandler}>Wyloguj się</Link>
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link className="header__nav-link" to="/signin">Zaloguj się</Link>
                                    )
                                }
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="main">

                    <Route exact path="/" component={HomePage}/>
                    <Route path="/product/:id" component={ProductPage}/>
                    <Route path="/cart/:id?" component={CartPage}/>
                    <Route path="/signin" component={SigninPage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/shipping" component={ShippingAddressPage}/>

                </main>
                <footer className="footer">
                    <p className="footer__text">All rights reserved.</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
