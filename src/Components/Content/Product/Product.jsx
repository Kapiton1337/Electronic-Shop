import React from "react";
import "./Product.css"

const Product = ({product: {picture, name, price, grade, saleBtn, favoriteBtn, sales}}) => {
    return(
        <div className="product">
            <img src={picture}/>
            <div>{name}</div>
            <div>{grade}</div>
            <div>{price}</div>
            <div>{sales}</div>
            <div>{saleBtn}</div>
            <div>{favoriteBtn}</div>
        </div>
    )
}

export default Product;