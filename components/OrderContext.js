import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState("rate"); // Default ordering by 'rate'

  const toggleOrder = () => {
    setOrder((prevOrder) => (prevOrder === "rate" ? "date" : "rate"));
  };

  return (
    <OrderContext.Provider value={{ order, toggleOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
