import { Schema,model,Types } from "mongoose";

const productSchema=new Schema({
    name:{type:String,require:true},
    category:{type:String,require:true},
    price:{type:String,require:true},
    idFactory:{type:Types.ObjectId,require:true , ref: 'factories' }
})


const Product=model('product',productSchema);
export {Product}