import React from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContext } from "../Context/DataProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const { product, cartProduct, setCartProduct } =
    React.useContext(ProductContext);
  const navigate = useNavigate();
  const add = (element) => {
    if (cartProduct) {
      Swal.fire({
        position: "center",
        imageUrl: "https://t4.ftcdn.net/jpg/02/23/50/75/240_F_223507537_tpKthwlBRbP4W233N3xqU2AfFdSun9lW.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Simbolo de pizza",
        title: "Tu pedido ha sido añadido al carrito",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    setCartProduct([
      ...cartProduct,
      {
        id: cartProduct.length + 1,
        idProduct: element.id,
        name: element.name,
        amount: 1,
        price: element.price,
        img: element.img,
      },
    ]);
  };

  return (
    <>
      <h1>Home</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {product.map((item) => (
          <Col key={item.id}>
            <div className="card-box">
              <div>
                <img className="img-fluid" alt={item.name} src={item.img}></img>
              </div>
              <div>
                <h2>{item.name} </h2>
                <hr></hr>
                <h4>Ingredientes</h4>
                <ul>
                  {item.ingredients.map((ingredient) => (
                    <li key={ingredient}>🍕 {ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span>${item.price.toLocaleString("de-DE")}</span>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  Ver más
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => add(item)}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/891/891407.png"
                    width="25px"
                    alt="icono de carro de supermercado con simbolo de más"
                  />
                  Agregar
                </button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
