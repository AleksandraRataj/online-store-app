import React from 'react';
import {Link} from "react-router-dom";

import Rating from "./Rating";


const Product = (props) => {

    const {product} = props;
    const {_id, image, name, price, rating, numReviews} = product;

    return(
        <div key={_id} className="main__card">
            <Link className="main__product-link" to={`/product/${_id}`}>
                <img className="main__product-img medium" src={image} alt=""/>
            </Link>
            <div className="main__card-body">
                <Link className="main__product-link" to={`/product/${_id}`}>
                    <h2 className="main__product-title">{name}</h2>
                </Link>
                <Rating rating={rating} numReviews={numReviews}/>
                <h3 className="main__product-price">{price} zł</h3>
            </div>
        </div>
    );
}

export default Product;