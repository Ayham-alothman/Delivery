import { GetOrderDriverOrder } from "../../model/getOrder/GetOrder.Driver.js" 

async function GetOrderDriverControllar(req,res){
    try{
        const {idDriver}=req.body;
        const docDriver=await GetOrderDriverOrder(idDriver);
        res.status(200).json(docDriver);
    }
    catch(e){
        res.status(400).json(e)
    }
}

export {GetOrderDriverControllar}