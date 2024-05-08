import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
// import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `/bookings?email=${user.email}`;
  // const url = `http://localhost:7000/bookings?email=${user.email}`;
  useEffect(() => {
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setBookings(res.data);
    // });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });

    axiosSecure.get(url).then((res) => {
      setBookings(res.data);
    });
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      fetch(`http://localhost:7000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted!");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleStatus = (id) => {
    fetch(`http://localhost:7000/bookings/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "Confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox invisible" />
              </label>
            </th>
            <th>Image</th>
            <th>Service</th>
            <th>Price</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings.map((booking, idx) => {
            return (
              <tr key={idx}>
                <th>
                  <label>
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="btn btn-xs btn-circle btn-outline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                  </label>
                </th>
                <td>
                  {" "}
                  <div className="avatar">
                    <div className="mask mask-square rounded-md w-24 h-24">
                      {booking.image && (
                        <img
                          src={booking.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      )}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{booking.title}</div>
                    </div>
                  </div>
                </td>
                <td>{booking.price}</td>
                <td>{booking.date}</td>
                <th>
                  {booking.status === "Confirm" ? (
                    <button className="btn btn-ghost btn-outline btn-xs">
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatus(booking._id)}
                      className="btn btn-ghost btn-xs btn-outline"
                    >
                      Confirm
                    </button>
                  )}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
