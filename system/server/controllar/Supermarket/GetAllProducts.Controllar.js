import { GetAllProducts } from "../../model/GetAllProducts.js"

async function GetAllProductsControllar(req,res){
    try{
       const Products=await GetAllProducts();
       res.status(200).json(Products);
    }
    catch(e){
        res.status(400).json(e)
    }
}

export {GetAllProductsControllar}