import React from "react";
import "./Product.css"

const Product = (props) => {
    return(
        <div className="product">
            <img src={props.product.picture}/>
            <div>{props.product.name}</div>
            <div>{props.product.grade}</div>
            <div>{props.product.price}</div>
        </div>
    )
}

export default Product;