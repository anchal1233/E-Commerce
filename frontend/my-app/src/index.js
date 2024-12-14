import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// import App from './App';
// import ProductCatgMgt from './adminviews/ProductCatgMgt';
// import StateMgt from './adminviews/StateMgt';
// import CityMgt from './adminviews/CityMgt';
// import Product from './adminviews/Product';
// import ProductList from './adminviews/ProductList';
import reportWebVitals from './reportWebVitals';
// import VenderLogin from './venderviews/VenderLogin';
// import VenderReg from './venderviews/VenderReg';
// import CustomerReg from './customerviews/CustomerReg';
// import CustomerLogin from './customerviews/CustomerLogin';
import MainPage from './MainPage';

// import Bill from './customerviews/Bill';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <App />    */}
     {/* <StateMgt/>
     <CityMgt/>  */}
     {/* <ProductCatgMgt/> */}
    {/* <Product/>
     <ProductList/> */}
      {/* <VenderReg/>
     
    
    <CustomerReg/>*/}
    {/* <VenderLogin/>
    <CustomerLogin/>  */}
    <MainPage/>

 
    {/* <Bill/> */}
   

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
