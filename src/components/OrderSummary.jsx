import Button from "@restart/ui/esm/Button";

export const Ordersummary = () => {
    
    return (

        <div className = 'billContainer'> 
        <div className='billTitleContainer'>
            <h1 className= 'billTitle'> RESUMEN DEL PEDIDO </h1>  
            </div>   
           
            <div className= 'orderContainer'>
              Aquí va el listado del pedido
            </div>
            <div className= 'sendtoKitchen'>
            <Button  className="boton" variant="warning">Enviar a cocina</Button>{' '}
            </div>
        </div>
        
    );
};
export default Ordersummary;