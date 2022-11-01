import React from "react";
import { useLoaderData } from "react-router-dom";
import checkOutImage from "../../assets/images/checkout/checkout.png";
import "./CheckOut.css";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;
  return (
    <div>
      <div className="relative">
        <div className="checkOutImage">
          <img className="w-full my-10" src={checkOutImage} alt="" />
        </div>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full h-64 mb-20"
          placeholder="Your Message"
        ></textarea>
      </form>
    </div>
  );
};

export default CheckOut;
