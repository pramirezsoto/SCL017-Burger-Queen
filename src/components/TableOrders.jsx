import React, { Fragment } from "react";
import { MenuItems } from "./MenuItems";
import { Ordersummary } from "./OrderSummary";
import './tableOrders.css';

export const TableOrders = () => {
return (
<Fragment>
  <div className= "containerMenuandBill">
  <div className="containerMenu">
    <MenuItems/>
  </div>  
  <div className="containerBill">
    <Ordersummary/>



    
  </div>

  </div>
</Fragment>

)

}




