

function FilterOrder(products:[]){
  let newPro=products.filter((e:any)=>{
    if(e.products.length!=0){
        return e
    }
  })
  return newPro;
}

export {FilterOrder}