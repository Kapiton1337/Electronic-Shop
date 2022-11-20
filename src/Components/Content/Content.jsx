import React, {useState} from "react";
import "./Slick/Slick.jsx";
import Slick from "./Slick/Slick";
import Discount from "./Discount/Discount";
import TopCategories from "./TopCategories/TopCategories";

const Content = ({products, categories}) => {
    return(
        <div className="item content">
            <Slick/>
            <Discount products={products}/>
            <TopCategories categories={categories}/>
        </div>
    )
}

export default Content;