import mongoose,{connect} from 'mongoose';
import {Driver} from '../schema/Driver.Schema.js';


async function RemoveWaitDriver(idDriver,idOrder,product){
    idOrder = new mongoose.Types.ObjectId(idOrder);
    try{
        await connect(`mongodb://localhost:27017/Delivery`);
     await Driver.findOneAndUpdate(
        {_id:idDriver,'waitFactoryOrder.idOrder':idOrder},
        {$pull:{'waitFactoryOrder.$.products':{idProduct:product.idProduct}}}
     )
    }
    catch(e){throw e}
  
}

export {RemoveWaitDriver}

//RemoveWaitDriver(
//    '6773ede2b1410810cc032ccb',
//    '6775290cfab40717e7668b62',
//    {idProduct:'676a95f5fed2f140c2a06480'}
//)