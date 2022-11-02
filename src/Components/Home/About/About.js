import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2 my-20">
          <img
            src={person}
            alt=""
            className="w-4/5 height-full rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            alt=""
            className="absolute w-3/5 right-5 top-1/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="text-orange-400 text-2xl font-semibold">About Us</p>
          <h1 className="text-5xl font-bold">
            About Us We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-success">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
