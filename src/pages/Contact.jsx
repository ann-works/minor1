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
      <section className="contact-us" id="contact-us">
        <div className="form-container">
          <div className="con"><h1>Contact Us</h1></div>
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
            <textarea name="message" cols="30" rows="10"
              value={data.msg}
              onChange={(e) => setData({ ...data, msg: e.target.value })}></textarea>

            <div className="btns">
              <input type="submit" />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact