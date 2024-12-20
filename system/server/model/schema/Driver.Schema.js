import { Schema,model } from "mongoose";

const DriverSchema=new Schema({
    state:{typeof:Boolean,default:false},
    waitFactoryOrder:{typeof:[],default:[]},
    aprovalFactoryOrder:{typeof:[],default:[]},
    sendSupermarketOrder:{typeof:[],default:[]},
    waitSupermarketOrder:{typeof:[],default:[]},
    historyOrder:{typeof:[],default:[]}  
})

const Driver=model('driver',DriverSchema);

export {Driver}