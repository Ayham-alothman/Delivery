import { GetOrderSupermarketOrder } from "../../model/getOrder/GetOrder.Supermarket.js"

async function GeTOrderSupermarketControllar(req,res){
    try{
        const {idSupermarket}=req.body;
        const docSupermarket=await GetOrderSupermarketOrder(idSupermarket);
        res.status(200).json(docSupermarket);
    }
    catch(e){
        res.status(400).json(e)
    }
}

export {GeTOrderSupermarketControllar}