import { datasale } from "./datasale";

function ButtonsSale({ setClothesSale }) {
    const filteredSaleClother = (searchTeam) => {
        const newClothes = datasale.filter(element =>
            element.searchTerm === searchTeam);
            setClothesSale (newClothes);
    }
    return(
        <div className="cont">
            <button className="change" onClick = {() => setClothesSale(datasale)}>All</button>
            <button className="change" onClick={() => filteredSaleClother("sweater")}>Sweaters</button>
            <button className="change" onClick={() => filteredSaleClother("shoes")}>Shoes</button>
            <button className="change" onClick={() => filteredSaleClother("dress")}>Dresses</button>
            <button className="change" onClick={() => filteredSaleClother("T-Shirt")}>T-Shirts</button>
        </div>
    )
}

export default ButtonsSale;