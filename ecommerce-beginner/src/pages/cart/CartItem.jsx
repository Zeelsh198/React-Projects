import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import "./CartItems.css"
export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  // Handle input changes
  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    // Update only if the value is a positive integer
    if (value >= 0) {
      updateCartItemCount(value, id);
    }
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p className="name">
          <b>{productName}</b>
        </p>
        <p className="price">₹{price}</p>
        <div className="countHandler">
          <button 
            onClick={() => removeFromCart(id)} 
            aria-label={`Remove one ${productName} from cart`}
          >
            -
          </button>
          <input 
            type="number"
            value={cartItems[id]} 
            onChange={handleInputChange}
            min="0" // Prevents negative numbers
            aria-label={`Current count of ${productName} in cart`}
          />
          <button 
            onClick={() => addToCart(id)} 
            aria-label={`Add one more ${productName} to cart`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
