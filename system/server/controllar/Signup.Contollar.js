import {SignupDriver} from '../model/signup/Driver.Model.js';
import {SignupFactory} from '../model/signup/Factory.Model.js';
import {SignupSuper} from '../model/signup/Supermarket.Model.js';
import {SignupProduct} from '../model/signup/Product.Model.js'


async function SignupFactoryControllar(req,res){
    try{
        const {username,password,email}=req.body
        const newFactory= await SignupFactory(username,password,email);
        res.status(200).json(newFactory);
    }
    catch(e){res.status(403).json(e)}
}


async function SignupDriverControllar(req,res){
    try{
        const {username,password,email}=req.body
        const newDriver= await SignupDriver(username,password,email);
        res.status(200).json(newDriver);
    }
    catch(e){res.status(403).json(e)}
}


async function SignupSupermarketControllar(req,res){
    try{
        const {username,password,email}=req.body
        const newSuper= await SignupSuper(username,password,email);
        res.status(200).json(newSuper);
    }
    catch(e){res.status(403).json(e)}
}


async function SignupProductControllar(req,res){
    try{
        const {nameProduct,category,price,idFactory}=req.body;
        const newSuper= await SignupProduct(nameProduct,category,price,idFactory);
        res.status(200).json(newSuper);
    }
    catch(e){res.status(403).json(e)}
}

export {SignupFactoryControllar,SignupDriverControllar,SignupSupermarketControllar,SignupProductControllar}