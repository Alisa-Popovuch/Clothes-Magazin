import { Link } from "react-router-dom";

function Clothes({ anyClothes }) {

    return(
        <div className="products">
            { anyClothes.map (( element => {
                const { id, name, searchTerm, title, price, image } = element;
                return (
                    <div key={ id } className="product-card">
                        <Link to= { `/about/${title}` }>
                            <img src={ image } alt="clothes" width={400} height={500}/>
                        </Link>
                        <div className="product-info">
                            <h3>{ name }</h3>
                            <h4> $ { price }</h4>
                        <Link to= { `/about/${title}` }>
                            <button className="change">Show more</button>
                        </Link>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Clothes;