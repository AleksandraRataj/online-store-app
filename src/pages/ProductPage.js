import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {detailsProduct} from "../actions/productActions";

const ProductPage = (props) => {

    const dispatch = useDispatch();
    const productID = props.match.params.id;
    const [quantity, setQuantity] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productID));
    }, [dispatch, productID]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productID}?quantity=${quantity}`);
    }

    return (
        <div>
            {loading ? (
                <LoadingBox/>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div>
                    <Link className="link" exact to='/'>Wróć do strony głównej</Link>
                    <div className="product row">
                        <div className="product__image-div  col-2">
                            <img className="product__image image large" src={product.image} alt={product.name}/>
                        </div>

                        <div className="product__wrapper">
                            <div className="product__description row-1">
                                <ul className="product__info-list">
                                    <li className="product__element">
                                        <h1 className="product__name">{product.name}</h1>
                                    </li>
                                    <li className="product__element">
                                        <Rating
                                            rating={product.rating}
                                            numReviews={product.numReviews}
                                        />
                                    </li>
                                    <li className="product__element">
                                        <p className="product__price">Cena: {product.price}zł</p>
                                    </li>
                                    <li className="product__element">
                                        <p className="product__info">Opis: {product.description}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="product__action row-2">
                                <div className="card card-body">
                                    <ul className="product__card-list">
                                        <li className="product__card-element">
                                            <div className="price">Cena: {product.price} zł</div>
                                        </li>
                                        <li className="product__card-element">
                                            <div className="status">
                                                Status:
                                                {product.countInStock > 0 ? (
                                                    <span className="success"> produkt dostępny</span>
                                                ) : (
                                                    <span className="danger"> produkt niedostępny</span>
                                                )}
                                            </div>
                                        </li>
                                        {
                                            product.countInStock > 0 && (
                                                <>
                                                    <li className="product__card-element">
                                                            <div className="product__select-wrapper">
                                                                <p>Ilość:</p>
                                                                <select
                                                                    className="product__select"
                                                                    value={quantity}
                                                                        onChange={(event) => setQuantity(event.target.value)}>
                                                                    {
                                                                        [...Array(product.countInStock).keys()].map(x => (
                                                                            <option key={x + 1}
                                                                                    value={x + 1}>{x + 1}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>
                                                    </li>
                                                    <li className="product__card-button">
                                                        <button
                                                            className="product__button primary block"
                                                            onClick={addToCartHandler}>
                                                            dodaj do koszyka
                                                        </button>
                                                    </li>
                                                </>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductPage;