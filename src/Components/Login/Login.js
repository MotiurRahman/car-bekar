import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginimg from "../../assets/images/login/login.svg";
import { AuthUserContext } from "../../Context/AuthContext";

const Login = () => {
  const { user, loading, signIn, setLoading } = useContext(AuthUserContext);
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    setShow(false);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setShow(true);
        setMsg("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setMsg(error.message);
        setShow(true);
      })
      .finally(() => {
        setLoading(false);
        alert("check");
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
            <h1 className="text-5xl font-bold text-center">Login!</h1>
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
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
                  name="password"
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
                {show ? (
                  <input
                    className={`btn btn-primary`}
                    type="submit"
                    value="Login"
                  />
                ) : (
                  <button className={`btn btn-primary loading`}>loading</button>
                )}
              </div>
            </form>
            <p className="text-red-600 text-center">{msg}</p>
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
