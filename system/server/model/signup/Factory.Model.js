
import mognoose,{connect} from 'mongoose';

import {User} from '../schema/User.Schema.js'
import {Factory} from '../schema/Factory.Schema.js'
async function SignupFactory(infoDriver){
  let username=infoDriver.username;
  let password=infoDriver.password;
  let email=infoDriver.email
  let actor="factory";
  try{
      await connect(`mongodb://localhost:27017/Delivery`);
      const factory=new Factory({});
      const newFactory=await factory.save();
      const idnewfactory=newFactory._id;
      const user=new User({username:username,password:password,email:email,actor:actor,idActore:idnewfactory});
      const NewUser=await user.save();
      console.log(NewUser);
      return NewUser
      
  }
  catch(e){throw e}
  finally{await mognoose.connection.close()}
}

export {SignupFactory}
SignupFactory({username:"factory2",email:"factory2@gmail.com",password:"12345678"})



