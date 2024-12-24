import { Schema,model,Types } from "mongoose";

const OrderSchema=new Schema({
    idSupermarket:{type:Types.ObjectId,require:true,ref:'supermrket'},
    idDriver:{type:Types.ObjectId,require:true,ref:'driver'},
    products:{type:[],require:true}
})

const Order=model("order",OrderSchema);
export {Order}  