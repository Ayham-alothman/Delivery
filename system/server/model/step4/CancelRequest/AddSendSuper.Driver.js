

import mongoose,{connect} from 'mongoose';
import {Driver} from '../../schema/Driver.Schema.js';
import {Order} from '../../schema/Order.Schema.js';
import {User} from '../../schema/User.Schema.js'




async function AddSendSuperDriverr(Product,idOrder,idDriver){
    idOrder = new mongoose.Types.ObjectId(idOrder);

    try{
        //await connect(`mongodb://localhost:27017/Delivery`);
        const {idSupermarket}=await Order.findById(idOrder);
        const {username}=await User.findOne({idActore:idSupermarket});

         
        const DocDriver = await Driver.findById(idDriver);
        let found = false;
        for (let i = 0; i < DocDriver.sendSupermarketOrder.length; i++) {
          if (DocDriver.sendSupermarketOrder[i].idOrder.toString() == idOrder.toString()) {
            found = true;
            break;
          }
        }
         console.log(found)
        if(found){
            await Driver.findOneAndUpdate(
                {_id:idDriver,"sendSupermarketOrder.idOrder":idOrder},
                {$push:{"sendSupermarketOrder.$.products":{...Product}}}    
            )
    
          }
        else{
            await Driver.findOneAndUpdate(
              {_id:idDriver},
              {$push:{sendSupermarketOrder:{idOrder:idOrder,Supermarket:{id:idSupermarket,name:username},products:[{...Product}]}}}
            )
        }
    }
    catch(e){throw e}
   
}

export {AddSendSuperDriverr}

///AddSendSuperDriverr(  {
///  idProduct: "676a95b8df8cf2aa089ca7fe",
///  count: 5,
///  name: "product3",
///  price: "400",
///  category: "category2",
///  idFactory: "6773ee6280baa4f6d750f1a7",
///},"6776924582dd0abc1e8690dd", "6773ede2b1410810cc032ccb",
///);
