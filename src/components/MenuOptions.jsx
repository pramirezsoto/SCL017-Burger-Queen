import {React, useState} from "react";
import data from '../menu.json'

const MenuOptions=() => {

const dataDesayuno = data.desayuno;
console.log(dataDesayuno);

const [dataActual, setDataActual] = useState(product.desayuno);

const mostrarAlmuerzo = () => {
  setDataActual(product.almuerzo);
};

const mostrarDesayuno = () => {
  setDataActual(dataDesayuno);
};
}

export default MenuOptions;