import mongoose ,{connect} from 'mongoose';

import {RemoveSendSuperToDriver} from './step3/RemoveSendSuper.Driver.js';
import {AddWaitinSuperToDriver} from './step3/AddWaitingSuper.Driver.js';
import {RemoveSendSuperToDriverr} from './step3/RemoveWaitinDriver.Super.js';
import {AddWaitinSuperToDriverr} from './step3/AddAproval.Super.js';

import {ChangeStateOrder} from './ChangeStateOrder.js'

async function SendRequestDriverToSupermarket(idDriver,idSupermarket,idOrder,Product){
    try{console.log(Product)
        await connect(`mongodb://localhost:27017/Delivery`);
        for (let prod of Product){
            await RemoveSendSuperToDriver(prod,idOrder,idDriver);
            await AddWaitinSuperToDriver(prod,idOrder,idDriver);
            await RemoveSendSuperToDriverr(prod,idOrder,idSupermarket);
            await AddWaitinSuperToDriverr(prod,idOrder,idSupermarket);
            await ChangeStateOrder(idOrder,prod.idProduct,4);
        }
    }
    catch(e){throw e}
    finally {
        await mongoose.connection.close();
      }
}

export {SendRequestDriverToSupermarket}


//let products=[{
//    idProduct: "676a95b8df8cf2aa089ca7fe",
//    count: 5,
//    name: "product3",
//    price: "400",
//    category: "category2",
//    idFactory: "6773ee6280baa4f6d750f1a7",
//  }]
//
//
//SendRequestDriverToSupermarket('6773ede2b1410810cc032ccb','6773e878dd119aaddcba444b','6776b7a1c671eaf87b3d3e88',products)