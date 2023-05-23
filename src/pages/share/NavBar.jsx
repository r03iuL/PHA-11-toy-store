import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authcontexts";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar px-20 bg-rose-600">
      <div className="navbar-start">
        <img width={'120px'} height={"120px"} src="https://i.ibb.co/ysvmrph/Icon.png" alt="" />
        <h1 className="font-bold text-white text-3xl">The Toy Shop </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  text-white font-semibold">
          <li>
            <Link> Home </Link>
          </li>
          <li>
            <Link to={`/Blog`}> Blog </Link>
          </li>
          <li>
            <Link to={"/alltoy"}> All Toy </Link>
          </li>

          <li>
          {user && <><Link to='/AddToys'>Add Toy</Link><Link to='/mytoy'>My Toy</Link></>}
          </li>
          
           
          
        </ul>
      </div>
      <div className="navbar-end">
      {user && <Link href=""><img className='rounded mr-3'style={{height:'40px'}} src={user.photoURL} alt=""/></Link>}
        {user ? (
          <Link
            onClick={handelLogOut}
            className="p-2 text-white font-semibold  bg-rose-800 rounded"
            to={`/LogIn`}
          >
            Log Out{" "}
          </Link>
        ) : (
          <div>
            {" "}
            <Link
              className="p-2 text-white font-semibold  bg-rose-800 rounded"
              to={`/LogIn`}
            >
              Log In{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
