
import mognoose,{connect} from 'mongoose';

import {Driver} from '../schema/Driver.Schema.js';
import {User} from '../schema/User.Schema.js'

async function SignupDriver(username,password,email){
  
  let actor="driver";
  try{
      await connect(`mongodb://localhost:27017/Delivery`);
      const driver=new Driver({});
      const newDriver=await driver.save();
      const idDriver=newDriver._id;console.log(username)
      const user=new User({username:username,password:password,email:email,actor:actor,idActore:idDriver});
      const NewUser=await user.save();
      console.log(NewUser)
      
  }
  catch(e){throw e}
  finally{await mognoose.connection.close()}
}

export {SignupDriver}

//SignupDriver({username:"drive1",password:"12345678",email:"drive@gmai;.com"});