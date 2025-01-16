import { Link } from "react-router-dom";

function ClothesSale ({ anySaleClothes }) {
    return(
        <div className="products">
            { anySaleClothes.map ((element => {
                const { id, name, searchTerm, price, image } = element;
                return (
                    <div key={ id } className="product-card">
                        <Link to={"/about/${ item.title }"}>
                            <img src={ image } width={ 400 } height={ 500 } alt="sale clothes" />
                        </Link>
                        <div className="product-info">
                            <h3>{ name }</h3>
                            <h4>$ { price }</h4>
                            <Link to={ "about/${ item.title }" }>
                                <button className="change">Show more</button>
                            </Link>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default ClothesSale;