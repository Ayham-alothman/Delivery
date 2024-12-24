import { Schema,model,Types } from "mongoose";

const FacotrySchema=new Schema({
    idUser:{type:Types.ObjectId,require:true},
    requestOrder:{type:[],default:[]},
    waitOrder:{type:[],default:[]},
    historyOrder:{type:[],default:[]}
})

const Factory=model('factory',FacotrySchema);

export {Factory}    