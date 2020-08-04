import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onChange = (e) => console.log("onchange");

  const onSubmit = async (e) => {
    console.log("loginn");
  };
  return (
    <Fragment>
      <section className="forms">
        <h1 className="large">Log In</h1>
        <p className="lead">Sign Into Your Account</p>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChange}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Login;
