
import { AprovalDriver } from "../../model/Step2.Model.js"

async function AprovalRequestDriver(req,res){

    try{
        const {idDriver, idOrder, products}=req.body;
        await AprovalDriver(idDriver, idOrder, products);
        res.status(200).end();
    }
    catch(e){
        res.status(400).json(e)
    }
}

export {AprovalRequestDriver}