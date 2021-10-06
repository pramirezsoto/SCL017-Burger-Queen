import Button from "@restart/ui/esm/Button";
import React from "react";
import Row  from "react-bootstrap/Row";
import Container  from "react-bootstrap/Container";
import  Col from "react-bootstrap/Col";


export default function Ordersummary(props){
    const {billItems, onAdd, onRemove} = props; 
    const itemsPrice = billItems.reduce((a,c)=> a+c.price*c.qty,0);
    const taxPrice = itemsPrice*0.10;
    const totalPrice = itemsPrice + taxPrice;


   return (
       <Container>
        <Row>
        <Col  xs={4}></Col>
    
        <div className = 'billContainer'>  
        <div className='billTitleContainer'> 
        
            <h1 className= 'billTitle'  xs={2}> RESUMEN DEL PEDIDO </h1>  
            </div>   
           
            <div className= 'orderContainer'>{billItems.length === 0 && <div>Agrega productos al resumen del pedido</div>}</div>
        {billItems.map((product)=>(
        <div key={product.id} className='row'>
            <div>{product.name} </div>
            <Button onClick={()=>onAdd(product)} className='add'>+</Button>
            <Button onClick={()=>onRemove(product)} className='remove'>-</Button>

        <div>{product.qty} x ${product.price.toFixed(2)} </div>
        </div> 
    ))}
    {billItems.length !== 0 && (
        <>
        <hr></hr>
        <div className= 'row'>
            <div>Items price</div>
            <div> $ {itemsPrice.toFixed(2)} </div>
        </div>
        <div className= 'row'>
            <div>Tax price</div>
            <div> $ {taxPrice.toFixed(2)} </div>
        </div>
        <div className= 'row'>
            <div>Total price</div>
            <div> $ {totalPrice.toFixed(2)} </div>
        </div>

        </>
    )}
      <div className= 'sendtoKitchen'>
            <Button className="botoncocina" variant="warning">Enviar a cocina</Button>{' '}
            </div>


    </div>
    </Row> 
</Container>
    )
    };

