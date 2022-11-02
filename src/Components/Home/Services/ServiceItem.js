import React from "react";

const ServiceItem = ({ serviceItem }) => {
  const { strMeal, strMealThumb, idMeal } = serviceItem;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p className="text-2xl text-red-300">Price ${idMeal}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
