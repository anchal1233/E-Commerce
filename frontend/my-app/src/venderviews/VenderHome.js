import React, {useState,useEffect} from "react";
import Product from "../adminviews/Product";
import ReactDOM from "react-dom/client";
import VenderLogin from "./VenderLogin";

function VenderHome(props)
{
    const[vendname,setVendName]=useState();

    useEffect(()=>{
        var obj =JSON.parse(sessionStorage.getItem('vsessionauth'));
        if(obj=undefined&&obj != null)
        {
            //alert(obj.username);
            setVendName(obj.vuserfullname);
        }else{
            alert('Vender Session expired');
        }
    })


    const handleProductButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<Product/>)
    }
    const handleLogOut=()=>{
        sessionStorage.removeItem('vsessionauth');
        alert("Vender  Session Closed");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<VenderLogin/>);
    }
    return(
        <div>
            <p>Current Session Running For{vendname}</p>
            <h4>Vender Home Page </h4>
            <h5>Vender Id {props.data.vid}</h5>
            <h5> Welcome {props.data.vfname}</h5>
            <img src={"http://localhost:9995/venders/getimage/"+props.data.vpicname} />
            <button onClick={handleProductButton} className="btn btn-primary">Manage Product</button>
            <button type="submit" className="btn btn-secondary" onClick={handleLogOut}>Logout</button>
        </div>
    );
}export default VenderHome;