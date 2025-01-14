import { Step1Factory } from "../../model/Step1.Model.js"

async function SendRequestFactoryControllar(req,res){

    try{
        const {idDriver,idOrder,products} =req.body;
        await Step1Factory(idDriver,idOrder,products);
        res.status(200).end();
        
    }
    catch(e){
        console.log(`problem in  send request`);
        console.log(e)
        res.status(400).json(e)
    }
}


export {SendRequestFactoryControllar}