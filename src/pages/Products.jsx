import React from 'react'
import Header from '../components/Header'

const Products = () => {
    return (
        <>
            <Header />
            <section className="products" id="product">
                <div className="container">
                    <h1>Our Products</h1><br /><hr />
                    <div className="row">
                        <div className="type"><h1>CATEGORIES</h1></div>
                        <div className="pcol">
                            <h2 className="heading"> ESSENTIALS </h2>
                            <img src={require("../images/toothbrush.jpg")} alt="" />
                            <div className="pdesc">
                                <p>Finely crafted just for you!</p>
                            </div>
                            <button className="btn">View More</button>
                        </div>
                        <div className="pcol">
                            <h2 className="heading"> DECOR </h2>
                            <img src={require("../images/i7.jpg")} alt="" />
                            <div className="pdesc">
                                <p>Finely crafted just for you!</p>
                            </div>
                            <button className="btn">View More</button>
                        </div>
                        <div className="pcol">
                            <h2 className="heading"> DAILY USE </h2>
                            <img src={require("../images/utensils.jpg")} alt="" />
                            <div className="pdesc">
                                <p>Finely crafted just for you!</p>
                            </div>
                            <button className="btn">View More</button>
                        </div>
                        <div className="pcol">
                            <h2 className="heading"> ALL PRODUCTS </h2>
                            <img src={require("../images/i8.jpg")} alt="" />
                            <div className="pdesc">
                                <p>Finely crafted just for you!</p>
                            </div>
                            <button className="btn">View More</button>
                        </div>
                        <div className="type"><h1>BEST SELLERS</h1></div>
                        <div className="pcol">
                            <h2 className="heading"> VASE </h2>
                            <img src={require("../images/vase.jpg")} alt="" />
                            <button className="btn">SHOP NOW</button>
                        </div>
                        <div className="pcol">
                            <h2 className="heading"> LAMPS </h2>
                            <img src={require("../images/Lamp.jpg")} alt="" />
                            <button className="btn">SHOP NOW</button>
                        </div>
                        <div className="pcol">
                            <h2 className="heading"> GLASS </h2>
                            <img src={require("../images/glasses.jpg")} alt="" />
                            <button className="btn">SHOP NOW</button>
                        </div>
                        <div className="pcol">
                            <h2 className="heading"> PLANTER </h2>
                            <img src={require("../images/Planter.jpg")} alt="" />
                            <button className="btn">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products