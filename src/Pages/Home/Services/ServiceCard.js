import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card card-compact shadow-xl">
      <figure>
        <img className="p-5 h-80 rounded-3xl" src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="card-title">{title}</h2>
            <p className="text-orange-500 text-left font-semibold text-xl">
              Price: ${price}
            </p>
          </div>
          <div className="">
            <FaArrowRight className="text-2xl mr-5"></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
