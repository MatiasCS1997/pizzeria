import React, { useContext } from "react";
import { ProductContext } from "../Context/DataProvider";

const Cart = () => {
  const { cartProduct, setCartProduct } = useContext(ProductContext);

  const amountSet = (ac, id, am) => {
    setCartProduct((current) =>
      current.map((obj) => {
        if (obj.idProduct === id) {
          if (ac === "add") {
            return { ...obj, amount: am * 1 + 1 };
          } else if (ac === "rest" && am > 1) {
            return { ...obj, amount: am * 1 - 1 };
          }
        }
        return obj;
      })
    );
  };

  return (
    <div className="boxCart">
      <div className="count-pizza">
        <h2>Cantidad de Pizzas</h2>
      </div>

      <div>
        {cartProduct.map((p) => (
          <div key={p.idProduct}>
            <img className="pizzaimages" src={p.img} alt="" />
            <div>
              <h3> {p.name}</h3>
            </div>
            <div>
              <h3>${(p.price * p.amount).toLocaleString("de-DE")}</h3>
            </div>
            <div className="buttonplus">
              <button
                className="buttonmenus"
                onClick={() => amountSet("rest", p.idProduct, p.amount)}
              >
                -
              </button>
              <p> {p.amount}</p>
              <button
                className="buttonmenus"
                onClick={() => amountSet("add", p.idProduct, p.amount)}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div>
          <h3 className="count-pizza">
            Total Pedido $
            {cartProduct
              .map((item) => item.price * item.amount)
              .reduce((prev, curr) => prev + curr, 0)
              .toLocaleString("de-DE")}
          </h3>
          <button className="btn3"> Ir a Pagar</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
