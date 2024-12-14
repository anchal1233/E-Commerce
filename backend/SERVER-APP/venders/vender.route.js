const express=require('express');
const venderRoute=express.Router();
const bodyparser=require('body-parser');
const Vender=require('./vender.model');
var fs=require('fs');
const multer=require('multer');

//vender registration code
venderRoute.route('/register').post((req,res)=>{
    var vender=new Vender(req.body);
    vender.save().then(vender=>{
if(vender!=null)
{
    res.send("Registration Succesfull");
}
else
{
    res.send("Registration Failed");
}
    }).catch(err=>{
        res.status(400).send("Registration Failed");
    })
})

//login 
venderRoute.route('/login/:vuid/:vupass').get((req,res)=>{
    var id=req.params.vuid;
    var pass=req.params.vupass;
    Vender.findOne({$and:[{"VUserId":id},{"VUserPass":pass},{"Status":"Inactive"}]}).then(vender=>{
        res.send(vender);
        res.end()
    }).catch(err=>{
        res.send("Something went wrong");
        res.end();
    })
})

//get image
venderRoute.route('/getimage/:vpicname').get((req,res)=>{
res.sendFile("C:/Users/anchal mishra/Desktop/Universal drive files/html programs/web pages/E-Commerce/backend/SERVER-APP/venders/venderImages/"+req.params.vpicname
);

})

//image save
const st=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"C:/Users/anchal mishra/Desktop/Universal drive files/html programs/web pages/E-Commerce/backend/SERVER-APP/venders/venderImages/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    },
})
const upload=multer({storage:st});
venderRoute.post('/savevenderimage',upload.single('file'),(req,res)=>{
    console.log("hello")
    res.json({})
})

//get vendor count
venderRoute.route('/getvendercount').get((req,res)=>{
    Vender.find().then((vender)=>{
        res.send(vender);
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    })
})

//enable disable vender by admin
venderRoute.route('/vendermanage/:vid/:status').put((req,res)=>{
    Vender.updateOne({"Vid":req.params.vid},{"Status":req.params.status}).then(vender=>{
        res.send("Vender Status Updated succesfully");
        res.end();
    }).catch(err=>{
        res.send(err);
        res.end();
    })
})
module.exports=venderRoute