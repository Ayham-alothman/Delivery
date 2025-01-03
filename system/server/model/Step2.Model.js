import mongoose, { connect } from "mongoose";
import { ScanProduct } from "./step2/ScanProduct.js";

import { RemoveWaitRequest } from "./step2/AprovalRequest/RemoveWaitFactory.js";
import { AddHistoryFactory } from "./step2/AprovalRequest/AddHistoryFactory.js";
import { RemoveAprovalDriver } from "./step2/AprovalRequest/RemoveAprovalDriver.js";
import { AddSendSuperDriver } from "./step2/AprovalRequest/AddSuperDriver.js";

//
import { RemoveWaitFactory } from "./step2/CancelRequest/RemoveWaitFactory.js";
import { AddRequestFactory } from "./step2/CancelRequest/AddRequestFactory.js";
import { RemoveAprovalDriverr } from "./step2/CancelRequest/RemoveAprovalDriver.js";
import { AddWaitDriver } from "./step2/CancelRequest/AddWaitDriver.js";

import {ChangeStateOrder} from './ChangeStateOrder.js'

async function AprovalDriver(idDriver, idOrder, Products) {
  try {
    await connect(`mongodb://localhost:27017/Delivery`);
    let AprovalProduct = [];
    let CancelProduct = [];

    for (let prod of Products) {
      let res = await ScanProduct(prod, idOrder);
      if (res) {
        AprovalProduct.push(prod);
      } else {
        CancelProduct.push(prod);
      }
    }
    console.log(AprovalProduct)
    console.log(CancelProduct)

    for (let prod of AprovalProduct) {
      await RemoveWaitRequest(prod, idOrder);
      await AddHistoryFactory(prod, idOrder, idDriver);
      await RemoveAprovalDriver(prod, idOrder,idDriver);
      await AddSendSuperDriver(prod, idOrder, idDriver);
      await ChangeStateOrder(idOrder,prod.idProduct,3)
    }

    for (let prod of CancelProduct) {
      await RemoveWaitFactory(prod, idOrder);
      await AddRequestFactory(prod, idOrder, idDriver);
      await RemoveAprovalDriverr(prod, idOrder, idDriver);
      await AddWaitDriver(prod, idOrder, idDriver);
      await ChangeStateOrder(idOrder,prod.idProduct,1)
    }
  } catch (e) {
    throw e;
  } finally {
    await mongoose.connection.close();
  }
}

export { AprovalDriver };

let products=[{
  idProduct: "676a95b8df8cf2aa089ca7fe",
  count: 5,
  name: "product3",
  price: "400",
  category: "category2",
  idFactory: "6773ee6280baa4f6d750f1a7",
}]
AprovalDriver('6773ede2b1410810cc032ccb','6776b7a1c671eaf87b3d3e88',products)