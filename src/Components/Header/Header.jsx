import React from "react"
import "./Header.css"
import Search from "./Search/Search";
import CatalogBtn from "./Buttons/CatalogBtn";
import LoginBtn from "./Buttons/LoginBtn";
import LikesBtn from "./Buttons/LikesBtn";
import ShoppingCartBtn from "./Buttons/ShoppingCartBtn";

const Header = () => {
    return(
        <div className="item header">
            <img src="https://miro.medium.com/max/256/1*dKSSlnsTw2M-VJMl_ROSdA.png" className="logo"/>
            <CatalogBtn/>
            <Search/>
            <LoginBtn/>
            <LikesBtn/>
            <ShoppingCartBtn/>
        </div>
    )
}

export default Header;