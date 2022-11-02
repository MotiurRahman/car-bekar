import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="hero w-full">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={loginimg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Login!</h1>
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
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
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="m-3 text-center">
              New to Genius car{" "}
              <Link className="text-orange-400 font-bold p-2" to="/signup">
                Sign-up
              </Link>{" "}
              Car
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
