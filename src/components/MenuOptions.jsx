import {React, useState} from "react";
import data from '../Menu.json'

const MenuOptions=() => {

const dataDesayuno = data.desayuno;
console.log(dataDesayuno);

const [dataActual, setDataActual] = useState(data.desayuno);

const mostrarAlmuerzo = () => {
  setDataActual(data.almuerzo);
};

const mostrarDesayuno = () => {
  setDataActual(dataDesayuno);
};
}

export default MenuOptions;