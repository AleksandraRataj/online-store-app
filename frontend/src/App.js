import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import {useSelector} from "react-redux";

function App() {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

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
                            <li className="header__nav-element">
                                <Link className="header__nav-link" to="/signin">Zaloguj się</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="main">

                    <Route exact path="/" component={HomePage}/>
                    <Route path="/product/:id" component={ProductPage}/>
                    <Route path="/cart/:id?" component={CartPage}/>

                </main>
                <footer className="footer">
                    <p className="footer__text">All rights reserved.</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
