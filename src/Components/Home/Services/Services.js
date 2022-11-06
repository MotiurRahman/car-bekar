import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://curdapi.vercel.app/service")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, []);
  return (
    <div>
      <div className="mb-20">
        <p className="text-red-400 text-2xl font-semibold text-center">
          Services
        </p>
        <h1 className="text-3xl font-bold text-center">Our Service Area</h1>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {service?.map((serviceItem) => (
          <ServiceItem
            key={serviceItem._id}
            serviceItem={serviceItem}
          ></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default Services;
