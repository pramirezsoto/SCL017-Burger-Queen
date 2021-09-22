import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



export const Landing = () => {
  return (
    <Fragment>
        <div className = "container">
            {/* <img src = {logo} alt = "variablehamburguesa" className = "logo"/> */}
                <div className="selectWorker">
                    
                    <Link className="btn-primary" to="/tableorders">Mesero</Link>
                    <Link className = 'btn-primary' to="/kitchenorders"> Cocina</Link>  
                </div>
        </div>
        </Fragment>
    
      
            
   
  
  )
}
