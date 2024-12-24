import mognoose,{connect,Types} from 'mongoose';

import {searchDriver} from '../utilty/SearchDriver.js';

import {Order} from './schema/Order.Schema.js';
import {Supermarket} from './schema/Supermarjet.Schema.js';
import {Driver} from './schema/Driver.Schema.js';

import {User} from './schema/User.Schema.js'

import {addState} from '../utilty/AddPropertyState.js';

import { AddOrderFactory } from '../utilty/AddOrderFactory.js';
import { AddOrderDriver } from '../utilty/AddOrderDriver.js';

async function TakeOrder(idSupermarket,products){
    try{
        await connect(`mongodb://localhost:27017/Delivery`);

        let productWithState=addState(products);
        let idDriver=await searchDriver();
        let driver=await User.findOne({idActore:idDriver});
        let nameDriver=driver.username;

        let order=new Order({idSupermarket:idSupermarket,idDriver:idDriver,products:productWithState});
        let newOrder=await order.save();
        
        let idNewOrder=newOrder._id;
        
        let datapushSupermarket={idOrder:idNewOrder,idDriver:idDriver,products:products};
        await Supermarket.findByIdAndUpdate(idSupermarket,{$push:{waitOrder:datapushSupermarket}});
       
        await AddOrderFactory(products,idNewOrder,{idDriver:idDriver,nameDriver:nameDriver});
        await AddOrderDriver(idDriver,idNewOrder,idSupermarket,products)
    }
    catch(e){throw e}
    finally{await mognoose.connection.close()}
}

export {TakeOrder}


let Products=[
    {idProduct:"676a95b8df8cf2aa089ca7fe",count:5,name:"product1",price:"200",category:"category1",idFactory:"676a7ed03342ed5e9ed16a38"}
   ,{idProduct:"676a95f5fed2f140c2a06480",count:5,name:"product1",price:"200",category:"category1",idFactory:"676aa1c7cbe9148413996672"}
   ,{idProduct:"676ab83821bc84bbd11014c7",count:5,name:"product1",price:"200",category:"category1",idFactory:"676aa1c7cbe9148413996672"}

]

TakeOrder('676a7db1223da16fc5054e5c',Products);
// data set ? (idsuper,product:[{idpro,name,price,count}])

//add to module order (idorder,idDriver,idSuper,Product:[{idPrduct,count,state}])
//add to supermarket  (.wait product=> {idOrder,idDriver:{id,name},product:[{id,name,count}]})
//add to driver       (.waitFactory => {idOrderm,idSupermarket,products:[{idproduct,count}]})
//add to factorys     (.requestorder => {idOrder,driver:{id,name},product:[{idproduct,count}]})