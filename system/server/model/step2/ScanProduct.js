import {Factory} from '../schema/Factory.Schema.js';

async function ScanProduct(product,idOrder){
    try{
        let countF;

        let {waitOrder}=await Factory.findById(product.idFactory);
        for(let ord of waitOrder){
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

export {ScanProduct}