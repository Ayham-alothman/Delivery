import { getMyproducts } from "../../model/product/GetMyproduct.Model.js"


async function getMyproductControllar(req,res){
    try{
        const {idFactory}=req.body;
        const myProduct=await getMyproducts(idFactory);
        res.status(200).json(myProduct);
    }
    catch(e){
        console.log(e);
        res.status(400).json(e)
    }
}

export {getMyproductControllar}