import { useState } from "react";
import Input from "../subcomponent/Input";
import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";
import msgErorr from "../../utility/Notifaction/Erorr";
import Api from "../../utility/initApi";
import Sucsess from "../../utility/Notifaction/Scusess";
function AddProduct(){

    let [nameProduct,setnameProduct]=useState('');
    let [category,setcategory]=useState('');
    let [price,setprice]=useState('');
    const idFactory=useSelector((s:RootState)=>s.userSlice.idInfo);

    async function AddProduct(){
        try{
           if(nameProduct.length>=6&&category.length>=4&&price.length>=1){
            const res=await Api.post(`/signup/product`,{nameProduct,category,price,idFactory});
            if(res.status==200){
                setnameProduct(``);
                setcategory(``);
                setprice(``);
                Sucsess(`add new product to your store`)
            }
           }
           else{
            msgErorr(`there miss data`)
           }

        }
        catch(e:any){
            if(e instanceof Error){msgErorr(e.message)}
            else{msgErorr(e)}
        }
    }



    return(
        <>
         <div className="w-full h-full flex flex-col">
            <h1 className="LargeText text-slate-950">Add new product</h1>
            <div className=" flex flex-col space-y-6 pt-3  ">
              <div className="space-y-1">
                  <p className="MeduimText text-slate-950">name product</p>
                  <div className=" w-56  lg:w-72"> <input value={nameProduct} onChange={(e)=>{setnameProduct(e.target.value)}} type="text" className=" w-full h-8 rounded-xl border pl-2 font-light border-slate-950 " placeholder="name product" ></input></div>
              </div>
              <div className="space-y-1">
                  <p className="MeduimText text-slate-950">category product </p>
                  <div className=" w-56  lg:w-72"><input value={category} onChange={(e)=>{setcategory(e.target.value)}}  type="text" className=" w-full h-8 rounded-xl border pl-2 font-light border-slate-950 " placeholder="pleace enter numbers only" ></input></div>
              </div>
              <div className="space-y-1">
                  <p className="MeduimText text-slate-950">price of product</p>
                  <div className=" w-56  lg:w-72"><input value={price} onChange={(e)=>{setprice(e.target.value)}} type="text" className=" w-full h-8 rounded-xl border pl-2 font-light border-slate-950 " placeholder="number of unit " ></input></div>
              </div>
              <div>
                  <p className="MeduimText text-slate-950">image product</p>
                  <input type="file"></input>
              </div>

              <div>
                  <button onClick={()=>{AddProduct()}} className="h-12 w-48 bg-black rounded-lg text-white ml-5 flex justify-center items-center" >Add product</button>
              </div>
                
            </div>

         </div>
        </>
    )
}

export default AddProduct;