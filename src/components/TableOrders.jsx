import React, { Fragment, useState } from "react";
import data from "../menu.json";
import MenuItems from "./MenuItems";
import Ordersummary from "./OrderSummary";
import "./tableOrders.css";
import { Container, Row, Col } from "react-bootstrap";

function TableOrders() {
  const { products } = data;
  const [billItems, setBillItems] = useState([]);

  //Función para sumar productos
  const onAdd = (product) => {
    const exist = billItems.find((x) => x.id === product.id);
    if (exist) {
      setBillItems(
        billItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBillItems([...billItems, { ...product, qty: 1 }]);
    }
  };
  // Función para remover productos
  const onRemove = (product) => {
    const exist = billItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setBillItems(billItems.filter((x) => x.id !== product.id));
    } else {
      setBillItems(
        billItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //Función para dejar en blanco OrderSummary y tomar otro pedido
  const [dataActual, setDataActual] = useState(data.desayuno);
  const resetOrder = () => {
    setBillItems([]);
    setDataActual(data.desayuno);
  };
  //Componentes que se inyectan a todo el template
  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <Row className="containerMenu">
              <MenuItems products={data} onAdd={onAdd} />
            </Row>
          </Col>
          <Col md={12} lg={4}>
            <Row>
              <Ordersummary
                products={data}
                billItems={billItems}
                onAdd={onAdd}
                onRemove={onRemove}
                resetOrder={resetOrder}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default TableOrders;
