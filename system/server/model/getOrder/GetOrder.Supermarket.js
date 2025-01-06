import mognoose ,{connect} from 'mongoose';

import {Supermarket} from '../schema/Supermarjet.Schema.js'

async function GetOrderSupermarketOrder(idSuper){

    try{
        await connect(`mongodb://localhost:27017/Delivery`);

       const docSuper=await Supermarket.findById(idSuper);
       return docSuper;
    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}
}

export {GetOrderSupermarketOrder}