import mognoose, { connect, Types } from "mongoose";
import {User} from '../../schema/User.Schema.js'
import { Factory } from "../../schema/Factory.Schema.js";

async function AddHistoryFactory(product, idOrder, idDriver) {
  idOrder = new mognoose.Types.ObjectId(idOrder);
  try {
    const {username} =await User.findOne({idActore:new mognoose.Types.ObjectId(idDriver)})
    const DocFactory = await Factory.findById(product.idFactory);
    let found = false;
    for (let i = 0; i < DocFactory.historyOrder.length; i++) {
      if (DocFactory.historyOrder[i].idOrder.toString() == idOrder.toString()) {
        found = true;
        break;
      }
    }
    if (found) {
      await Factory.findOneAndUpdate(
        { _id: product.idFactory, "historyOrder.idOrder": idOrder },
        {
          $push: { "historyOrder.$.products": { ...product } },
        }
      );
    } else {
      await Factory.findOneAndUpdate(
        { _id: product.idFactory },
        {
          $push: {
            historyOrder: {
              idOrder: idOrder,
              Driver: {id:idDriver,name:username},
              products: [{ ...product }],
            },
          },
        }
      );
    }
  } catch (e) {
    throw e;
  } 
}

export { AddHistoryFactory };
