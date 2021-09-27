import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../components/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Landing = () => {
  return (
    <Fragment>
      <div className="container-fluid">
            <div className ="logoContainer">
            <img src={"https://i.imgur.com/IZxCXAF.png"} alt="variablehamburguesa" className="logo" />
            </div>

            <div className="buttonContainer">
          
            <Link className="btn btn-outline-light btn-lg" role="button" to="/tableorders"> {" "} Mesero </Link>
            <Link className="btn btn-outline-light btn-lg" role="button" to="/kitchenorders" > {""} Cocina </Link>
            </div>
            
      </div>
    </Fragment>
  );
};


