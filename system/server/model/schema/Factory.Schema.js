import { Schema,model,Types } from "mongoose";

const FacotrySchema=new Schema({
    idUser:{typeof:Types.ObjectId,require:true},
    requestOrder:{typeof:[],default:[]},
    waitOrder:{typeof:[],default:[]},
    historyOrder:{typeof:[],default:[]}
})

const Factory=model('factory',FacotrySchema);

export {Factory}    