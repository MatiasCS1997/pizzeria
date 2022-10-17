import React from "react";
import { useEffect, useState } from "react";
export const ProductContext = React.createContext();
const InfoProvider = (props) => {
  const [product, setProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    jsonData();
  }, []);

  const jsonData = async () => {
    try {
      const url = "/pizzas.json";
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    } catch (e) {
      alert("No se logró completar tu pedido, intenta nuevamente");
    }
  };

  return (
    <ProductContext.Provider
      value={{ product, setProduct, cartProduct, setCartProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default InfoProvider;
