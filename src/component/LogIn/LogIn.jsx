import { Link } from "react-router-dom";
import { AuthContext } from "./../../providers/Authcontexts";
import { useContext } from "react";
import useDynamicTitle from "../../DynamicTitle/DynamicTitle";

const LogIn = () => {
  const { singIn ,googleLogIn } = useContext(AuthContext);
  useDynamicTitle('Log In');
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  console.log("here", from);

  const handleGoogle = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1684786123~exp=1684786723~hmac=d79add12a04d3c749af6f5db9ed01e2a6d37dab0e45c89e0cc851be7ebd2cba6"
              alt=""
              className="w-3/4 mx-auto"
            />
          </div>
          <div className="card p-12 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
              <div className="card-body ">
                <div className="form-control">
                  <h1 className="text-center text-4xl mb-5 font-bold">
                    {" "}
                    Log In !!
                  </h1>
                  <label className="label">
                    <span className="text-xl label-text font-semibold ">
                      Email
                    </span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="input input-bordered text-xl"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    name="password"
                    type="text"
                    placeholder="Password"
                    className="input input-bordered text-xl"
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="text-xl label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-2 border-red-800 my-4 bg-rose-500 text-xl">
                    Login
                  </button>

                  <button onClick={handleGoogle} className="btn border-2 border-red-800 my-4 bg-rose-500 ">
                    Log In with Google
                  </button>

                  <Link to={`/Reg`}>
                    <small>Dont have an account yet ? Register.</small>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
