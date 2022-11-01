import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <p className="text-center text-orange-600 font-semibold">
        Popular Products
      </p>
      <h2 className="text-3xl py-5 text-center font-bold">
        Browse Our Products
      </h2>
      <p className="text-center capitalize pb-12 text-gray-500">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br />
        words which don't look even slightly believable.
      </p>
      <div>
        {products.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
