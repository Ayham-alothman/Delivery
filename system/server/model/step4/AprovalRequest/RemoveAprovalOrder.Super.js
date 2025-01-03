import mognoose, { connect, Types } from "mongoose";
import {Supermarket} from '../../schema/Supermarjet.Schema.js';


async function RemoveAprovalOrderSuper(prod,idOrder,idSuper){

    try{
      await connect(`mongodb://localhost:27017/Delivery`);
        await Supermarket.updateOne(
            {_id:idSuper,"aprovalOrder.idOrder":new mognoose.Types.ObjectId(idOrder) },
            {
                $pull: {
                  "aprovalOrder.$.products": { idProduct: prod.idProduct }
                }
              }
        )

    }
    catch(e){throw e}
}

export { RemoveAprovalOrderSuper}

//RemoveAprovalOrderSuper(
//  {
//    idProduct: "676a95b8df8cf2aa089ca7fe",
//    count: 5,
//    name: "product3",
//    price: "400",
//    category: "category2",
//    idFactory: "6773ee6280baa4f6d750f1a7",
//  },"6776924582dd0abc1e8690dd","6773e878dd119aaddcba444b")


