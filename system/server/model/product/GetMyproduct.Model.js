import {Product} from '../schema/Product.Schema.js';
import mognoose ,{connect} from 'mongoose';


async function getMyproducts(idFactory){
    try{
        await connect(`mongodb://localhost:27017/Delivery`);
        const Docs=await Product.find({idFactory:idFactory});
        return Docs;

        
    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}
} 

export {getMyproducts}

