import React from "react";
import "./Banner.css";

const BannerItem = ({ bannerData }) => {
  const { image, prev, id, next } = bannerData;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carosul-img rounded-xl">
        <img src={image} className="w-full rounded-lg" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
        <p className="text-xl font-bold text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>

      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-accent mr-20">Warning</button>
        <button className="btn btn-accent">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
        <a href={`#slide${prev}`} className="btn btn-circle mr-3">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
