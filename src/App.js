import React, {useState} from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import "./Styles/App.css"

const DEFAULT_PIC = "https://m4-shop.com/upload/iblock/6e7/no_photo_medium.png";

function App() {
    const [products, setProducts] = useState(
        [
            {id: 1, picture: DEFAULT_PIC, name: "Чайник", grade: "5", price: "1000"},
            {id: 2, picture: DEFAULT_PIC, name: "Чайник2", grade: "5", price: "1000"},
            {id: 3, picture: DEFAULT_PIC, name: "Чайник3", grade: "5", price: "1000"},
            {id: 4, picture: DEFAULT_PIC, name: "Чайник4", grade: "5", price: "1000"}
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
        <Content products={products} categories={categories}/>
    </div>
  );
}

export default App;
