import useDynamicTitle from "../../DynamicTitle/DynamicTitle";

const AddToys = () => {

  useDynamicTitle('Add Toys');

  const handleSubmit = event => {
    event.preventDefault();
      const form = event.target;
     const name = form.name.value ;
     const customerName = form.customerName.value ;
     const photoURL = form.photoURL.value ;
     const email = form.email.value;
     const sellerName = form.sellerName.value;
     const category = form.category.value ;
     const rating = form.rating.value ;
     const price = form.price.value ;
     const quantity = form.quantity.value ; 
     const orders = {
      name,
      email,
      customerName,
      price,
      photoURL,
      sellerName,
      category,
      rating,
      quantity,

     }
  console.log(orders)

  fetch('https://toy-server-five-nu.vercel.app/alltoys',{
    method : 'POST',
    headers:{'content-type':'application/json'},
    body: JSON.stringify(orders)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.acknowledged){
      alert('Update Successfull')
      // form.reset();
    }
  })
}
  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white p-6 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium">Toy Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter toy name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="customerName" className="block text-gray-700 font-medium">Customer Name:</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          placeholder="Enter customer name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="photoURL" className="block text-gray-700 font-medium">Photo URL:</label>
        <input
          type="text"
          id="photoURL"
          name="photoURL"
          placeholder="Enter photo URL"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sellerName" className="block text-gray-700 font-medium">Seller Name:</label>
        <input
          type="text"
          id="sellerName"
          name="sellerName"
          placeholder="Enter seller name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-medium">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter category"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 font-medium">Rating:</label>
        <input
          type="text"
          id="rating"
          name="rating"
          placeholder="Enter rating"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Enter price"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 font-medium">Quantity:</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="Enter quantity"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
        />
      </div>
      <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Add Toy</button>
    </form>
  );
};

export default AddToys;
