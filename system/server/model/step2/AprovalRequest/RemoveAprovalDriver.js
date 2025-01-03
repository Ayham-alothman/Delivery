
import mongoose,{connect} from 'mongoose';
import {Driver} from '../../schema/Driver.Schema.js'


async function RemoveAprovalDriver(product,idOrder,idDriver){
    idOrder = new mongoose.Types.ObjectId(idOrder);
    try{
        await connect(`mongodb://localhost:27017/Delivery`);
     await Driver.findOneAndUpdate(
        {_id:idDriver,'aprovalFactoryOrder.idOrder':idOrder},
        {$pull:{'aprovalFactoryOrder.$.products':{idProduct:product.idProduct}}}
     )

    }
    catch(e){throw e}
  
}

export {RemoveAprovalDriver}

//RemoveAprovalDriver(
//    
//    {
//        idProduct: "676a95b8df8cf2aa089ca7fe",
//        count: 5,
//        name: "product3",
//        price: "400",
//        category: "category2",
//        idFactory: "6773ee6280baa4f6d750f1a7",
//      },"67740c038f13d9cd297e5de2","6773ede2b1410810cc032ccb"
//)