import {React , useState}  from 'react';
import data from '../menu.json';
import Button from '@restart/ui/esm/Button';


export const MenuItems = () => {

     const dataDesayuno = data.desayuno //<data className="desayuno"></data>;//
    console.log(dataDesayuno) 
    
    const [dataActual, setDataActual] = useState(data.desayuno);

    const mostrarAlmuerzo = () => {
      setDataActual(data.almuerzo)
    }

    const mostrarDesayuno = () => {
      setDataActual(dataDesayuno)
    }
  
  return (
    
    <div className="menuContainer">
      <div className="nameMenu">
        <h2 className='titleFood'> <Button onClick={mostrarDesayuno} variant="light">DESAYUNO</Button> <Button onClick={mostrarAlmuerzo} variant="dark">ALMUERZO</Button>{' '}</h2>
      </div>
      <div className="menu">
        {dataActual.map((product) => (
          <div key={product.id} className="cardMenu ">
            <img src={product.img} className="card-img-top" alt="..."/>
            <div className ="card-body">
              <h5 className ="card-title">{product.name}</h5>
              <p className ="card-price">${product.price}</p>
            </div>
        </div>
        ))
        }
        

      </div>

    </div>
 


    
 )
  }
  
      







      
  

  
   
