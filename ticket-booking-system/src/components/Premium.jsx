import React from 'react';
import { IoIosBed } from "react-icons/io";
import "./Premium.css";

export default function Premium({ price, id, booked, handleSeatBooking }) {
  const handlePremium = () => {
    if (!booked) {
      handleSeatBooking(id); 
    }
  };

  return (
    <div className={`premium seat ${booked ? "booked" : ""}`} onClick={handlePremium}>
      <IoIosBed size={100} />
      <h6>Premium</h6>
      <div className="tooltip">${price}</div>
    </div>
  );
}
