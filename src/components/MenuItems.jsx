import { React, useState } from "react";
import Button from "@restart/ui/esm/Button";

const MenuItems = ({ data, addToOrderSummary }) => {
  const dataDesayuno = data.desayuno;
  console.log(dataDesayuno);

  const [dataActual, setDataActual] = useState(data.desayuno);

  const mostrarAlmuerzo = () => {
    setDataActual(data.almuerzo);
  };

  const mostrarDesayuno = () => {
    setDataActual(dataDesayuno);
  };

  return (
    <div className="menuContainer">
      <div className="nameMenu">
        <h2 className="titleFood">
          {" "}
          <Button onClick={mostrarDesayuno} variant="light">
            Desayuno
          </Button>{" "}
          <Button onClick={mostrarAlmuerzo} variant="dark">
            Almuerzo
          </Button>{" "}
        </h2>
      </div>
      <div className="menu">
        {dataActual.map((product) => (
          <div key={product.id} className="cardMenu ">
            <img
              src={product.img}
              width="100%"
              height="150"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-price">${product.price}</p>

              {/*product.map((product, index) => {
                return (
                  <div key={index}>
                    <p>{product.name}</p>
                     <div>
                <button onClick={() => addToOrderSummary(product)} type="button" className="addToOrder">Agregar</button>
              </div>  
Botón de agregar al carrito no funcionando. Dudas aquí.               */}
            </div>
            );
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
