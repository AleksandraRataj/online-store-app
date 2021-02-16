import React from 'react';
import data from './data';

function App() {
  return (
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

          <div className="row center">

              {
                  data.products.map(product => (
                      <div key={product._id} className="main__card">
                          <a className="main__product-link" href={`/product/${product._id}`}>
                              <img className="main__product-img medium" src={product.image} alt=""/>
                          </a>
                          <div className="main__card-body">
                              <a className="main__product-link" href={`/product/${product._id}`}>
                                  <h2 className="main__product-title">{product.name}</h2>
                              </a>
                              <div className="main__product-rating">
                        <span className="main__product-rating--star">
                            <i className="fa fa-star"></i>
                        </span>
                                  <span className="main__product-rating--star">
                            <i className="fa fa-star"></i>
                        </span>
                                  <span className="main__product-rating--star">
                            <i className="fa fa-star"></i>
                        </span>
                                  <span className="main__product-rating--star">
                            <i className="fa fa-star"></i>
                        </span>
                                  <span className="main__product-rating--star">
                            <i className="fa fa-star"></i>
                        </span>
                                  <h3 className="main__product-price">{product.price} zł</h3>
                              </div>
                          </div>
                      </div>
                  ))
              }
          </div>
        </main>
        <footer className=".footer">
          <p className="footer__text">All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App;
