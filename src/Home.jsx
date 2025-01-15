import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Clothes from "./Clothes";

function Home() {
    const [clothes, setClothes] = useState(data);

    return (
        <div>
            <div className="container">
                <h2 className="back">Free Standard Shipping</h2>
            </div>
            <Buttons setClothes = { setClothes } />
            <Clothes anyClothes = { clothes }/>
        </div>
)
}

export default Home;