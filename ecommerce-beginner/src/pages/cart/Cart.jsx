import React, { useContext } from "react";
import "./Cart.css";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/Shop-context";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import { ApiData } from "../shop/ApiData";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext); // Destructure clearCart
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />; // Added key prop
          }
          return null; // Returning null for products not in the cart
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal">Subtotal: ₹{totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
          <button onClick={clearCart}>Clear All</button> {/* Call clearCart on button click */}
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
     
    </div>
  );
};
