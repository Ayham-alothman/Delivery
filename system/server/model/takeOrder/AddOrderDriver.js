import mongoose from 'mongoose'
import {Driver} from '../schema/Driver.Schema.js';
import { User } from '../schema/User.Schema.js';
async function AddOrderDriver(idDriver,idOrder,idSupermarket,products){
    
    try{
       
        let supermarket=await User.findOne({idActore:idSupermarket});
        let nameS=supermarket.username;
        await Driver.findByIdAndUpdate(idDriver,{
            $push:{waitFactoryOrder:{idOrder,Supermarket:{id:idSupermarket,name:nameS},products:products}}
        })
      
    }
    catch(e){throw e}
}

export {AddOrderDriver}