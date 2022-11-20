import React, {useState} from "react";
import "./Discount.css";
import Product from "../Product/Product";

const Discount = ({products, title}) => {
    return(
        <div className="discount">
            <h1>{title}</h1>
            <div className="products">
                {products.map((product) => <Product product={product} key={product.id}/>)}
            </div>
        </div>
    )
}

export default Discount;