import mognoose ,{connect} from 'mongoose';

import {Driver} from '../schema/Driver.Schema.js'
async function GetOrderDriverOrder(idDriver){

    try{
        await connect(`mongodb://localhost:27017/Delivery`);

       const docDriver=await Driver.findById(idDriver);
       return docDriver;
    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}
}

export {GetOrderDriverOrder}