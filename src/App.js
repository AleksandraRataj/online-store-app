import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <nav className="header__nav">
                        <div className="header__nav-logo">
                            <a className="header__nav-link-logo" href="/">PlantsForYou</a>
                        </div>
                        <ul className="header__nav-list">
                            <li className="header__nav-element">
                                <a className="header__nav-link" href="/cart">Koszyk</a>
                            </li>
                            <li className="header__nav-element">
                                <a className="header__nav-link" href="/signin">Zaloguj się</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className="main">

                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/product/:id" component={ProductPage}/>

                </main>
                <footer className="footer">
                    <p className="footer__text">All rights reserved.</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
