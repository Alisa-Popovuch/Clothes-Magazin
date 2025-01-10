function Contact() {
    return(
        <div>
            <div className="container">
                <h1 className="contact">Contact our frendly team</h1>
                <p>Let us now how we can help</p>
            </div>
            <div className="head">
                <div className="header">
                    <img src="https://img.icons8.com/?size=100&id=IzoiqmIwimNm&format=png&color=000000" width={35} alt="icon" />
                    <br></br>
                    <h2>Chat to sales</h2>
                    <p className="text">Speak to our frendly team</p>
                    <a href="mailto:salesMagazine@gmail.com" className="linkContact" target="_blank">salesMagazine@gmil.com</a>
                </div>
                <div className="header">
                    <img src="https://img.icons8.com/?size=100&id=CjfWUF8sg69C&format=png&color=000000" width={35} alt="icon" />
                    <br></br>
                    <h2>Chat to support</h2>
                    <p className="text">We are here to help you</p>
                    <a href="mailto:supportMagazine@mail.com" className="linkContact" target="_blank">supportMagazine@mail.com</a>
                </div>
                <div className="header">
                    <img src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000" width={35} alt="icon" />
                    <br></br>
                    <h2>Call us</h2>
                    <p className="text">Mon-Fri from 8am to 5pm</p>
                    <a href="tel:+4915000000000" className="linkContact" target="_blank">+4915000000000</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;