import { UpdateNameProduct } from "../../model/product/Update.Name.Product.js";

async function UpdateProductNameControllar(req,res){

    try{
        const {idProduct,newName}=req.body;
        await UpdateNameProduct(idProduct,newName);
        res.status(200).end();
    }
    catch(e){
        res.status(400).end();
    }
}

export {UpdateProductNameControllar}