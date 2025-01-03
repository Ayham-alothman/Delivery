import {Factory} from '../../schema/Factory.Schema.js'
import mognoose, { connect, Types } from "mongoose";


async function RemoveWaitRequest(prod,idOrder){

    try{
        await Factory.updateOne(
            {_id:prod.idFactory,"waitOrder.idOrder":new mognoose.Types.ObjectId(idOrder) },
            {
                $pull: {
                  "waitOrder.$.products": { idProduct: prod.idProduct }
                }
              }
        )

    }
    catch(e){throw e}
}

export { RemoveWaitRequest}