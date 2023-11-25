import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
  return (
    // <div>main code imports from the components folder Header.jsx, ServiceCard.jsx
    //     ServiceCard contains props that is (heading,desc)
    // </div>
    <>
      <Header />
      <header>
        <div className="header_content">
          <h1>Eco-Friendly</h1>
          <h1>Reusable</h1>
          <h1>Craft Based</h1>
          <div className="line"></div><br />
          <h2>Carefully made to provide you the best products at your doorsteps</h2>
          <div className="shopnow"><Link className='hc'>SHOP NOW</Link></div>
        </div>
      </header>
    </>
  )
}

export default Home