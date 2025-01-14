import {Product} from './schema/Product.Schema.js';
import mognoose ,{connect} from 'mongoose';



async function GetAllProducts(){
    try{
        await connect(`mongodb://localhost:27017/Delivery`);
        const Products=await Product.find({});
        return Products;
    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}
}

export {GetAllProducts}
