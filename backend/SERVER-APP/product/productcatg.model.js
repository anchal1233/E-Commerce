var mogoose=require('mongoose');
const Schema=mogoose.Schema;

var ProductCatg=new Schema({
    pcatgid:{type:Number},
    pcatgname:{type:String}
},
{
    collection:"ProductCatg"
});
module.exports=mogoose.model("ProductCatg",ProductCatg);
