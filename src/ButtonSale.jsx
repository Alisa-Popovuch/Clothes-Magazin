function ButtonsSale({ filteredSaleClother }) {
    return(
        <div className="cont">
            <button className="change" onClick={() => 
                filteredSaleClother("sweater")}>Sweaters</button>
            <button className="change" onClick={() =>
                filteredSaleClother("shoes")}>Shoes</button>
            <button className="change" onClick={() =>
                filteredSaleClother("dress")}>Dresses</button>
            <button className="change" onClick={() =>
                filteredSaleClother("T-Shirt")}>T-Shirts</button>
        </div>
    )
}

export default ButtonsSale;