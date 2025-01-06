import jwt from 'jsonwebtoken'

import { LoginUser } from "../model/Login.Model.js"; 



async function LoginContorllar(req,res){
    try{
        const {email,password} =req.body
        const User=await LoginUser(email,password);
        const token =jwt.sign(User,'Delivery');
        res.status(200).cookie(`token`,token).end();
    }
    catch(e){res.status(403).json(e)}
}

export {LoginContorllar}