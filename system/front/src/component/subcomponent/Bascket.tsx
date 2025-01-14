import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";
import { useEffect, useState } from "react";

import { IoClose } from "react-icons/io5";

import {useDispatch}  from "react-redux";
import { RemoveProduct } from "../../state/slices/bascketSupermarket";
import { clearProduct } from "../../state/slices/bascketSupermarket";

import Api from "../../utility/initApi";

import mesErorr from "../../utility/Notifaction/Erorr";
import Sucsess from "../../utility/Notifaction/Scusess";


interface Product {
    idProduct: string;
    name: string; 
    price:string,
    category:string,
    count:string,
    idFactory:string
}

function Bascket(){
    let [ShowBascket,setShowBascket]=useState(true);
    let [TotalPrice,setTotalPrice]=useState(0)
    const Basket=useSelector((s:RootState)=>s.bascket.products);
    const idSupermarket=useSelector((s:RootState)=>s.userSlice.idInfo);
    const dispatch=useDispatch();

    function removeProduct(id:string){
        dispatch(RemoveProduct(id));
    }

    useEffect(()=>{
        let TotalPrice=0;
        Basket.forEach((e)=>{TotalPrice=TotalPrice+(Number(e.count)*Number(e.price))});
        setTotalPrice(TotalPrice);
    },[Basket])


    async function SendTakeOrder(){
        try{
            if(Basket.length>0){
                const res=await Api.post(`/supermarket/takeorder`,{idSupermarket:idSupermarket,products:Basket});
            if(res.status=200){
                dispatch(clearProduct());
                Sucsess(`the order done you can review to your order`)
            }
            }
        }
        catch(e:any){
            if(e.response.data){mesErorr(e.response.data)}
            else if(e instanceof Error){mesErorr(e.message)}
            else{mesErorr(`ther problem in server try later`)}
         }

    }
    

    return(
        
        <div className="relative flex" onMouseEnter={()=>{setShowBascket(true)}} onMouseLeave={()=>{setShowBascket(false)}}>
           <p className="text-4xl "><MdLocalGroceryStore /></p>
           <div className="h-5 w-5 top-0 left-7 rounded-full bg-red-700 text-white text-sm absolute flex justify-center items-center">{Basket.length}</div>
           
           <div className={ShowBascket?`w-96 h-96 bg-gray-100 absolute top-8 right-2 flex flex-col py-2`:`hidden`}>
            <div className="flex-1 flex flex-col space-y-1">
                {
                  Basket.map((e:Product)=>{
                    return (
                    <div className="flex justify-between border-b-4 border-white px-2 ">
                        <div className="SmallText">{e.name}</div>
                        <div className="SmallText">price:{e.price}</div>
                        <div className="SmallText">count:{e.count}</div>
                        <div className="SmallText">total price:{Number(e.price)*Number(e.count)}</div>
                        <div className="text-red-600 text-2xl" onClick={()=>{removeProduct(e.idProduct)}}><IoClose /></div>
                    </div>
                    )
                  })
                }

            </div>
            <div className="h-8 flex justify-center items-center text-xl font-bold border-2" >Price All Order:{TotalPrice}</div>
            <div onClick={()=>{SendTakeOrder()}} className="h-10 w-full flex justify-center items-center "><button className="bg-green-600 w-1/2 py-2 text-white rounded-full ">Take order</button></div>
           </div>
        </div>
    )
}

export default Bascket;

