import { GetAllOrder } from "../../model/getOrder/GetAllOrder.Model.js" 

async function GetAllOrderControllar(req,res){
 try{
    const AllOrder=await GetAllOrder();
    res.status(200).json(AllOrder);
  
 }
 catch(e){
    res.status(200).json(e)
 }
}

export {GetAllOrderControllar}