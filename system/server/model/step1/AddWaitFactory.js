import mognoose, { connect, Types } from "mongoose";
import { Factory } from "../schema/Factory.Schema.js";

async function AddWaitFactory(idFactory, idOrder, Product, Driver) {
  idOrder = new mognoose.Types.ObjectId(idOrder);
  try {
    
    const DocFactory = await Factory.findById(idFactory);
    let found = false;
    for (let i = 0; i < DocFactory.waitOrder.length; i++) {
      if (DocFactory.waitOrder[i].idOrder.toString() == idOrder) {
        found = true;
        break;
      }
    }
    if (found) {
      await Factory.findOneAndUpdate(
        { _id: idFactory, "waitOrder.idOrder": idOrder },
        {
          $push: { "waitOrder.$.products": { ...Product } },
        }
      );
    } else {
      await Factory.findOneAndUpdate(
        { _id: idFactory },
        {
          $push: {
            waitOrder: {
              idOrder: idOrder,
              Driver: Driver,
              products: [{ ...Product }],
            },
          },
        }
      );
    }
  } catch (e) {
    throw e;
  } 
}

export { AddWaitFactory };

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
