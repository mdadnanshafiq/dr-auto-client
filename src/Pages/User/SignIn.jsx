import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import useAuth from "../../Hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import axios from "axios";

const SignIn = () => {
  const { signInUser } = useAuth();
  // const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        // const loggedUser = result.user;
        // const userEmail = { email };
        console.log(result);
        // axios
        //   .post("http://localhost:7000/jwt", userEmail, {
        //     withCredentials: true,
        //   })
        //   .then((data) => {
        //     console.log(data.data);
        //     if (data.data.success) {
        //       navigate(location?.state ? location?.state : "/");
        //     }
        //   });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-8 flex-col lg:flex-row">
        <div className="p-6 w-1/2">
          <img src={img} alt="" />
        </div>
        <div
          className="card shrink-0 w-full max-w-sm border
         bg-base-100 p-8"
        >
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form onSubmit={handleUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white font-bold border-none bg-orange-500">
                Sign In
              </button>
            </div>
          </form>
          <p>
            Dont Have an Account?{" "}
            <Link className="font-bold text-orange-500" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
