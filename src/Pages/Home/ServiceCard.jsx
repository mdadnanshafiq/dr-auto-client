import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10 ">
        <img src={service.img} alt="" className="rounded-lg w-full h-[180px]" />
      </figure>
      <div className="p-10 flex flow-row justify-between items-center">
        <div>
          <h2 className="card-title">{service.title}</h2>
          <p className="text-orange-500 font-bold">Price: ${service.price}</p>
        </div>
        <div className="card-actions ">
          <Link to={`/checkout/${service._id}`}>
            <FaArrowRight className="text-orange-500 font-bold cursor-pointer"></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
