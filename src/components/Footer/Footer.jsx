import React from "react";
import "./Footer.css";
import FooterText from "./FooterText.jsx";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="my--footer">
          <div className="mt-5 pt-5 footer--form">
            <h2>SUBSCRIBE!!!</h2>
            <p>Be the first one to see my upcoming paintings right in your email</p>
            <form className="input-group text-center">
              <input
                type="email"
                className="form-control"
                placeholder="Write your email"
                aria-label="Write your email"
                aria-describedby="basic-addon2"
              />
              <button className="input-group-text" id="basic-addon2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <FooterText />
      </footer>
    </>
  );
};

export default Footer;
