import React, { useContext } from "react";
import "./Shop.css";
import { ShopContext } from "../../context/Shop-context";
import { Link } from "react-router-dom"; // Import Link for routing

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} /> 

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₹{price}</p>
      </div>

      <button
        className="addToCartBttn"
        onClick={() => addToCart(id)}
        aria-label={`Add ${productName} to cart${cartItemAmount > 0 ? ` (currently ${cartItemAmount} in cart)` : ''}`}
      >
        Add To Cart 
        {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>

      <Link to={`/product/${id}`} className="detailsBttn" aria-label={`View details of ${productName}`}>
        Details
      </Link>
    </div>
  );
};
