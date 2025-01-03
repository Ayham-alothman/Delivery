import mognoose ,{connect} from 'mongoose';
import {User} from './schema/User.Schema.js'
import { RemoveRequestFactory } from './step1/RemoveRequestFactory.js';
import { AddWaitFactory } from './step1/AddWaitFactory.js';
import { AddAprovalDriver } from './step1/AddAprovalDriver.js';
import {RemoveWaitDriver} from './step1/RemoveWaitDriver.js';

import {ChangeStateOrder} from './ChangeStateOrder.js'


async function Step1Factory(idFactory,idDriver,idOrder,Products){

    try{
            await connect(`mongodb://localhost:27017/Delivery`);
        let {username} =await User.findOne({idActore:new mognoose.Types.ObjectId(idDriver   )})
        for(let prod of Products){
                    
         await RemoveRequestFactory(idFactory,idOrder,prod);
         await AddWaitFactory(idFactory,idOrder,prod,{id:idDriver,name:username});
         await RemoveWaitDriver(idDriver,idOrder,prod);
         await AddAprovalDriver(idDriver,idOrder,prod);
         await ChangeStateOrder(idOrder,prod.idProduct,2)
          
        }

    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}
}

export {Step1Factory}

let products=[{
    idProduct: "676a95b8df8cf2aa089ca7fe",
    count: 5,
    name: "product3",
    price: "400",
    category: "category2",
    idFactory: "6773ee6280baa4f6d750f1a7",
  }]

Step1Factory('6773ee6280baa4f6d750f1a7','6773ede2b1410810cc032ccb','6776b7a1c671eaf87b3d3e88',products)



//(idFactor,idDriver,idOrder,products=>[]:{idP,name,price,count,idFactory})

//1 remove from request factory
//2 add to wait factory
//3 remove from wait driver
//4 add aproval driver 