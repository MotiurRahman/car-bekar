import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ serviceItem }) => {
  const { _id, title, img, price } = serviceItem;
  const serviceCheckOut = (id) => {
    alert(id);
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-red-300">Price ${price}</p>
          <div className="card-actions justify-end">
            {/* <button
              onClick={() => serviceCheckOut(_id)}
              className="btn btn-primary"
            >
              Check Out
            </button> */}

            <Link to={`/checkout/${_id}`}>Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
