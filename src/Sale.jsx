import { useState } from "react";
import { datasale } from "./datasale";
import ButtonsSale from "./buttonsSale";
import ClotherSale from "./ClothesSale";

function Sale() {
    const [clothesSale, setClothesSale] = useState(datasale);

    const chosenSaleClothes = (searchTeam) => {
        const newClothes = datasale.filter(element =>
            element.searchTerm === searchTeam);
            setClothesSale (newClothes);
    }

    return(
        <div>
            <div className="cont">
                <h2 className="back">Free Standard Shipping</h2>
            </div>
            <ButtonsSale filteredSaleClother = { chosenSaleClothes}/>
            <ClotherSale anySaleClothes = { clothesSale }/>
        </div>
    )
}

export default Sale;