import mongoose ,{connect} from 'mongoose';
import {ScanProductDriver} from './step4/ScanPrroduct.Driver.js';

import {RemoveAprovalDriver} from './step4/AprovalRequest/RemoveWaitSuper.Driver.js';
import {AddHistoryDriver} from './step4/AprovalRequest/AddHistory.Driver.js';
import {RemoveAprovalOrderSuper} from './step4/AprovalRequest/RemoveAprovalOrder.Super.js';
import {AddHistorySupermarkett} from './step4/AprovalRequest/AddHistory.Super.js';
//
import {RemoveWaitSuerDriverr} from './step4/CancelRequest/RemoveWaitSuper.Driver.js';
import {AddSendSuperDriverr} from './step4/CancelRequest/AddSendSuper.Driver.js';
import {RemoveAprovalOrderSuperr} from './step4/CancelRequest/RemoveAprovalOrder.Super.js';
import {AddWaitOrderSuper} from './step4/CancelRequest/AddWaitOrder.Super.js';

import {ChangeStateOrder} from './ChangeStateOrder.js'

async function ValditionAprovalSupermarket(idDriver,idSupermarket,idOrder,Product){
    try{
        await connect(`mongodb://localhost:27017/Delivery`);
        let AprovalProduct = [];
        let CancelProduct = [];
        
        for (let prod of Product){
           let res=await ScanProductDriver(prod,idDriver,idOrder);
           if(res){AprovalProduct.push(prod)}
           else{CancelProduct.push(prod)}
        }
          console.log(AprovalProduct);
          console.log(CancelProduct);
        for(let prod of AprovalProduct){
            await RemoveAprovalDriver(prod,idOrder,idDriver);
            await AddHistoryDriver(prod,idOrder,idDriver);
            await RemoveAprovalOrderSuper(prod,idOrder,idSupermarket);
            await AddHistorySupermarkett(prod,idOrder,idDriver,idSupermarket);
            await ChangeStateOrder(idOrder,prod.idProduct,5)
        }
        
        for(let prod of CancelProduct){
            await RemoveWaitSuerDriverr(prod,idOrder,idDriver);
            await AddSendSuperDriverr(prod,idOrder,idDriver);
            await RemoveAprovalOrderSuperr(prod,idOrder,idSupermarket);
            await AddWaitOrderSuper(prod,idOrder,idDriver,idSupermarket);
            await ChangeStateOrder(idOrder,prod.idProduct,3)

        }


    }
    catch(e){throw e}
    finally {
        await mongoose.connection.close();
      }
}

export {ValditionAprovalSupermarket}

//let products=[{
//    idProduct: "676a95b8df8cf2aa089ca7fe",
//    count: 3,
//    name: "product3",
//    price: "400",
//    category: "category2",
//    idFactory: "6773ee6280baa4f6d750f1a7",
//  }]
//ValditionAprovalSupermarket('6773ede2b1410810cc032ccb',"6773e878dd119aaddcba444b","6776b7a1c671eaf87b3d3e88",products)