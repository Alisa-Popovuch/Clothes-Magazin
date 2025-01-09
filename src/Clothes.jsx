function Clothes({ anyClothes }) {

    return(
        <div className="products">
            { anyClothes.map (( element => {
                const { id, name, searchTerm, price, image } = element;
                return (
                    <div key={ id } className="product-card">
                        <img src={ image } alt="clothes" width={400} height={500}/>
                        <div className="product-info">
                            <h3>{ name }</h3>
                            <h4> $ { price }</h4>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Clothes;