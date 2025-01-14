import { useEffect, useState } from "react";
import Card from "../resuableComponent/Card";

import msgErorr from "../../utility/Notifaction/Erorr";
import Api from "../../utility/initApi";
import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";


function MyProduct(){
    interface product{
        _id:string,
        name:string,
        price:string,
        category:string
    }
    let [Product,setProduct]=useState<product[]>();
    const idFactory=useSelector((s:RootState)=>s.userSlice.idInfo);


    async function GetMyproduct(){
        try{
            const res=await Api.post(`/factory/getmyproduct`,{idFactory:idFactory});
            console.log(`/////////`)
            console.log(res);
            console.log('///////');
            if(res.status==200){
                let pro:product[]=res.data;
               
                setProduct(pro);
            }
        }
        catch(e:any){
           if(e instanceof Error){
            msgErorr(e.message)
           }
           else{msgErorr(e)}
        }
    }
  
    useEffect(()=>{
        GetMyproduct();
    },[])



   

    return(
        <>
         <div className="h-full w-full px-8 pt-8 flex flex-col">
            <p className="lg:LargeText text-xl text-slate-950 py-2">My products</p>
            <div className="relative flex-1 flex flex-col space-y-2 overflow-y-scroll lg:space-y-0  lg:flex-row lg:flex-wrap  ">
             {Product?.map((e:product)=>{
                return(
                    <Card id={e._id} name={e.name} price={e.price} category={e.category} />         
                )
             })}
          
             
            </div>

         </div>
        </>
    )
}

export default MyProduct;