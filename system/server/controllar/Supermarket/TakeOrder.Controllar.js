import { TakeOrder } from "../../model/TakeOrder.Model.js"


async function TakeOrderControllar(req,res){
    try{
        const {idSupermarket, products}=req.body;
        await TakeOrder(idSupermarket, products);
        res.status(200).end()
    }
    catch(e){
      res.status(400).json(e)
    }
}


export {TakeOrderControllar}