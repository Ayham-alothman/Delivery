import mognoose, { connect, Types } from "mongoose";
import {User} from '../../schema/User.Schema.js'
import {Supermarket} from '../../schema/Supermarjet.Schema.js';

async function AddHistorySupermarkett(product, idOrder, idDriver,idSuper) {
  idOrder = new mognoose.Types.ObjectId(idOrder);
  try {
    const {username} =await User.findOne({idActore:new mognoose.Types.ObjectId(idDriver)})
    const docSupermarket = await Supermarket.findById(idSuper);
    let found = false;
    for (let i = 0; i < docSupermarket.historyOrder.length; i++) {
      if (docSupermarket.historyOrder[i].idOrder.toString() == idOrder.toString()) {
        found = true;
        break;
      }
    }
    if (found) {
      await Supermarket.findOneAndUpdate(
        { _id:idSuper, "historyOrder.idOrder": idOrder },
        {
          $push: { "historyOrder.$.products": { ...product } },
        }
      );
    } else {
      await Supermarket.findOneAndUpdate(
        { _id: idSuper  },
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
    }console.log('aaaaa')
  } catch (e) {
    throw e;
  } 
}

export { AddHistorySupermarkett };

//AddHistorySupermarkett({
//  idProduct: "676a95b8df8cf2aa089ca7fe",
//  count: 5,
//  name: "product3",
//  price: "400",
//  category: "category2",
//  idFactory: "6773ee6280baa4f6d750f1a7",
//},"6776924582dd0abc1e8690dd", "6773ede2b1410810cc032ccb","6773e878dd119aaddcba444b"
//);
