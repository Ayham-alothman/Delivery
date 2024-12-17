import { useState } from "react";
import products from "../../utility/StaticData";
import Card from "../resuableComponent/Card";

function MyProduct(){
    let [Product,setProduct]=useState([...products]);


   

    return(
        <>
         <div className="h-full w-full px-8 pt-8 flex flex-col">
            <p className="lg:LargeText text-xl text-slate-950 py-2">My products</p>
            <div className="relative flex-1 flex flex-col space-y-2 overflow-y-scroll lg:space-y-0  lg:flex-row lg:flex-wrap  ">
             <Card name="pro1" price="100" unit="10" />
             <Card name="pro1" price="100" unit="10" />
             <Card name="pro1" price="100" unit="10" />

             <Card name="pro1" price="100" unit="10" />
             <Card name="pro1" price="100" unit="10" />
             <Card name="pro1" price="100" unit="10" />
             
            </div>

         </div>
        </>
    )
}

export default MyProduct;