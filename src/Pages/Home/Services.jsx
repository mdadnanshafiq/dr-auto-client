import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="font-bold text-orange-500">Service</h3>
        <h2 className="font-bold text-3xl">Our Service Area</h2>
        <p className="w-1/2 text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center w-full mx-auto">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
