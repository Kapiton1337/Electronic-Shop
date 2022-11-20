import React, {useState} from "react";
import "./Slick/Slick.jsx";
import Slick from "./Slick/Slick";
import Discount from "./Discount/Discount";
import TopCategories from "./TopCategories/TopCategories";

const Content = ({products, categories, discountTitle, topTitle}) => {
    return(
        <div className="item content">
            <Slick/>
            <Discount products={products} title={discountTitle}/>
            <TopCategories categories={categories} title={topTitle}/>
        </div>
    )
}

export default Content;