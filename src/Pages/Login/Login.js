import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <div className="text-center">
          <img className="w-3/4" src={loginImage} alt="" />
        </div>
        <form
          onSubmit={handleLogin}
          className="card w-full shadow-2xl bg-base-100"
        >
          <h3 className="text-2xl font-bold text-center pt-10">Login</h3>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <Link to="" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </div>
          <p className="text-center pb-10">
            New at Genius Car?
            <Link to="/signUp" className="text-orange-600 ">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
