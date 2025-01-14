import mognoose ,{connect} from 'mongoose';
import {Order} from '../schema/Order.Schema.js'

async function GetAllOrder(){

    try{
        await connect(`mongodb://localhost:27017/Delivery`);
        const DocOrder=await Order.find({});
        return DocOrder;

    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}
}

export {GetAllOrder}
