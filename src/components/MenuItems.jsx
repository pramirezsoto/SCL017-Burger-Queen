import { React, useState } from "react";
import Button from "@restart/ui/esm/Button";
import data from '../menu.json'

export default function MenuItems (props) {

  console.log(props);
  const {product, onAdd} = props;
 
  //Vistas del menú: desayuno y almuerzo
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
              height="150%"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5> {/* Se muestra el nombre del producto desde el Json */}
              <p className="card-price">${product.price}</p> {/* Se muestra el precio del producto desde el Json */}

              <button
                onClick={() => onAdd(product)} /* Función para añadir productos que se trae desde el TableOrders */
                type="button"
                className="addToOrder"
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  }




