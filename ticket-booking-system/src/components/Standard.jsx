import React, { useEffect } from "react";
import { PiChairFill } from "react-icons/pi";
import "./Standard.css";

export default function Standard({ price, id, booked, handleSeatBooking }) {
  const handleStandard = () => {
    if (!booked) {
      handleSeatBooking(id);
    }
  };

  return (
    <div
      className={`seat standard ${booked ? "booked" : ""}`}
      onClick={handleStandard}
    >
      <PiChairFill size={50} />
      <h6>Standard</h6>
      <div className="tooltip">${price}</div>
    </div>
  );
}
