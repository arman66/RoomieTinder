import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const onChange = (e) => console.log("yeaaa");
  return (
    <Fragment>
      <section className="forms">
        <h1 className="large">Register Account</h1>
        <p className="register">Create your account</p>
        <form action="" className="login-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Register;
