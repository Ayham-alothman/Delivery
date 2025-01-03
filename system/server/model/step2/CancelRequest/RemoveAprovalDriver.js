import mongoose,{connect} from 'mongoose';
import {Driver} from '../../schema/Driver.Schema.js';


async function RemoveAprovalDriverr(product,idOrder,idDriver){
    idOrder = new mongoose.Types.ObjectId(idOrder);
    try{
        await connect(`mongodb://localhost:27017/Delivery`);
     await Driver.findOneAndUpdate(
        {_id:idDriver,'aprovalFactoryOrder.idOrder':idOrder},
        {$pull:{'aprovalFactoryOrder.$.products':{idProduct:product.idProduct}}}
     )

    }
    catch(e){throw e}
  
}

export {RemoveAprovalDriverr}

//RemoveWaitDriver(
//    '676828e53bc5fca57befbc0e',
//    '676abfe506e5d31d776d8895',
//    {idProduct:'676a95f5fed2f140c2a06480'}
//)