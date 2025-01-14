import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";
import Api from "../../utility/initApi";

import mesErorr from "../../utility/Notifaction/Erorr";

import Bascket from "../subcomponent/Bascket";
import CardProductSupermarkit from "../resuableComponent/CardProductSupermarkit";

import { useDispatch } from "react-redux";


import { setAllProducts } from "../../state/slices/productSupermarket";

function TakeOrder(){
    
    const dispatch=useDispatch();

    const Products=useSelector((s:RootState)=>s.productSliceSupermarkit.products);

    
    async function getAllProducts(){
        try{
            const res=await Api.get('/supermarket/getproducts');
            if(res.status==200){
                console.log(res.data)
                dispatch(setAllProducts(res.data))
            }
        }
        catch(e:any){
            mesErorr(e)
        }
    }

    useEffect(()=>{
        getAllProducts()
    },[])


    return(
        <div className="flex flex-col h-full ">
            <div className=" h-12  flex justify-between items-center px-3    ">
                <input placeholder="what you need ? " className="h-8 rounded-full SmallText pl-2 border border-gray-400"></input>
                <div className="flex space-x-1">
                    <p className="SmallText">set category</p>
                    <select className="w-12"  onChange={(e)=>{console.log()}}>
                    <option></option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
                </div>
                <Bascket/>
            </div>

            <div className=" flex-1 overflow-y-scroll flex flex-wrap ">
                {
                    Products.map((e)=>{
                        return(
                         <CardProductSupermarkit e={e}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TakeOrder;