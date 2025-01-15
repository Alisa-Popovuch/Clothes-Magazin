import { useState } from "react";
import { datasale } from "./datasale";
import ButtonsSale from "./ButtonSale";
import ClotherSale from "./ClothesSale";

function Sale() {
    const [clothesSale, setClothesSale] = useState(datasale);

    return(
        <div>
            <div className="cont">
                <h2 className="back">Free Standard Shipping</h2>
            </div>
            <ButtonsSale setClothesSale = { setClothesSale }/>
            <ClotherSale anySaleClothes = { clothesSale }/>
        </div>
    )
}

export default Sale;