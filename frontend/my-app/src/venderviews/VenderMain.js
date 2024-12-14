import React from "react";
import { Link, Outlet} from "react-router-dom";
import venderpic from "../venderpic.jpg";
import "../index.css";
import CustomerMain from "../customerviews/CustomerMain";

function VenderMain()
{
    return(
        <div>
            <center>
                <img src={venderpic}/>
                <nav>
                    
                            <Link to ="/vendermain/venderlogin"> Login</Link>
                       
                      
                            <Link to ="/vendermain/venderreg"> Registration</Link>
                   
                    
                    <Outlet/>
                </nav>
            </center>
        </div>
    );
}export default VenderMain;