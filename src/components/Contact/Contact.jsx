import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact--me pt-5">
        <h3 className="container text-center pt-4 mt-4">Let's get in touch</h3>
        <form className="container">
          <div>
            <label htmlFor="email" className="form-label">Write your email</label>
            <input type="text" name="email" className="form-control"/>
          </div>
          <div>
            <label htmlFor="subject">Choose an option</label>
            <select name="" id="" className="form-select">
              <option value="0"></option>
              <option value="1">I want to buy</option>
              <option value="2">I want to get in touch</option>
              <option value="3">I want to subscribe to your newsletter</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Write your thoughts</label>
            <textarea name="" id="" cols="30" rows="7" className="form-control"></textarea>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
              Send
            </button>
            <button type="reset" className="btn btn-outline-secondary m-3">
              Clear
            </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
