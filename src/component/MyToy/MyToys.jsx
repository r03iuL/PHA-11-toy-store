import { useContext, useState } from "react";
import Toycard from "./Toycard";
import { AuthContext } from "../../providers/Authcontexts";
import useDynamicTitle from "../../DynamicTitle/DynamicTitle";

const MyToys = () => {
  useDynamicTitle("My Toy");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url = `https://toy-server-five-nu.vercel.app/alltoys?email=${user?.email}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setToys(data);
    });
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://toy-server-five-nu.vercel.app/alltoys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successfully");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };
  return (
    <div>
      {/* <h2>Total toy : {toys.length}</h2> */}

      <div className="overflow-x-auto w-full mb-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <thead>
            <th>
            {toys.map((toy) => (
              <Toycard
                key={toy._toy}
                toy={toy}
                handleDelete={handleDelete}
              ></Toycard>
            ))}

            </th>
            </thead>
          
        
        </table>
      </div>
    </div>
  );
};

export default MyToys;
