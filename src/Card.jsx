import React from "react";
import web from "../src/images/app.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Card = (prpos) => {
return(<>
    <div className="col-md-4 col-10 mx-auto">
    <div className="card" >
  <img src={prpos.imgsrc} className="card-img-top" alt={prpos.imgsrc}/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{prpos.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
    </div>
   
</>
);
};
export default Card;