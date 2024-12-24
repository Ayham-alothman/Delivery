import {Factory} from '../model/schema/Factory.Schema.js'
async function AddOrderFactory(products,idOrder,Driver){

    try{

    for(let prod of products){
        let DocFactory=await Factory.findById(prod.idFactory);
        let found=false
        for(let i=0;i<DocFactory.requestOrder.length;i++){
          if(DocFactory.requestOrder[i].idOrder==idOrder){found=true;break;}
        }
        if(found){
            await Factory.updateOne(
                { _id: prod.idFactory, "requestOrder.idOrder": idOrder },
                { $push: { "requestOrder.$.products": prop } }
            );
        }
        else{
            await Factory.updateOne(
                { _id: prod.idFactory },
                { $push: { "requestOrder": {idOrder:idOrder,Driver:Driver,products:[prod]} } }
            );
        }

      }
    }
    catch(e){throw e}
}

export {AddOrderFactory   }