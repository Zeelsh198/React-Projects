import { createContext, useState } from "react";

export const bookedContext = createContext({
  booked: false,
  toggleMode: () => {},
});

export const bookedContextProvider = ({ children }) => {
  const [booked, setBooked] = useState(false);

  const toggleMode = () => {
    if (booked === false) {
      setBooked(true);
    } else {
      setBooked(false);
    }
  };
  return (
    <bookedContext.Provider value={{ toggleMode, booked }}>
      {children}
    </bookedContext.Provider>
  );
};
