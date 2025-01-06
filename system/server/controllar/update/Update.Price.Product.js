import { UpdatePriceProduct } from "../../model/product/Update.Price.Product.js";


async function UpdatePriceProductControllar(req,res){

    try{
        const {idProduct,newPrice}=req.body;
        await UpdatePriceProduct(idProduct,newPrice);
        res.status(200).end()
    }
    catch(e){
        res.status(400).json(e);
    }
}

export {UpdatePriceProductControllar}