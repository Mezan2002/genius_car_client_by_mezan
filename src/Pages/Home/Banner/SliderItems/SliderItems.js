import React from "react";
import "./SliderItems.css";
const SliderItems = ({ carousel }) => {
  const { image, id, pre, next } = carousel;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-[700px]">
      <div className="carouselImage">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="absolute text-white flex justify-end transform -translate-y-1/2 left-20 top-1/4">
        <h1 className="text-6xl font-bold">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute text-white w-2/5 flex justify-start transform -translate-y-1/2 left-20 top-1/2">
        <p className="text-xl text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute text-white flex justify-start transform -translate-y-1/2 left-20 top-3/4">
        <button className="btn btn-error mr-5">Error</button>
        <button className="btn btn-outline btn-error">Error</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${pre}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderItems;
