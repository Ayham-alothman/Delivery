import mongoose,{connect} from 'mongoose';

import {Product} from '../schema/Product.Schema.js'

async function SignupProduct(infoProduct){
  let nameP=infoProduct.name;
  let category=infoProduct.category;
  let price=infoProduct.price;
  let idFactory=infoProduct.idFactory
  try{
      await connect(`mongodb://localhost:27017/Delivery`);
      const product=new Product({name:nameP,category:category,price:price,idFactory:idFactory});
      const newProduct=await product.save();console.log(newProduct)
      return newProduct;    
  }
  catch(e){throw e}
  finally{await mongoose.connection.close()}
}

export {SignupProduct}

SignupProduct({name:"product11",category:"category11",price:"2220",idFactory:"676aa1c7cbe9148413996672"})



