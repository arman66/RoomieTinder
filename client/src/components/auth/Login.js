import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // destructure name etc... form fromData
  const { email, password } = formData;
  // action on the field to change the form date to the target value
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //onSubmit fuction for the form
  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  //redirect if logged in

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <section className="forms">
        <h1 className="large">Login Account</h1>
        <p className="register">Sign into your account</p>
        <form action="" className="login-form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>

          <input type="submit" className="btn" value="Login" />
        </form>
        <p className="my-1">
          Dont have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

Login.prototypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
