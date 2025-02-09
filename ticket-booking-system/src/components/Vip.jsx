import React from "react";
import { GiSofa } from "react-icons/gi";
import "./Vip.css";

export default function Vip({ price, id, booked, handleSeatBooking }) {
  const handleVip = () => {
    if (!booked) {
      handleSeatBooking(id); 
    }
  };

  return (
    <div className={`vip seat ${booked ? "booked" : ""}`} onClick={handleVip}>
      <GiSofa size={70} />
      <h6>VIP</h6>
      <div className="tooltip">${price}</div>
    </div>
  );
}
