import {Order} from './schema/Order.Schema.js';
import mognoose ,{connect} from 'mongoose';


async function ChangeStateOrder(idOrder,idProduct,state){
    try{
        

        await Order.findOneAndUpdate(
            {_id:idOrder,"products.idProduct":idProduct},
            {$set:{"products.$.state":state}}
        ) 
          
    }
    catch(e){throw e}
    

}

export {ChangeStateOrder}

//ChangeStateOrder('676a9dc94651ba28c839c95b','676a95b8df8cf2aa089ca7fe',2);