import {Driver} from './schema/Driver.Schema.js'
import mognoose ,{connect} from 'mongoose';



async function ChangeState(idDriver,state){
    idDriver=new mognoose.Types.ObjectId(idDriver);
    try{
        await connect(`mongodb://localhost:27017/Delivery`);

        await Driver.findOneAndUpdate(idDriver,
            {state:state})
            
    }
    catch(e){throw e}
    finally{await mognoose.connection.close();}

}

export {ChangeState}