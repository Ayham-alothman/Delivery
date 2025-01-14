import { GetOrderFactoryOrder } from "../../model/getOrder/GetOrder.Factory.js"

async function GetOrderFactoryControllar(req,res){
    try{
        const {idFactory}=req.body;
        const docFactory=await GetOrderFactoryOrder(idFactory);
        res.status(200).json(docFactory);
        console.log(`done get  Order`)
    }
    catch(e){
        console.log(`problem get  Order`);
        console.log(e)
        res.status(400).json(e)
    }
}

export {GetOrderFactoryControllar}