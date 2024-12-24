import { Schema,model } from "mongoose";

const DriverSchema=new Schema({
    state:{type:Boolean,default:false},
    waitFactoryOrder:{type:[],default:[]},
    aprovalFactoryOrder:{type:[],default:[]},
    sendSupermarketOrder:{type:[],default:[]},
    waitSupermarketOrder:{type:[],default:[]},
    historyOrder:{type:[],default:[]}  
})

const Driver=model('driver',DriverSchema);

export {Driver}