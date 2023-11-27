import React, { useState } from 'react'
import Header from '../components/Header'

const Contact = () => {
  const [data, setData] = useState(
    {
      name: "",
      email: "",
      msg: "",
    }
  );
  console.log(data);
  return (
    <>
      <Header />
      <section id="contact-us">
        <h1 className="heading">Contact Us</h1>
        <div className="container">
          <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })} />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })} />

            <label htmlFor="message">Message: </label>
            <input type="text" id="message" required
              value={data.msg}
              onChange={(e) => setData({ ...data, msg: e.target.value })} />

            <div className="btns">
              <input type="submit" />
              <input type="reset" />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact