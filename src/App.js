import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import "./Styles/App.css"

const DEFAULT_PIC = "https://m4-shop.com/upload/iblock/6e7/no_photo_medium.png";

function App() {
    const [products, setProducts] = useState(
        [
            {id: 1, picture: DEFAULT_PIC, name: "Чайник", grade: "5", price: "1000", saleBtn: "Купить", sales: 0, favoriteBtn: "В избранное"},
            {id: 2, picture: DEFAULT_PIC, name: "Чайник2", price: "1000", saleBtn: "Купить", sales: 0, favoriteBtn: "В избранное"},
            {id: 3, picture: DEFAULT_PIC, name: "Чайник3", price: "1000", saleBtn: "Купить", sales: 0, favoriteBtn: "В избранное"},
            {id: 4, picture: DEFAULT_PIC, name: "Чайник4", price: "1000", saleBtn: "Купить", sales: 0, favoriteBtn: "В избранное"}
        ]
    )

    const [categories, setCategories] = useState(
        [
            {picture: DEFAULT_PIC, name: "Системные блоки"},
            {picture: DEFAULT_PIC, name: "Мониторы"},
            {picture: DEFAULT_PIC, name: "Чайники"},
            {picture: DEFAULT_PIC, name: "Холодильники"},
        ]
    )

  return (
    <div className="app">
        <Header/>
        <Content products={products} categories={categories} discountTitle={"Акции"} topTitle={"Популярные категории товаров"}/>
    </div>
  );
}

export default App;
