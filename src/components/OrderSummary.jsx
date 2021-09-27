

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
            <button className = 'btn-light'> ENVIAR A COCINA </button>
            </div>
        </div>
        
    );
};