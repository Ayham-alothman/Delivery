import mognoose ,{connect} from 'mongoose';

import {Factory} from '../schema/Factory.Schema.js'

async function GetOrderFactoryOrder(idFactory){

    try{
        await connect(`mongodb://localhost:27017/Delivery`);

       const docFactory=await Factory.findById(idFactory);
       return docFactory;
    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}
}

export {GetOrderFactoryOrder}