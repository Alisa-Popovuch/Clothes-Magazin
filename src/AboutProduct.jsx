import { useParams, useNavigate } from "react-router-dom";
import { data } from "./data";
import { datasale } from "./datasale";

function AboutProduct() {
    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
            <div>
                { data.filter((item) => item.title === title).map((elem, index) => {
                    return (
                        <div className="about" key = { index }>
                            <img src={ elem.image } alt= "product" width={ 400 }/>
                            <div className="card">
                                <h1> { elem.name } </h1>
                                <p> {elem.about} </p>
                                <div className="sizeContainer">
                                    <button className="size"> { elem.sizeOne }</button>
                                    <button className="size"> { elem.sizeTwo }</button>
                                    <button className="size"> { elem.sizeFree }</button>
                                    <button className="size"> { elem.sizeFour }</button>
                                </div>
                                <div className="btnContainer">
                                    <button className="btn">Order</button>
                                    <button className="btn" onClick={() => navigate(-1)}>Go back</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                {datasale.filter((itemSale) => itemSale.title === title).map((elemSale,indexSale) => {
                    return(
                        <div className="aboutSale" key={ indexSale }>
                            <img className="imgSale" src={ elemSale.image } alt="product-sale" width={450} />
                            <div className="cardSale">
                                <h1> { elemSale.name } </h1>
                                <p> {elemSale.about} </p>
                                <div className="sizeContainer">
                                    <button className="size"> { elemSale.sizeOneSale }</button>
                                    <button className="size"> { elemSale.sizeTwoSale }</button>
                                    <button className="size"> { elemSale.sizeFreeSale }</button>
                                    <button className="size"> { elemSale.sizeFourSale }</button>
                                </div>
                                <div className="btnContainer">
                                    <button className="btn">Order</button>
                                    <button className="btn" onClick={() => navigate(-1)}>Go back</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutProduct;