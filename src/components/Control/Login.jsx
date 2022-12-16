import React from "react";
import "./Control.css";

const Control = () => {
  return (
    <>
      <section className="conba">
        <form className="row g-3">
          <div className="col-auto">
            <label htmlFor="email" className="visually-hidden">
              Email
            </label>
            <input type="Email" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
          <div className="col-auto">
            <label htmlFor="inputPassword2" className="visually-hidden">
              Password
            </label>
            <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Confirm identity
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Control;
