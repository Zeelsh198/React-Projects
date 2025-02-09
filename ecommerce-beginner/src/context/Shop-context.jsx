import React, { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

// Function to get the default cart structure
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Load cart from localStorage if available, otherwise use the default cart
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : getDefaultCart();
};

export const ShopContextProvider = (props) => {
  // Initialize cart state with localStorage or default cart
  const [cartItems, setCartItems] = useState(getCartFromLocalStorage());

  // Whenever cartItems changes, store the updated cart in localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Update item count in cart
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  
  const clearCart = () => {
    setCartItems(getDefaultCart()); // Reset cart items to the default
  };

  // Calculate the total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
