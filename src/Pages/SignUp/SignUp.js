import React from "react";
import { Link } from "react-router-dom";
import signUpImage from "../../assets/images/login/login.svg";
const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <div className="text-center">
          <img className="w-3/4" src={signUpImage} alt="" />
        </div>
        <form
          onSubmit={handleSignUp}
          className="card w-full shadow-2xl bg-base-100"
        >
          <h3 className="text-2xl font-bold text-center pt-10">Sign Up</h3>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered"
                name="name"
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </div>
          <p className="text-center pb-10">
            Already Have an Account ?{" "}
            <Link className="text-orange-600" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
