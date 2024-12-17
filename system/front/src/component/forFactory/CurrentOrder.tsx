import { useEffect, useState } from "react";

import SubCurrentOrder from "./SubCurrentOrder";
import WaitingAproval from "./WaitingAproval";
import { updatecurOrder } from "../../state/slices/orderSlice";

function CurrentOrder(){
   
   


    let [ShowCurOrder,setShowCurOrder]=useState(0);
    let [ShowAproOrder,setShowAproOrder]=useState(0);

   

    function ChangView(str:string){
       if(str=="c"){setShowCurOrder(1);setShowAproOrder(0)}
       else if(str=="a"){setShowCurOrder(0);setShowAproOrder(1)}
    }

    return(
        <>
         <div className="w-full h-full  flex flex-col pt-2 pb-1 ">
            <div className="h-16  flex justify-center items-center space-x-3  ">
                <div><button className="SmallButton bg-slate-950 lg:LargeButton" onClick={(e)=>{e.preventDefault();ChangView('c')}}>Current order</button></div>
                <div><button className="SmallButton bg-slate-950 lg:LargeButton" onClick={(e)=>{e.preventDefault();ChangView('a')}}>Wating aproval</button></div>
            </div>
            <div className=" flex-1">
                {ShowCurOrder?<SubCurrentOrder/>:false}
                {ShowAproOrder?<WaitingAproval/>:false}
            </div>
         </div>
        </>
    )
}
export default CurrentOrder;