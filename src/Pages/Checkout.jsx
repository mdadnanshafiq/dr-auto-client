import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  console.log(service);
  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const title = service.title;
    const image = service.img;
    const booking = {
      name,
      email,
      date,
      service_id: service._id,
      title,
      image,
      price,
    };

    fetch("http://localhost:7000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Success!");
        }
      });
  };
  return (
    <div className="hero  bg-base-200">
      <form onSubmit={handleOrder} className="card-body w-full mx-auto">
        <h2 className="text-center text-3xl font-bold">{service.title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={user?.name}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              defaultValue={`$ ` + service.price}
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary bg-orange-500 border-none text-white hover:bg-orange-500 hover:border-none hover:text-white">
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
