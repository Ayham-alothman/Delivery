import { User } from "./schema/User.Schema"

async function LoginUser(){
    try{
     await User.findById('');
    }
    catch(e){}
}

export {LoginUser}