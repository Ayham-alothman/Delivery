    import {Product} from '../schema/Product.Schema.js';
    import mognoose ,{connect} from 'mongoose';


    async function UpdateNameProduct(idProduct,newName){
        try{
            await connect(`mongodb://localhost:27017/Delivery`);

            await Product.findByIdAndUpdate(idProduct,
                {$set:{name:newName}}
                )
        }
        catch(e){throw e}
        finally{await mognoose.connection.close();}
    } 

    export {UpdateNameProduct}