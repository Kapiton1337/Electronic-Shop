import React from 'react';
import Category from "../Category/Category";
import "./TopCategories.css"

const TopCategories = ({categories}) => {
    return (
        <div className="top">
            <h1>Популярные категории товаров</h1>
            <div className="categories">
                {categories.map((category) => <Category category={category} key={category.id}/>)}
            </div>
        </div>
    );
};

export default TopCategories;