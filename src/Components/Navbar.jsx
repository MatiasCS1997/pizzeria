import { NavLink } from "react-router-dom";
import { ProductContext } from "../Context/DataProvider";
import { useContext } from "react";

export default function Navbar() {
  const setPizzeria = ({ isActive }) => (isActive ? "active" : "no-active");
  const { cartProduct } = useContext(ProductContext);

  return (
    <nav>
      <div className="navbar1">
        <NavLink className={setPizzeria} end to="/">
          Pizzería Mamma Mía
        </NavLink>
        {" - "}
        <NavLink className={setPizzeria} to="/Cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891407.png"
            width="50px"
            alt="icono de carro de supermercado"
          />
          Carrito de Compra
        </NavLink>
        <h3 className="result">
          Total Pedido $
          {cartProduct
            .map((item) => item.price * item.amount)
            .reduce((prev, curr) => prev + curr, 0)
            .toLocaleString("de-DE")}
        </h3>
      </div>
    </nav>
  );
}
