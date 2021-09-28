import React from 'react';
import data from '../menu.json';


export const MenuItems = () => {

     const dataMenu = data.menu;
    console.log(dataMenu);
  
  return (
    
    <div className="menuContainer">
      <div className="nameMenu">
        <h2 className='titleFood'>Comida</h2>
        
      </div>
      <div className="menu">
        {dataMenu.map((product) => (
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
  
      







      
  

  
   
