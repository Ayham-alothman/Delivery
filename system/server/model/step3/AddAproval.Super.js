import mongoose,{connect} from 'mongoose';
import {Supermarket} from '../schema/Supermarjet.Schema.js'
import {Order} from '../schema/Order.Schema.js';
import {User} from '../schema/User.Schema.js'




async function AddWaitinSuperToDriverr(Product,idOrder,idSuper){
    idOrder = new mongoose.Types.ObjectId(idOrder);

    try{
        await connect(`mongodb://localhost:27017/Delivery`);
        const {idDriver}=await Order.findById(idOrder);
        const {username}=await User.findOne({idActore:idDriver});

         
        const DocSuper = await Supermarket.findById(idSuper);console.log(DocSuper)
        let found = false;
        for (let i = 0; i < DocSuper.aprovalOrder.length; i++) {
          if (DocSuper.aprovalOrder[i].idOrder.toString() == idOrder.toString()) {
            found = true;
            break;
          }
        }
         console.log(found)
        if(found){
            await Supermarket.findOneAndUpdate(
                {_id:idSuper,"aprovalOrder.idOrder":idOrder},
                {$push:{"aprovalOrder.$.products":{...Product}}}    
            )
    
          }
        else{
            await Supermarket.findOneAndUpdate(
              {_id:idSuper},
              {$push:{aprovalOrder:{idOrder:idOrder,Driver:{id:idDriver,name:username},products:[{...Product}]}}}
            )
        }
    }
    catch(e){throw e}
   
}

export {AddWaitinSuperToDriverr}

