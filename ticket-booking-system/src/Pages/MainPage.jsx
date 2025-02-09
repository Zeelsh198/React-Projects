import React, { useState } from "react";
import Standard from "../components/Standard";
import Vip from "../components/Vip";
import Premium from "../components/Premium";
import "./MainPage.css";

export default function MainPage() {
 
  const standardSeats = Array.from({ length: 50 });
  const vipSeats = Array.from({ length: 25 });
  const premiumSeats = Array.from({ length: 25 });

 
  const [standardBooked, setStandardBooked] = useState([]);
  const [vipBooked, setVipBooked] = useState([]);
  const [premiumBooked, setPremiumBooked] = useState([]);

  const standardPrice = 50;
  const vipPrice = 100;
  const premiumPrice = 150;


  const handleSeatBooking = (id, seatType) => {
    console.log(`Seat booked: ${seatType} seat with ID: ${id}`); 
    if (seatType === "standard" && !standardBooked.includes(id)) {
      setStandardBooked((prevState) => [...prevState, id]); 
    } else if (seatType === "vip" && !vipBooked.includes(id)) {
      setVipBooked((prevState) => [...prevState, id]);
    } else if (seatType === "premium" && !premiumBooked.includes(id)) {
      setPremiumBooked((prevState) => [...prevState, id]);
    }
  };


  const totalPrice =
    standardBooked.length * standardPrice +
    vipBooked.length * vipPrice +
    premiumBooked.length * premiumPrice;

  return (
    <div className="main-page">
    
     
      <div className="standard-main">
        {standardSeats.map((_, index) => (
          <Standard
            key={index}
            id={index} 
            price={standardPrice}
            booked={standardBooked.includes(index)}
            handleSeatBooking={() => handleSeatBooking(index, "standard")}
          />
        ))}
      </div>

    
      <div className="vip-main">
        {vipSeats.map((_, index) => (
          <Vip
            key={index}
            id={index}  
            price={vipPrice}
            booked={vipBooked.includes(index)}
            handleSeatBooking={() => handleSeatBooking(index, "vip")}
          />
        ))}
      </div>

      <div className="premium-main">
        {premiumSeats.map((_, index) => (
          <Premium
            key={index}
            id={index} 
            price={premiumPrice}
            booked={premiumBooked.includes(index)}
            handleSeatBooking={() => handleSeatBooking(index, "premium")}
          />
        ))}
      </div>

   
      <div className="price-summary">
        <h2>Price Summary</h2>
        <p>
          Standard Seats: {standardBooked.length} x ${standardPrice} = $
          {standardBooked.length * standardPrice}
        </p>
        <p>
          VIP Seats: {vipBooked.length} x ${vipPrice} = $
          {vipBooked.length * vipPrice}
        </p>
        <p>
          Premium Seats: {premiumBooked.length} x ${premiumPrice} = $
          {premiumBooked.length * premiumPrice}
        </p>
        <h4 className="total">Total Price: ${totalPrice}</h4>
      </div>
    </div>
  );
}
