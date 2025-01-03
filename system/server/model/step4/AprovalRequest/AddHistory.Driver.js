import mongoose,{connect} from 'mongoose';
import {Driver} from '../../schema/Driver.Schema.js';
import {Order} from '../../schema/Order.Schema.js';
import {User} from '../../schema/User.Schema.js'




async function AddHistoryDriver(Product,idOrder,idDriver){
    idOrder = new mongoose.Types.ObjectId(idOrder);

    try{
        const {idSupermarket}=await Order.findById(idOrder);
        const {username}=await User.findOne({idActore:idSupermarket});

         
        const DocDriver = await Driver.findById(idDriver);
        let found = false;
        for (let i = 0; i < DocDriver.historyOrder.length; i++) {
          if (DocDriver.historyOrder[i].idOrder.toString() == idOrder.toString()) {
            found = true;
            break;
          }
        }
         console.log(found)
        if(found){
            await Driver.findOneAndUpdate(
                {_id:idDriver,"historyOrder.idOrder":idOrder},
                {$push:{"historyOrder.$.products":{...Product}}}    
            )
    
          }
        else{
            await Driver.findOneAndUpdate(
              {_id:idDriver},
              {$push:{historyOrder:{idOrder:idOrder,Supermarket:{id:idSupermarket,name:username},products:[{...Product}]}}}
            )
        }
    }
    catch(e){throw e}
   
}

export {AddHistoryDriver}

