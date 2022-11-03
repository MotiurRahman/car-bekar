import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import checkouImg from "../../assets/images/checkout/checkout.png";
import { AuthUserContext } from "../../Context/AuthContext";
import "./Checkout.css";

const Checkout = () => {
  const { _id, title, img, price } = useLoaderData();
  const { user } = useContext(AuthUserContext);

  const handleCheckout = (e) => {
    e.prevendDefault();
    const form = e.target;
    const firstNamename = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstNamename} ${lastName}`;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    console.log();
  };

  return (
    <div>
      <div className="bgImg flex justify-start items-center">
        <h1 className="text-white text-3xl ml-10">Check Out: {title}</h1>
      </div>
      <div className="my-20 bg-gray-500 p-10">
        <form onSubmit={handleCheckout}>
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
            <input
              type="text"
              name="firstName"
              placeholder="Frist Name"
              className="input w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input w-full"
            />
            <input
              type="number"
              name="phone"
              placeholder="Your Phone"
              className="input w-full"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input w-full"
              readOnly
            />
            <input
              type="textarea"
              name="message"
              placeholder="your message"
              className="input w-full"
            />
          </div>
          <textarea
            className="textarea w-full mt-10"
            placeholder="Bio"
          ></textarea>
          <button className="btn btn-accent w-full mt-5">Order Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
