import React, {useState} from "react";
import "./Discount.css";
import Product from "../Product/Product";

const Discount = ({products}) => {
    return(
        <div className="discount">
            <h1>Акции</h1>
            <div className="products">
                {products.map((product) => <Product product={product} key={product.id}/>)}
            </div>
        </div>
    )
}

export default Discount;