import mongoose ,{connect} from 'mongoose';
import {Driver} from '../schema/Driver.Schema.js'

async function RemoveSendSuperToDriver(product,idOrder,idDriver){
    idOrder = new mongoose.Types.ObjectId(idOrder);

    try{
        await connect(`mongodb://localhost:27017/Delivery`);
        await Driver.findOneAndUpdate(
            {_id:idDriver,"sendSupermarketOrder.idOrder":idOrder},
            {$pull:{"sendSupermarketOrder.$.products":{idProduct:product.idProduct}}}
            
            );
    }
    catch(e){throw e}
}

export {RemoveSendSuperToDriver}
