import mongoose,{connect} from 'mongoose';
import {Driver} from '../schema/Driver.Schema.js';
import {Order} from '../schema/Order.Schema.js';
import {User} from '../schema/User.Schema.js'




async function AddWaitinSuperToDriver(Product,idOrder,idDriver){
    idOrder = new mongoose.Types.ObjectId(idOrder);

    try{
        await connect(`mongodb://localhost:27017/Delivery`);
        const {idSupermarket}=await Order.findById(idOrder);
        const {username}=await User.findOne({idActore:idSupermarket});

         
        const DocDriver = await Driver.findById(idDriver);
        let found = false;
        for (let i = 0; i < DocDriver.waitSupermarketOrder.length; i++) {
          if (DocDriver.waitSupermarketOrder[i].idOrder.toString() == idOrder.toString()) {
            found = true;
            break;
          }
        }
         console.log(found)
        if(found){
            await Driver.findOneAndUpdate(
                {_id:idDriver,"waitSupermarketOrder.idOrder":idOrder},
                {$push:{"waitSupermarketOrder.$.products":{...Product}}}    
            )
    
          }
        else{
            await Driver.findOneAndUpdate(
              {_id:idDriver},
              {$push:{waitSupermarketOrder:{idOrder:idOrder,Supermarket:{id:idSupermarket,name:username},products:[{...Product}]}}}
            )
        }
    }
    catch(e){throw e}
   
}

export {AddWaitinSuperToDriver}

//AddWaitinSuperToDriver({
//  idProduct: "676ab83821bc84bbd11014c8",
//  count: 6,
//
//  name: 'product21',
//
//  price: 2010,
//
//  category: 'category21',
//
//  idFactory: "676aa1c7cbe9148413996672",
//},"676a9dc94651ba28c839c95b", "676828e53bc5fca57befbc0e",
//);
