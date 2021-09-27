import React from 'react';
import menu from '../Menu';

export const TableOrders = () => (
  <div>
    <h2> Tabla de pedidos</h2>
    <div className="App">
    <ul>
      {menu.map(food => {
        return (
        <p>{food.id} {food.name} {food.price} {food.options}  {food.image}  </p>
        
        )
      })}
    </ul>
  </div>
  </div>
)