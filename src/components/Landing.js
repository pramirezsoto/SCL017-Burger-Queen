import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import landing from '../components/landing.css'



export const Landing = () => {
  return (
    <Fragment>
        <div className = "container">
            <img src = {} alt = "variablehamburguesa" className = "logo"/>
                <div className="selectWorker">
                    
                    <Link className="btn-primary" to="/tableorders">Mesero</Link>
                   {/* <button className = 'btn-secondary' disabled> Cocina</button>  */}
                </div>
        </div>
        </Fragment>
    
      
            
   
  
  )
}
