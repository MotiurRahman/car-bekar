import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../assets/images/login/login.svg";
import { AuthUserContext } from "../../Context/AuthContext";

const Sign_up = () => {
  const { user, loading, createUser } = useContext(AuthUserContext);
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(true);
  const nevigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    setShow(false);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        const userInfo = userCredential.user;
        console.log(userInfo);
        setShow(true);
        setMsg("");
        form.reset();
        nevigate("/login");
      })
      .catch((error) => {
        setMsg(error.message);
        console.log("error", error);
        setShow(true);
      });
  };
  return (
    <div>
      <div className="hero w-full">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-3/4" src={loginimg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                {show ? (
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                ) : (
                  <button className={`btn btn-primary loading`}>loading</button>
                )}
              </div>
            </form>
            <p className="text-red-600 text-center">{msg}</p>
            <p className="m-3 text-center">
              Already have an account
              <Link className="text-orange-400 font-bold p-2" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_up;
