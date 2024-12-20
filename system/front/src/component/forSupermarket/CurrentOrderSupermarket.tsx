import {  useState } from "react";
import RequestOrder from "./comCurrentOrder/RequestOrder";
import AprovalOrder from "./comCurrentOrder/AprovalOrder";

function CurrentOrderSupermarket(){
    
    let [ShowCurOrder,setShowCurOrder]=useState(0);
    let [ShowAproOrder,setShowAproOrder]=useState(0);

    function ChangView(num:number){
        if(num==1){setShowCurOrder(1);setShowAproOrder(0)}
        else if(num==2){setShowCurOrder(0);setShowAproOrder(1)}
     }

     return(
        <>
         <div className="w-full h-full  flex flex-col pt-2 pb-1 ">
            <div className="h-16  flex justify-center items-center space-x-3  ">
                <div><button className="SmallButton bg-slate-950 lg:LargeButton" onClick={(e)=>{e.preventDefault();ChangView(1)}}>Request Order</button></div>
                <div><button className="SmallButton bg-slate-950 lg:LargeButton" onClick={(e)=>{e.preventDefault();ChangView(2)}}>Aproval Order</button></div>
            </div>
            <div className=" flex-1">
                {ShowCurOrder?<RequestOrder/>:false}
                {ShowAproOrder?<AprovalOrder/>:false}
            </div>
         </div>
        </>
    )
}

export default CurrentOrderSupermarket;