import React from "react";
import custpic from "../custpic.jpg";
import {Link , Outlet} from "react-router-dom";
import "../index.css";


function CustomerMain()
{
 return(
    <div>
      <center>
      <img src={ custpic} />
      <nav>
        
                <Link to="/customermain/customerlogin">Login</Link>
           
            
                <Link to="/customermain/customerreg">Registration</Link>
           
            <Outlet/>
      
      </nav>
      </center>
    </div>

 )
}export default CustomerMain;