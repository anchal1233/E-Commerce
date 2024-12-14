const express=require('express');
const app=express();
var cors=require('cors');
var bodyParser=require('body-parser');
const mongoose=require('mongoose');
const config=require('./db');
const ProductCatg=require('./product/productcatg.route');
const StateRoute=require('./statecity/state.route.js');
const CityRoute=require('./StateCity/city.route');
const PORT=9995;
const productRoute=require('./product/product.route');
const venderRoute=require('./venders/vender.route')
const customerRoute=require('./costumer/customer.route');
const billRoute=require('./admin/bills/bill.route.js');
const paymentdetailsRoute=require('./admin/bills/paymentdetails.route.js');
const payment=require('./payment.js');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/productcatg',ProductCatg);
app.use('/city',CityRoute);
app.use('/state',StateRoute);
app.use('/product',productRoute)
app.use('/venders',venderRoute);
app.use('/customer',customerRoute);
app.use('/bill',billRoute);
app.use('/paymentdetails',paymentdetailsRoute);
app.use('/payment',payment);
mongoose.connect("mongodb://127.0.0.1:27017/E-Commerce",{useNewUrlParser:true}).then(()=>{
    console.log('connected to database'+config.URL);
}),err=>{
    console.log('error in connecting to database'+err);
}

app.listen(PORT,()=>{
    console.log('server is running on port'+PORT);
})