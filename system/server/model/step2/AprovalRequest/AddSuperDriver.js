import mongoose,{connect} from 'mongoose';
import {Driver} from '../../schema/Driver.Schema.js';
import {Order} from '../../schema/Order.Schema.js';
import {User} from '../../schema/User.Schema.js';





async function AddSendSuperDriver(Product,idOrder,idDriver){
    idOrder = new mongoose.Types.ObjectId(idOrder);

    try{
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
         console.log(`in add super `,found)
        if(found){
          let res=  await Driver.findOneAndUpdate(
                {_id:idDriver,"sendSupermarketOrder.idOrder":idOrder},
                {$push:{"sendSupermarketOrder.$.products":{...Product}}} ,
                {new:true}  
            )
         console.log(res)
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

export {AddSendSuperDriver}

//AddAprovalDriver("676828e53bc5fca57befbc0e", "676abe521571dc959e83d2fb", {
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
//}
//);
