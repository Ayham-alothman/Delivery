import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { MdLocalMall } from "react-icons/md";
import { MdRunningWithErrors } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

import TakeOrderr from "../component/forSupermarket/TakeOrder";
import CurrentOrderSupermarket from "../component/forSupermarket/CurrentOrderSupermarket";
import HisoryOrderSupermarket from "../component/forSupermarket/HisoryOrderSupermarket";
import SupportSupermarket from "../component/forSupermarket/SupportSupermarket";


import { useState } from "react";

function Supermarket(){
   
    let [Nav1,setNav1]=useState(0);
    let [Nav2,setNav2]=useState(1);
    let [TakeOrder,setTakeOrder]=useState(0);
    let [CurrentOrder,setCurrentOrder]=useState(0);
    let [HistoryOrder,setHistoryOrder]=useState(0);
    let [Support,setSupport]=useState(0);

    function changeNav(N:number){
      if(N==1){setNav1(1);setNav2(0)}
      else if(N==2){setNav1(0);setNav2(1)}
    }
    
    function changeContent(str:string){
      if(str=='1'){setTakeOrder(1);setCurrentOrder(0);setHistoryOrder(0);setSupport(0);}
      else if(str=='2'){setTakeOrder(0);setCurrentOrder(1);setHistoryOrder(0);setSupport(0);}  
      else if(str=='3'){setTakeOrder(0);setCurrentOrder(0);setHistoryOrder(1);setSupport(0);}
      else if(str=='4'){setTakeOrder(0);setCurrentOrder(0);setHistoryOrder(0);setSupport(1);}
    } 
   
    return(
    <>
      <div className=" h-screen flex">
        
        <div className={Nav1?` w-1/12 bg-gray-300 h-full flex justify-center`:`hidden`}>
          <div className=" text-gray-400 text-4xl mt-5" onClick={()=>{changeNav(2)}}><FaArrowCircleRight /></div>
        </div>

        <div className={Nav2?"border border-red-600 w-1/6 bg-gray-200 h-full flex flex-col":`hidden`}>
           <div className="w-full h-16 flex justify-between items-center px-3 ">
            <div className="flex space-x-1 ">
              <p className="text-3xl text-red-600 "><MdLocalMall /></p>
              <p className="text-xl text-red-600 ">name user</p>
            </div>
            <div className="text-4xl text-red-600" onClick={()=>{changeNav(1)}}><FaArrowAltCircleLeft /></div>
           </div>
           
           <div className="h-full w-full flex flex-col border-t  border-red-600">
            <div className=" w-full h-12 flex justify-between px-3 items-center text-red-600 hover:bg-white hover:rounded-3xl" onClick={()=>{changeContent("1")}}><p className="text-3xl"><MdLocalGroceryStore /></p> <p className="font-light">take order</p></div>
            <div className=" w-full h-12 flex justify-between px-3 items-center text-red-600 hover:bg-white hover:rounded-3xl" onClick={()=>{changeContent("2")}}><p className="text-3xl"><MdRunningWithErrors /></p> <p className="font-light">current order</p></div>
            <div className=" w-full h-12 flex justify-between px-3 items-center text-red-600 hover:bg-white hover:rounded-3xl" onClick={()=>{changeContent("3")}}><p className="text-3xl"><MdHistory /></p> <p className="font-light">History order</p></div>
            <div className=" w-full h-12 flex justify-between px-3 items-center text-red-600 hover:bg-white hover:rounded-3xl" onClick={()=>{changeContent("4")}}><p className="text-3xl"><BiSupport /></p> <p className="font-light">support</p></div>



           </div>
        </div>

        <div className="flex-1  h-full py-10 px-10">
          {TakeOrder? <TakeOrderr/> :false}
          {CurrentOrder? <CurrentOrderSupermarket/> :false}
          {HistoryOrder? <HisoryOrderSupermarket/> :false}
          {Support? <SupportSupermarket/> :false}
        </div>
      </div>
    </>
    )

}

export default Supermarket;