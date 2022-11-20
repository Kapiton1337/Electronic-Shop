import React, {useState} from "react";

const Search = () => {
    const [product, setProduct] = useState("Something")
    return(
        <div>
            <form>
                <input type="text" value={product} onChange={event=>setProduct(event.target.value)}/>
                <button onChange={()=>{}}>Поиск</button>
            </form>
        </div>
    )
}

export default Search;