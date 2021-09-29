import React, { Fragment } from "react";
import MenuItems  from "./MenuItems";
import  Ordersummary  from "./OrderSummary";
import './tableOrders.css';

const TableOrders = ({data}) => {
  
return (
<Fragment>
  <div className= "containerMenuandBill">
  <div className="containerMenu">
    <MenuItems data={data}/>
  </div>  
  <div className="containerBill">
    <Ordersummary data={data}/>    
  </div>

  </div>
</Fragment>

)

}

export default TableOrders;




