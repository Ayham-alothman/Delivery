import mognoose ,{connect} from 'mongoose';

import { User } from "./schema/User.Schema.js";
import {Driver} from './schema/Driver.Schema.js';
import {Factory} from './schema/Factory.Schema.js';
import {Supermarket} from './schema/Supermarjet.Schema.js'


async function LoginUser(email,password){
    try{
        await connect(`mongodb://localhost:27017/Delivery`);

     const valditionUser=await User.findOne({email:email});
     if(valditionUser&&valditionUser!=null){
        if(valditionUser.password==password){
            if(valditionUser.actor=="factory"){
                const docFactory=await Factory.findById(valditionUser.idActore);
                return {
                    id:valditionUser._id,
                    username:valditionUser.username,
                    email:valditionUser.email,
                    actor:valditionUser.actor,
                    idinfo:docFactory._id,
                    requestOrder:docFactory.requestOrder,
                    waitOrder:docFactory.waitOrder,
                    historyOrder:docFactory.historyOrder
                }
            }
            else if(valditionUser.actor=="driver"){
                const docDriver=await Driver.findById(valditionUser.idActore);
                return {
                    id:valditionUser._id,
                    username:valditionUser.username,
                    email:valditionUser.email,
                    actor:valditionUser.actor,
                    idinfo:docDriver._id,
                    waitFactoryOrder:docDriver.waitFactoryOrder,
                    aprovalFactoryOrder:docDriver.aprovalFactoryOrder,
                    sendSupermarketOrder:docDriver.sendSupermarketOrder,
                    waitSupermarketOrder:docDriver.waitSupermarketOrder,
                    historyOrder:docDriver.historyOrder
                }
            }
            else if(valditionUser.actor=="supermarket"){
                const docSuper=await Supermarket.findById(valditionUser.idActore);
                return {
                    id:valditionUser._id,
                    username:valditionUser.username,
                    email:valditionUser.email,
                    actor:valditionUser.actor,
                    idinfo:docSuper._id,
                    waitOrder:docSuper.waitOrder,
                    aprovalOrder:docSuper.aprovalOrder,
                    historyOrder:docSuper.historyOrder
                }
            }
            else{throw `there miss data`}
        }
        else{throw `the password incorect`}
     }
     else if(valditionUser==null){throw `do't found this email ${email}`}
    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}
}

export {LoginUser}

