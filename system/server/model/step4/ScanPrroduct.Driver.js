import {Driver} from '../schema/Driver.Schema.js';

async function ScanProductDriver(product,idDriver,idOrder){console.log(product)
    try{

        let {waitSupermarketOrder}=await Driver.findById(idDriver);
        let countF;

        for(let ord of waitSupermarketOrder){
            if(ord.idOrder.toString()==idOrder){
                for(let prod of ord.products){
                    if(prod.idProduct==product.idProduct){
                        countF=prod.count;
                    }
                }
            }
        } 
        ///
        if(Number(countF)==Number(product.count)){return true}
        else {return false}

    }
    catch(e){throw e}
}

export {ScanProductDriver}

// product,idOrder
//order=> driver