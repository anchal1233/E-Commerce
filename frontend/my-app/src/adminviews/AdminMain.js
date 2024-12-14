import React from "react";
import { Link,Outlet} from "react-router-dom";
import adminpic from "../adminpic.jpg";
import "../index.css";
function AdminMain(){
       return(
        <div>
            <center>
                <img src={adminpic} />
                <nav>
                   
                            <Link to="/adminmain/adminlogin">Login</Link>
                       
                            <Link to="/adminmain/adminreg">Registration</Link>
                        
                 <Outlet/>
                </nav>
            </center>
        </div>
       )


}export default AdminMain;