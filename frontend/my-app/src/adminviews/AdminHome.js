import React from "react";
import StateMgt from "./StateMgt";
import CityMgt from "./CityMgt";
import ProductCatgMgt from "./ProductCatgMgt";
import VenderMgt from "./VenderMgt";
import Product from "./Product";

import { Outlet,Link,Route,Routes} from "react-router-dom";
import adminpic from "../adminpic.jpg";
import "../index.css";

function AdminHome()
{
    return(
        <div>
            <center>
                <h4>Admin Home Page</h4>
                <nav>
                    <ul>
                        <li>
                            <Link to="/statemgt">State</Link>
                        </li>
                        <li>
                            <Link to="/citymgt">City</Link>
                        </li>
                        <li>
                            <Link to="/productcatg">Product Category</Link>
                        </li>
                        <li>
                            <Link to="/vendermgt">Vender Management</Link>
                        </li>
                        <li>
                            <Link to="/productmgt">Product Management</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet/>
            </center>
        </div>
    );
}export default AdminHome;