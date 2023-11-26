import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <>
      <Header />
      <section className="about" id="about_us">
        <div className="container">

          <div className="row">
            <div className="col1">
              <div className="about_card1">
                <img src={require("../images/i4.jpg")} alt="" />
                <div className="desc1">
                  <h1><u>ABOUT US</u></h1><br />
                  <p>CRAFT CORNER is an eco-friendly online store. If you are searching for eco-friendly products and want to give your contribution to the environment by using natural products. You are in the right place! We are India's private platform which gives you the best of nature made by our skillful makers with traditional skills and modern designs. Our products are eco-friendly, reusable, craft-based, decomposable, and very carefully made to provide you the best products at your door. We dream to have a world where there are less plastic and more natural things around us. We want people to obtain a sustainable lifestyle to have a better future and a healthy environment.</p>
                </div>
              </div>
            </div>

            <div className="col1">
              <div className="about_card2">
                <img src={require("../images/i6.jpg")} alt="" />
                <div className="desc2">
                  <h1>OUR MISSION</h1><br />
                  <p>We will strengthen and support our community of consumers , designers, artisans, farmers, makers and entrepreneurs inspired by rural India while protecting the natural environment. Creating a web presence of Indian village products is that the ultimate mission of our organization. It's a market place where the crafts of artisan across the length and breadth of India join together.</p><br />
                  <h1>WHY BAMBOO</h1><br />
                  <p>Bamboo is considered the wise man timber. Bamboo is the planet's largest grass. Native species can be found on all continents, (except Antarctica), from the coastal South Pacific islands to the Himalayan mountains.
                  </p><br />
                  <p>Bamboo typically reaches full height and width within the first 12 months of its life. During the next few years its cell walls will continue to thicken and grow stronger until it reaches peak maturity, usually between 5 and 7 years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About