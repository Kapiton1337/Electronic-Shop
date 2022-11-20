import React, {useState} from "react";
import "./Search.css"

const Search = () => {
    const [product, setProduct] = useState("Something");

    const typingInput = (event) => {
        event.preventDefault();
        setProduct(event.target.value);
    }

    return(
        <div>
            <form>
                <input type="text" value={product} onChange={typingInput} className="searchInput"/>
                <button onChange={()=>{}}>Поиск</button>
            </form>
        </div>
    )
}

export default Search;