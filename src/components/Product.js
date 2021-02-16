import React from 'react';
import Rating from "./Rating";

const Product = (props) => {

    const {product} = props;
    const {_id, image, name, price, rating, numReviews} = product;

    return(
        <div key={_id} className="main__card">
            <a className="main__product-link" href={`/product/${_id}`}>
                <img className="main__product-img medium" src={image} alt=""/>
            </a>
            <div className="main__card-body">
                <a className="main__product-link" href={`/product/${_id}`}>
                    <h2 className="main__product-title">{name}</h2>
                </a>
                <Rating rating={rating} numReviews={numReviews}/>
                <h3 className="main__product-price">{price} zł</h3>
            </div>
        </div>
    );
}

export default Product;