import mognoose, { connect, Types } from "mongoose";
import {User} from '../../schema/User.Schema.js'
import { Factory } from "../../schema/Factory.Schema.js";

async function AddRequestFactory(product, idOrder, idDriver) {
  idOrder = new mognoose.Types.ObjectId(idOrder);
  try {
    const {username} =await User.findOne({idActore:new mognoose.Types.ObjectId(idDriver)})
    const DocFactory = await Factory.findById(product.idFactory);
    let found = false;
    for (let i = 0; i < DocFactory.requestOrder.length; i++) {
      if (DocFactory.requestOrder[i].idOrder.toString() == idOrder.toString()) {
        found = true;
        break;
      }
    }
    if (found) {
      await Factory.findOneAndUpdate(
        { _id: product.idFactory, "requestOrder.idOrder": idOrder },
        {
          $push: { "requestOrder.$.products": { ...product } },
        }
      );
    } else {
      await Factory.findOneAndUpdate(
        { _id: product.idFactory },
        {
          $push: {
            requestOrder: {
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

export { AddRequestFactory };

//AddWaitFactory("676aa1c7cbe9148413996672", "676ab9c2d80bd6078f9c9c08", {
//  idProduct: "676ab83821bc84bbd11014c7",
//  count: 6,
//
//  name: 'product2',
//
//  price: 201,
//
//  category: 'category2',
//
//  idFactory: "676aa1c7cbe9148413996672",
//},
//{id:"676828e53bc5fca57befbc0e",name:'driver1'}
//);
