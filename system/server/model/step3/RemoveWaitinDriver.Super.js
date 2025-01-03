import mongoose ,{connect} from 'mongoose';
import {Supermarket} from '../schema/Supermarjet.Schema.js';
async function RemoveSendSuperToDriverr(product,idOrder,idSuper){
    idOrder = new mongoose.Types.ObjectId(idOrder);

    try{
        await connect(`mongodb://localhost:27017/Delivery`);
        await Supermarket.findOneAndUpdate(
            {_id:idSuper,"waitOrder.idOrder":idOrder},
            {$pull:{"waitOrder.$.products":{idProduct:product.idProduct}}}
            )
    }
    catch(e){throw e}
}

export {RemoveSendSuperToDriverr}
