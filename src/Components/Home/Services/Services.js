import React, { useEffect, useState } from "react";
import { useRef } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [service, setService] = useState([]);
  const [isASC, seISASC] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  useEffect(() => {
    fetch(
      `http://localhost:8000/service?order=${
        isASC ? "asc" : "desc"
      }&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, [isASC, search]);

  function serviceSearch(e) {
    // console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  }

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

        <div className="flex justify-around my-5">
          <div className="flex justify-center">
            <input
              type="text"
              ref={searchRef}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs mr-5"
            />
            <button
              onClick={serviceSearch}
              className="btn btn-outline btn-accent"
            >
              Search
            </button>
          </div>
          <button onClick={() => seISASC(!isASC)} className="btn btn-accent">
            {isASC ? "DESC" : "ASC"}
          </button>
        </div>
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
