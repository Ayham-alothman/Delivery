import mognoose, { connect } from "mongoose";

import { searchDriver } from "./takeOrder/SearchDriver.js";

import { Order } from "./schema/Order.Schema.js";
import { Supermarket } from "./schema/Supermarjet.Schema.js";

import { User } from "./schema/User.Schema.js";

import { addState } from "./takeOrder/AddPropertyState.js";

import { AddOrderFactory } from "./takeOrder/AddOrderFactory.js";
import { AddOrderDriver } from "./takeOrder/AddOrderDriver.js";

async function TakeOrder(idSupermarket, products) {
  try {
    await connect(`mongodb://localhost:27017/Delivery`);

    let productWithState = addState(products);
    let idDriver = await searchDriver();
    let driver = await User.findOne({ idActore: idDriver });
    let nameDriver = driver.username;

    let order = new Order({
      idSupermarket: idSupermarket,
      idDriver: idDriver,
      products: productWithState,
    });
    let newOrder = await order.save();

    let idNewOrder = newOrder._id;

    let datapushSupermarket = {
      idOrder: idNewOrder,
      Driver: {id:idDriver,name:nameDriver},
      products: products,
    };
    await Supermarket.findByIdAndUpdate(idSupermarket, {
      $push: { waitOrder: datapushSupermarket },
    });

    await AddOrderFactory(products, idNewOrder, {
      idDriver: idDriver,
      nameDriver: nameDriver,
    });
    await AddOrderDriver(idDriver, idNewOrder, idSupermarket, products);
  } catch (e) {
    throw e;
  } finally {
    await mognoose.connection.close();
  }
}

export { TakeOrder };



//let Products = [
//  {
//    idProduct: "676a95b8df8cf2aa089ca7fe",
//    count: 5,
//    name: "product3",
//    price: "400",
//    category: "category2",
//    idFactory: "6773ee6280baa4f6d750f1a7",
//  },
//  {
//    idProduct: "676a95f5fed2f140c2a06480",
//    count: 5,
//    name: "product1",
//    price: "200",
//    category: "category1",
//    idFactory: "6773eee04045b475d82a351d",
//  }
//];

//TakeOrder("6773e878dd119aaddcba444b", Products);
// data set ? (idsuper,product:[{idpro,name,price,count}])

//add to module order (idorder,idDriver,idSuper,Product:[{idPrduct,count,state}])
//add to supermarket  (.wait product=> {idOrder,idDriver:{id,name},product:[{id,name,count}]})
//add to driver       (.waitFactory => {idOrderm,idSupermarket,products:[{idproduct,count}]})
//add to factorys     (.requestorder => {idOrder,driver:{id,name},product:[{idproduct,count}]})
