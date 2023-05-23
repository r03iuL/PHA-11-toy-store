import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authcontexts";

function Tabs() {
  const { user } = useContext(AuthContext);

  const [categorys, setCategorys] = useState([]);
  const handleCategory = (category) => {
    fetch(`https://toy-server-five-nu.vercel.app/alltoys?category=${category}`)
      .then((res) => res.json())
      .then((data) => setCategorys(data));
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  };
  return (
    <div className="mt-5 mb-7 py-5">
      <h2 className="font-bold text-center text-5xl mt-4 mb-6">Sub Categorys</h2>
      <div className="tabs tabs-boxed flex justify-center mb-5">
        <a onClick={() => handleCategory("starwars")} className="tab ">
          Star Wars
        </a>
        <a onClick={() => handleCategory("avengers")} className="tab ">
          Avengers
        </a>
        <a onClick={() => handleCategory("transformers")} className="tab">
          Transformers
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {categorys &&
          categorys.map((category) => {
            return (
              <>
                <div className="card mx-20 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={category.photoURL}
                      alt="Shoes"
                      className="h-[350px] w-[3500px]"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Name : {category.name}{" "}
                    </h2>
                    <p>Price : {category.price}</p>
                    <p>Rating : {category.rating}</p>
                    <div className="card-actions justify-end">
                      {user ? (
                        <Link to={`/details/${category._id}`}>
                          {" "}
                          <button className="btn btn-primary">View more</button>
                        </Link>
                      ) : (
                        <Link to="/login">
                          {" "}
                          <button className="btn btn-primary">View more</button>
                        </Link>
                      )}
                      {/* <button className="btn btn-primary">View more</button>  */}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Tabs;
