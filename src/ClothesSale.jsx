function ClothesSale ({ anySaleClothes }) {
    return(
        <div className="products">
            { anySaleClothes.map ((element => {
                const { id, name, searchTerm, price, image } = element;
                return (
                    <div key={ id } className="product-card">
                        <img src={ image } width={ 400 } height={ 500 } alt="sale clothes" />
                        <div className="product-info">
                            <h3>{ name }</h3>
                            <h4>$ { price }</h4>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default ClothesSale;