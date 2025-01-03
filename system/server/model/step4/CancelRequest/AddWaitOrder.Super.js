import mognoose, { connect, Types } from "mongoose";
import {User} from '../../schema/User.Schema.js'
import {Supermarket} from '../../schema/Supermarjet.Schema.js'

async function AddWaitOrderSuper(product, idOrder, idDriver,idSuper) {
  idOrder = new mognoose.Types.ObjectId(idOrder);
  try {
    
    const {username} =await User.findOne({idActore:new mognoose.Types.ObjectId(idDriver)})
    const DocSupermarket = await Supermarket.findById(idSuper);
    let found = false;
    for (let i = 0; i < DocSupermarket.waitOrder.length; i++) {
      if (DocSupermarket.waitOrder[i].idOrder.toString() == idOrder.toString()) {
        found = true;
        break;
      }
    }
    if (found) {
      await Supermarket.findOneAndUpdate(
        { _id: idSuper, "waitOrder.idOrder": idOrder },
        {
          $push: { "waitOrder.$.products": { ...product } },
        }
      );
    } else {
      await Supermarket.findOneAndUpdate(
        { _id: idSuper },
        {
          $push: {
            waitOrder: {
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

export { AddWaitOrderSuper };
