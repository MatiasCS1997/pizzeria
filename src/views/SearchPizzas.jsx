import React, { useContext } from "react";
import { ProductContext } from "../Context/DataProvider";
import { useParams } from "react-router-dom";

const DetailsPizza = () => {
  const { product } = useContext(ProductContext);
  const { id } = useParams();

  return (
    <div>
      <div>
        <h1>Descripción de la pizza</h1>
      </div>

      <div className="container-images">
        {product
          .filter((a) => a.id === id)
          .map((e) => (
            <div className="image-desc" key={e.id}>
              <img src={e.img} alt="fotografías de pizzas" className="image-descripcion" />
              <div className="nameamount">
                <hr className="line"></hr>
                <p> {e.name}</p>
                <hr className="line"></hr>
              </div>
              <div className="containerbox">
                <p>{e.desc}</p>
              </div>
              <div className="ingredient-desc">
              <h3>Ingredientes</h3>
              <h4>{e.ingredients[0]}</h4>
              <h4>{e.ingredients[1]}</h4>
              <h4>{e.ingredients[2]}</h4>
              <h4>{e.ingredients[3]}</h4>
              <h2>${e.price}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DetailsPizza;
