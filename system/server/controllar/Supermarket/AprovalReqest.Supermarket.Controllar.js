import { ValditionAprovalSupermarket } from "../../model/Step4.Model.js";



async function AprovalRequestSuperControllar(req,res){
    try{
        const {idDriver,idSupermarket,idOrder,products}=req.body;console.log(products)
        await ValditionAprovalSupermarket(idDriver,idSupermarket,idOrder,products);
        res.status(200).end()
    }
    catch(e){console.log(e)
        res.status(400).json(e)
    }
}

export {AprovalRequestSuperControllar}