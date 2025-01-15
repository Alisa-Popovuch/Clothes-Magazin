import { data } from "./data";

function Buttons({ setClothes }) {

    const filteredClothes = (searchTerm) => {
        const newClothesArray = data.filter ( item => 
            item.searchTerm.includes(searchTerm))
            setClothes(newClothesArray)
    }

    return(
        <div className="container">
            <div className="classContainer">
                <button className="class" onClick={() => setClothes(data)}>All</button>
                <button className="class" onClick={() => filteredClothes("woman")}>Woman</button>
                <button className="class" onClick={() => filteredClothes("man")}>Man</button>
                <button className="class" onClick={() => filteredClothes("baby")}>Baby</button>
            </div>
            <div className="classClothes">
                <button className="change" onClick={() => filteredClothes("dress")}>Dresses</button>
                <button className="change" onClick={() => filteredClothes("skirt")}>Skirts</button>
                <button className="change" onClick={() => filteredClothes("pants")}>Pants</button>
                <button className="change" onClick={() => filteredClothes("shoes")}>Shoes</button>
                <button className="change" onClick={() => filteredClothes("skirt")}>Shirts</button>
                <button className="change" onClick={() => filteredClothes("toys")}>Toys</button>
                <button className="change" onClick={() => filteredClothes("pullover")}>Pullovers</button>
                <button className="change" onClick={() => filteredClothes("jacket")}>Jacket</button>
            </div>
        </div>
    )
}

export default Buttons;