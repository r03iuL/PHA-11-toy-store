import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import LogIn from "./../LogIn/LogIn";
import { AuthContext } from "../../providers/Authcontexts";
import useDynamicTitle from "../../DynamicTitle/DynamicTitle";

const Reg = () => {
  useDynamicTitle('Registration');
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  // useTitle('Regiter');
  const handeRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    // localStorage.setItem('photo', JSON.stringify(photo))

    setError("");
    if (password.length < 6) {
      setError("password must be 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        form.reset();
        console.log(createUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <form onSubmit={handeRegister}>
            <div className="card p-12 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body ">
                <div className="form-control">
                  <h1 className="text-center text-4xl mb-5 font-bold">
                    {" "}
                    Register!!
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Photo Url
                    </span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Password"
                    className="input input-bordered text-xl"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-2 border-red-800 bg-rose-500 text-xl">
                    Register
                  </button>
                  <Link to={`/LogIn`}>
                    <small>Already have an account yet ? LogIn.</small>
                  </Link>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center lg:text-left">
            <img
              src="https://img.freepik.com/free-vector/client-database-analysis-marketing-strategy-crm-planning-target-audience-research-expert-analyst-studying-end-user-preferences-profiles-vector-isolated-concept-metaphor-illustration_335657-2765.jpg?t=st=1684797521~exp=1684798121~hmac=e09000ba4a3ed41a552684c8b26e16a0cbe3a8965e19bf5ecffb5d40029c22b3"
              alt=""
              className="w-3/4 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
