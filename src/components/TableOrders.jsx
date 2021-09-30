import React, { Fragment, useState } from "react";
import data from "../menu.json";
import MenuItems from "./MenuItems";
import Ordersummary from "./OrderSummary";
import "./tableOrders.css";

function TableOrders() {
  const { products } = data;
  const [billItems, setBillItems] = useState([]);
  const onAdd = (product) => {
    //Función para sumar del resumen del pedido
    const exist = billItems.find((x) => x.id === product.id);
    if (exist) {
      setBillItems(
        billItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBillItems([...billItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    // Función para remover del resumen del pedido
    const exist = billItems.find((x) => x.id === products.id);
    if (exist.qty === 1) {
      setBillItems(billItems.filter((x) => x.id !== products.id));
    } else {
      setBillItems(
        billItems.map((x) =>
          x.id === products.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Fragment>
      <div className="containerMenuandBill">
        <div className="containerMenu">
          <MenuItems products={data} onAdd={onAdd} />
        </div>
        <div className="containerBill">
          <Ordersummary
            products={data}
            billItems={billItems}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default TableOrders;
