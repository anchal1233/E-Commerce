import React,{useState,useEffect} from "react";
import ProductList from "../adminviews/ProductList";
import BillByID from "./BillByID";
import CustomerLogin from "./CustomerLogin";
import ReactDOM from "react-dom/client";

function CustomerHome(props){
    const[custname,setCustName]=useState();

    useEffect(()=>{
        var obj=JSON.parse(sessionStorage.getItem('sessionauth'));
        if(obj!=undefined && obj!=null)
        {
            alert(obj.username);
        }
        else{
            alert("Session expired");
        }
    })
    const handleShoppinButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById('root'));
        var cid=props.data.cid;
        root.render(<ProductList data={cid}></ProductList>);
    }

    const handleShowBills=()=>{
        const root=ReactDOM.createRoot(document.getElementById('root'));
        var cid=props.data.cid;
        root.render(<BillByID data={cid}></BillByID>);


    }

    const handleLogOut=()=>{
        sessionStorage.removeItem('sessionauth');
        alert("Customer session Closed");
        const root=ReactDOM.createRoot(document.getElementById('root'));
        root.render(<CustomerLogin/>)
    }
return(
    <div>
        <p>Current Session Running For {custname}</p>
        customer id: {props.data.cid}
        <h4>Customer Home Page</h4>
        <h5>Welcome {props.data.cfname}</h5>
        <img src={"http://localhost:9995/customer/getimage/"+props.data.cpicname} height={100} width={100}/>
        <button type="submit" onClick={handleShoppinButton}>Shopping</button>
        <button type="submit" onClick={handleShowBills}>Show Bills</button>
        <button type="submit" onClick={handleLogOut}>Logout</button>
    </div>
)
}export default CustomerHome;