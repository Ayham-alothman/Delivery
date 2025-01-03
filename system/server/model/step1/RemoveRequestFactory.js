import mognoose, { connect, Types } from "mongoose";
import { Factory } from "../schema/Factory.Schema.js";

async function RemoveRequestFactory(idFactory, idOrder, Product) {
  try {
    

    let re = await Factory.findOneAndUpdate(
      { _id: idFactory, "requestOrder.idOrder": new mognoose.Types.ObjectId(idOrder) },
      {
        $pull: {
          "requestOrder.$.products": { idProduct: Product.idProduct }
        }
      },
      { new: true } // This option returns the updated document
    );
    console.log(re);
  } catch (e) {
    throw e;
  } 
}


export { RemoveRequestFactory };

//RemoveRequestFactory(
//  "676aa1c7cbe9148413996672",
//  "676ab9c2d80bd6078f9c9c09",
//  {idProduct:"676a95f5fed2f140c2a06480"}
//);
