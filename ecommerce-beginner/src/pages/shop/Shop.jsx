import React from "react";
import "./Shop.css";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 className="offer">🎉🎉 Navratri Offers 🎉🎉</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
