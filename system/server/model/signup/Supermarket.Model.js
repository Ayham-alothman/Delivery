
import mognoose,{connect} from 'mongoose';

import {User} from '../schema/User.Schema.js'
import {Supermarket} from '../schema/Supermarjet.Schema.js'
async function SignupSuper(infoSuper){
  let username=infoSuper.username;
  let password=infoSuper.password;
  let email=infoSuper.email
  let actor="supermarket";
  try{
      await connect(`mongodb://localhost:27017/Delivery`);
      const supermarket=new Supermarket({});
      const newsupermarket=await supermarket.save();
      const idnewsupermarket=newsupermarket._id;
      const user=new User({username:username,password:password,email:email,actor:actor,idActore:idnewsupermarket});
      const NewUser=await user.save();
      console.log(NewUser);
      return NewUser;
      
  }
  catch(e){throw e}
  finally{await mognoose.connection.close()}
}

export {SignupSuper}

