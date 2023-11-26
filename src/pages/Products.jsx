import React from 'react'
import Header from '../components/Header'

const Products = () => {
    return (
        <>
            <Header />
            <section className="products" id="product">
                <div className="container">
                    <h1>Our Products</h1><br /> <hr />
                    <div className="row">
                        <div className="pcol">
                            <h2 className="heading"> ESSENTIALS </h2>
                            <img src={require("../images/toothbrush.jpg")} alt="" />
                            <div className="pdesc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, distinctio a ipsa, quas aliquid dolores veniam quo sed unde eveniet enim pariatur delectus deleniti quaerat atque consectetur nostrum labore asperiores?</p>
                            </div>
                            <button className="btn">SHOP NOW</button>
                        </div>
                        <div className="pcol">
                            <h2 className="heading"> DECOR </h2>
                            <img src={require("../images/i7.jpg")} alt="" />
                            <div className="pdesc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, distinctio a ipsa, quas aliquid dolores veniam quo sed unde eveniet enim pariatur delectus deleniti quaerat atque consectetur nostrum labore asperiores?</p>
                            </div>
                            <button className="btn">SHOP NOW</button>
                        </div>
                        <div className="pcol">
                            <h2 className="heading"> DAILY USE </h2>
                            <img src={require("../images/utensils.jpg")} alt="" />
                            <div className="pdesc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, distinctio a ipsa, quas aliquid dolores veniam quo sed unde eveniet enim pariatur delectus deleniti quaerat atque consectetur nostrum labore asperiores?</p>
                            </div>
                            <button className="btn">SHOP NOW</button>
                        </div>
                        <div className="pcol">
                            <h2 className="heading"> VIEW ALL </h2>
                            <img src={require("../images/i8.jpg")} alt="" />
                            <div className="pdesc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, distinctio a ipsa, quas aliquid dolores veniam quo sed unde eveniet enim pariatur delectus deleniti quaerat atque consectetur nostrum labore asperiores?</p>
                            </div>
                            <button className="btn">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products