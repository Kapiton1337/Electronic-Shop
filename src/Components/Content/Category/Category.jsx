import React from 'react';
import "./Category.css"

const Category = ({category}) => {
    return (
        <div className="category">
            <img src={category.picture}/>
            <div>{category.name}</div>
        </div>
    );
};

export default Category;