import { useState } from "react";
import AtFactory from "./comCurrentOrder/AtFactoryOrder";
import AprovalFO from "./comCurrentOrder/AprovalFactoryOrder";
import SendSMO from "./comCurrentOrder/SendSupermarketOrder";
import WSO from "./comCurrentOrder/WaitSupermarketOrder";

//atFacory order
//aproval factory order
//send super market order
//wait supermarket order

function CurrentOrderDriver(){

    let [AtFactoryOrder,setAtFactoryOrder]=useState(0);
    let [AprovalFactoryOrder,setAprovalFactoryOrder]=useState(0);
    let [SendSupermarketOrder,setSendSupermarketOrder]=useState(0);
    let [WaitSupermarketOrder,setWaitSupermarketOrder]=useState(0)

   

    function ChangView(str:string){
       if(str=="1"){setAtFactoryOrder(1);setAprovalFactoryOrder(0);setSendSupermarketOrder(0);setWaitSupermarketOrder(0)}
       else if(str=="2"){setAtFactoryOrder(0);setAprovalFactoryOrder(1);setSendSupermarketOrder(0);setWaitSupermarketOrder(0)}
       else if(str=="3"){setAtFactoryOrder(0);setAprovalFactoryOrder(0);setSendSupermarketOrder(1);setWaitSupermarketOrder(0)}
       else if(str=="4"){setAtFactoryOrder(0);setAprovalFactoryOrder(0);setSendSupermarketOrder(0);setWaitSupermarketOrder(1)}

    }

    return(
        <>
         <div className="w-full h-full  flex flex-col pt-2 pb-1 ">
            <div className="h-16  flex justify-center items-center space-x-3  ">
                <div><button className="SmallButton bg-slate-950 lg:LargeButton" onClick={(e)=>{e.preventDefault();ChangView('1')}}>at Factory</button></div>
                <div><button className="SmallButton bg-slate-950 lg:LargeButton" onClick={(e)=>{e.preventDefault();ChangView('2')}}> aproval Order Factory</button></div>
                <div><button className="SmallButton bg-slate-950 lg:LargeButton" onClick={(e)=>{e.preventDefault();ChangView('3')}}>Send  supermarket</button></div>
                <div><button className="SmallButton bg-slate-950 lg:LargeButton" onClick={(e)=>{e.preventDefault();ChangView('4')}}>Wait supermarket</button></div>


            </div>
            <div className=" flex-1">
                {AtFactoryOrder?<AtFactory/>:false}
                {AprovalFactoryOrder?<AprovalFO/>:false}
                {SendSupermarketOrder?<SendSMO/>:false}
                {WaitSupermarketOrder?<WSO/>:false}
            </div>
         </div>
        </>
    )



}

export default CurrentOrderDriver;