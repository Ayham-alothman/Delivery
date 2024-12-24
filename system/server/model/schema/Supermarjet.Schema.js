import { Schema,model,Types } from "mongoose";

const SupermarketSchema=new Schema({
 waitOrder:{type:[],default:[]},
 aprovalOrder:{type:[],default:[]},
 historyOrder:{type:[],default:[]}
})

const Supermarket=model('supermarket',SupermarketSchema);

export {Supermarket}    