const express = require("express");
const productcatgRoute = express.Router();
var ProductCatg = require("./productcatg.model");

// Save product category
productcatgRoute.route("/addproductcatg/:pcatgid/:pcatgname").post((req, res) => {
    var productcatg = new ProductCatg({
        pcatgid: req.params.pcatgid,
        pcatgname: req.params.pcatgname
    });
    productcatg.save().then(productcatg => {
        res.send("Product category added successfully");
        res.end();
    }).catch((err) => {
        res.send(err);
        res.end();
    });
});

// Get all product categories from DB
productcatgRoute.route('/showproductcatg').get((req, res) => {
    ProductCatg.find()
    .then(productcatg => {
        res.send(productcatg);
        res.end();
    })
    .catch(err => {
        res.send("Data not found, something went wrong");
        res.end();
    });
});

// Search product category from DB
productcatgRoute.route('/searchproductcatg/:pcatgid').get((req, res) => {
    ProductCatg.findOne({ "pcatgid": req.params.pcatgid })
    .then(productcatg => {
        res.send(productcatg);
        res.end();
    })
    .catch(err => {
        res.send("Data not found, something went wrong");
        res.end();
    });
});

// Delete product category from DB
productcatgRoute.route('/deleteproductcatg/:pcatgid').delete((req, res) => {
    ProductCatg.deleteOne({ "pcatgid": req.params.pcatgid })
    .then(() => {
        res.send("Data deleted");
        res.end();
    })
    .catch(err => {
        res.send("Data not found, something went wrong");
        res.end();
    });
});

// Update product category in DB
productcatgRoute.route('/editproductcatg').post((req, res) => {
    var productcatg = new ProductCatg(req.body);
    ProductCatg.updateOne({ "pcatgid": productcatg.pcatgid }, 
        { "pcatgname": productcatg.pcatgname })
    .then(productcatg => {
        res.send('Product category updated successfully');
        res.end();
    })
    .catch((err) => {
        res.send(err);
        res.end();
    });
});

module.exports = productcatgRoute;
