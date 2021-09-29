import Button from "@restart/ui/esm/Button";

const Ordersummary = () => {
    
    return (

        <div className = 'billContainer'> 
        <div className='billTitleContainer'>
            <h1 className= 'billTitle'> Resumen del pedido </h1>  
            </div>   
           
            <div className= 'orderContainer'>
              Aquí va el listado del pedido
            </div>
            <div className= 'sendtoKitchen'>
            <Button className="botoncocina" variant="warning">Enviar a cocina</Button>{' '}
            </div>
            < div className='takeAnotherOrder'>
            <Button className="botonTomarotraOrden" variant="warning">Tomar otro pedido</Button>{' '}
            </div>
        </div>
        
    );
};

export default Ordersummary;