import mognoose,{connect} from 'mongoose';

import {Driver} from '../schema/Driver.Schema.js';

async function searchDriver(){
try{
    await connect(`mongodb://localhost:27017/Delivery`);
    let AllDriver=await Driver.find();
    for(let driver of AllDriver){
        if(driver.state==1){return driver._id}
    }
    return false;
}
catch(e){throw e}

}

export {searchDriver}