import React from 'react';
import "./Category.css"

const Category = ({category:{picture, name}}) => {
    return (
        <div className="category">
            <img src={picture}/>
            <div>{name}</div>
        </div>
    );
};

export default Category;