import { Link } from "react-router-dom";

const Toycard = ({ toy, handleDelete }) => {
  const {
    _id,
    name,
    customerName,
    price,
    photoURL,
    sellerName,
    category,
    rating,
    quantity,
    email,
  } = toy;
  return (
    <div>
      <tr>
        <th>
          {/* onClick={()=> handleDelete(_id)} */}
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Name: {name}</div>
              <div className="font-bold">Customer Name: {customerName}</div>
              <div className="text-sm opacity-50">Seller Email: {email}</div>
            </div>
          </div>
        </td>
        <td>{price}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <th>
          {/* to={`/update/${_id}}`} */}
          <Link to={`/update/${_id}`}>
            <button className="btn btn-ghost btn-5xl">Update</button>
          </Link>
          {/* <button  className="btn btn-ghost btn-xs">Update</button> */}
        </th>
      </tr>
    </div>
  );
};

export default Toycard;
