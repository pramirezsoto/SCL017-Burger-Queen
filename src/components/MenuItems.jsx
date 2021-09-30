import { React, useState } from "react";
import Button from "@restart/ui/esm/Button";
import MenuOptions from "./MenuOptions";

export default function MenuItems (props) {

  const {product, onAdd} = props;

  //No puedo saber si funciona lo que hice porque las vistas interrumpen los props, las comenté mientras y las llevé a otra hoja pero no las lee de todas maneras. 
  //Hay que ver cuál es la forma correcta de llamar a Mostrardesayuno y mostrarAlmuerzo
  //Recién podremos ver si algo funcionó después de ver el tema de las vistas. 

 /*  const dataDesayuno = data.desayuno;
  console.log(dataDesayuno);

  const [dataActual, setDataActual] = useState(data.desayuno);

  const mostrarAlmuerzo = () => {
    setDataActual(data.almuerzo);
  };

  const mostrarDesayuno = () => {
    setDataActual(dataDesayuno);
  }; */

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

              <button
                onClick={() => onAdd(product)}
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




