import {Product} from '../schema/Product.Schema.js';
import mognoose ,{connect} from 'mongoose';


async function UpdatePriceProduct(idProduct,newPrice){
    try{
        await connect(`mongodb://localhost:27017/Delivery`);
        await Product.findByIdAndUpdate(idProduct,
            {$set:{price:newPrice}}
            )
    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}
} 

export {UpdatePriceProduct}