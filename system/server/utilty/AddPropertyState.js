

function addState(products){

  let newArr=products.map((e)=>{
   return {...e,state:1}
  });
 
  return newArr
}
export {addState}