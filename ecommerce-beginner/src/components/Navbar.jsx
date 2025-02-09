import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import { ShopContext } from "../context/Shop-context";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

 
  const productTypesInCart = Object.keys(cartItems).filter((key) => cartItems[key] > 0).length;

  return (
    <div className="navbar-ecommerce">
      <h1 className="logo">Zeelsh's Shop</h1>
      <div className="links">
        <Link to="/" className="shoplink">Shop</Link>
        <Link to="/cart" className="cart-link">
          <ShoppingCart size={32} /> 
          {productTypesInCart > 0 && <sup className="count">{productTypesInCart}</sup>} 
        </Link>
        <Link to="/apidata">Api</Link>
      </div>
    </div>
  );
};
