import { ChangeState } from "../../model/ChangeState.Driver.js";


async function ChangeStateDriverContollar(req,res){
    try{
        const {idDriver,state}=req.body;
        await ChangeState(idDriver,state)
        res.status(200).end();

    }
    catch(e){throw e}
}

export {ChangeStateDriverContollar}