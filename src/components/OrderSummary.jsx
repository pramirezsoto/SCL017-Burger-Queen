import Button from "@restart/ui/esm/Button";
import React from "react";
import { savingDataFirebase } from "../firebaseConfig";
import "./TableOrders";

export default function Ordersummary(props) {
  const { billItems, onAdd, onRemove, resetOrder } = props; //Se traen los props desde TableOrders para las funciones de la boleta
  const itemsPrice = billItems.reduce((a, c) => a + c.price * c.qty, 0); //Función para restar productos de la boleta
  const taxPrice = itemsPrice * 0.1; //Se multiplica cada precio de producto por 0.1 por el Iva
  const totalPrice = itemsPrice + taxPrice; //Total del pedido

  return (
    <div className="billContainer">
      <div className="billTitleContainer">
        <h1 className="billTitle" xs={2}>
          {" "}RESUMEN DEL PEDIDO{" "}
        </h1>
      </div>

      <div className="orderContainer">
        {billItems.length === 0 && ( //Solo aparece el mensaje de abajo si está en cero la boleta
          <div>Agrega productos al resumen del pedido</div>
        )}
      </div>
      {billItems.map((product) => (
        <div key={product.id} className="row">
          <div>{product.name} </div>
          <Button onClick={() => onAdd(product)} className="add">
            +
          </Button>
          <Button onClick={() => onRemove(product)} className="remove">
            -
          </Button>

          <div>
            {product.qty} x ${product.price}{" "}
          </div>
        </div>
      ))}
      {billItems.length !== 0 && (
        <> 
          <hr></hr>
          <div className="row">
            <div>Precio del producto</div>
            <div> $ {itemsPrice} </div>
          </div>
          <div className="row">
            <div>Impuesto</div>
            <div> $ {taxPrice} </div>
          </div>
          <div className="row">
            <div>Total</div>
            <div> $ {totalPrice} </div>
          </div>
        </>
      )}
      <div className="sendtoKitchen">
        <Button
          onClick={() => savingDataFirebase(billItems)}
          className="botoncocina"
          variant="warning"
        >Guardar pedido
        </Button>{" "}
        {console.log(billItems)};
        <Button
          onClick={() => resetOrder()}
          className="botonReset"
          variant="warning"
        >Tomar otro pedido
        </Button>{" "}
      </div>
    </div>
  );
}
