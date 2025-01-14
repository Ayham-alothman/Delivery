import { SendRequestDriverToSupermarket } from "../../model/Step3.Model.js"

async function SendRequestDriverControllar(req,res){
    try{
        const {idDriver,idSupermarket,idOrder,products}=req.body;console.log(req.body)
        await SendRequestDriverToSupermarket(idDriver,idSupermarket,idOrder,products);
        res.status(200).end();
    }
    catch(e){
        res.status(400).end();
    }
}

export {SendRequestDriverControllar}