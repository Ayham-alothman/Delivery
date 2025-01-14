import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { MdRunningWithErrors } from "react-icons/md";
import { GiMatterStates } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { IoMdRefreshCircle } from "react-icons/io";


import { useEffect, useState } from "react";


import { useSelector } from "react-redux";
import { RootState } from "../state/initstate";

import Sucsess from "../utility/Notifaction/Scusess";

import StateDriverr from "../component/forDriver/StateDriver";
import SupportDriverr from "../component/forDriver/SupportDriver";
import CurrentOrderDriver from "../component/forDriver/CurrentOrderDriver";
import HistoryOrderDriver from "../component/forDriver/HistoryOrderDriver";

import { useDispatch } from "react-redux";
import { FilterOrder } from "../utility/FilterOrder";
import Api from "../utility/initApi";

import { setaFctoryRequest,setFactoryAprofal,setSupermarkrtSendRequest,setSupermarketWaitRequest,setHistoryOrder } from "../state/slices/orderSliceDriver";

function Driver(){

    const dispatch=useDispatch();

    let [StateDriver,setStateDriver]=useState(0);
    let [Support,setSupport]=useState(0);
    let [CurrentOrder,setCurrentOrder]=useState(0);
    let [HistoryProduct,setHistoryProduct]=useState(0);

    const username=useSelector((s:RootState)=>s.userSlice.username);
    const idDriver=useSelector((s:RootState)=>s.userSlice.idInfo);
    
    function changeView(view:string){
        if(view=="state"){setStateDriver(1);setSupport(0);setCurrentOrder(0);setHistoryProduct(0)}
        else if(view=="support"){setStateDriver(0);setSupport(1);setCurrentOrder(0);setHistoryProduct(0)}
        else if(view=="currentorder"){setStateDriver(0);setSupport(0);setCurrentOrder(1);setHistoryProduct(0)}
        else if(view=="historyorder"){setStateDriver(0);setSupport(0);setCurrentOrder(0);setHistoryProduct(1)}
        else{alert(`set value out range`)}
    }

    async function Refresh(){
      try{
          const res=await Api.post(`/driver/getorder`,{idDriver:idDriver});
          if(res.status==200){
            let {waitFactoryOrder,aprovalFactoryOrder,sendSupermarketOrder,waitSupermarketOrder,historyOrder}=res.data;
            waitFactoryOrder=FilterOrder(waitFactoryOrder);
            aprovalFactoryOrder=FilterOrder(aprovalFactoryOrder);
            sendSupermarketOrder=FilterOrder(sendSupermarketOrder);
            waitSupermarketOrder=FilterOrder(waitSupermarketOrder);
            historyOrder=FilterOrder(historyOrder)
            dispatch(setaFctoryRequest(waitFactoryOrder))
            dispatch(setFactoryAprofal(aprovalFactoryOrder))
            dispatch(setSupermarkrtSendRequest(sendSupermarketOrder))
            dispatch(setSupermarketWaitRequest(waitSupermarketOrder));
            dispatch(setHistoryOrder(historyOrder));
  
             
              Sucsess(`the refreash sucsess`);
              
          }
      }
      catch(e){
       console.log(e)
      }
  }

    async function getOrder() {
      try{
        const res=await Api.post('/driver/getorder',{idDriver});
        if(res.status==200){
          let {waitFactoryOrder,aprovalFactoryOrder,sendSupermarketOrder,waitSupermarketOrder,historyOrder}=res.data;
          waitFactoryOrder=FilterOrder(waitFactoryOrder);
          aprovalFactoryOrder=FilterOrder(aprovalFactoryOrder);
          sendSupermarketOrder=FilterOrder(sendSupermarketOrder);
          waitSupermarketOrder=FilterOrder(waitSupermarketOrder);
          historyOrder=FilterOrder(historyOrder)
          dispatch(setaFctoryRequest(waitFactoryOrder))
          dispatch(setFactoryAprofal(aprovalFactoryOrder))
          dispatch(setSupermarkrtSendRequest(sendSupermarketOrder))
          dispatch(setSupermarketWaitRequest(waitSupermarketOrder));
          dispatch(setHistoryOrder(historyOrder));

        }
      }
      catch(e){
        console.log(e)
      }
    }

    useEffect(()=>{
      getOrder();
    },[])

    return(
    <>
      <div className="h-screen w-full flex flex-row  ">

        <div className="h-full bg-red-100 w-8 hidden"></div>

        <div className="h-full  bg-slate-200 w-40 flex flex-col lg:w-56">
           <div className='w-full  h-16 flex justify-between items-center px-2 text-yellow-700 border-b-2 border-yellow-700 '>
               <div className='flex space-x-2  '>
                   <p className=" text-3xl lg:text-4xl "><FaTaxi /></p>
                   <p className=" text-sm font-semibold pt-2   lg:text-lg">{username}</p>
               </div>
               <div className="text-2xl pt-2 lg:text-4xl"><FaArrowAltCircleLeft/></div>
           </div>
           
           <div className='w-full flex-1 flex flex-col'>
           <div className="w-full h-12  flex justify-center items-center px-2 text-yellow-700 hover:bg-white hover:rounded-full" ><p onClick={(e)=>{Refresh();}} className="text-3xl flex justify-center items-start "><IoMdRefreshCircle /></p></div> 

              <div className="w-full h-12  flex justify-between items-center px-2 text-yellow-700 hover:bg-white hover:rounded-full" onClick={(e)=>{e.preventDefault();changeView(`state`)}}><p className="text-3xl "><GiMatterStates /></p><p className=" text-sm lg:text-lg font-semibold">My State</p></div>
              <div className="w-full h-12  flex justify-between items-center px-2 text-yellow-700 hover:bg-white hover:rounded-full" onClick={(e)=>{e.preventDefault();changeView(`support`)}}><p className="text-3xl "><BiSupport /></p><p className= " text-sm lg:text-lg font-semibold">Suppourt</p></div>
              <div className="w-full h-12  flex justify-between items-center px-2 text-yellow-700 hover:bg-white hover:rounded-full" onClick={(e)=>{e.preventDefault();changeView(`currentorder`)}}><p className="text-3xl "><MdRunningWithErrors /></p><p className=" text-sm lg:text-lg font-semibold">Cureent Orders</p></div>
              <div className="w-full h-12  flex justify-between items-center px-2 text-yellow-700 hover:bg-white hover:rounded-full" onClick={(e)=>{e.preventDefault();changeView(`historyorder`)}}><p className="text-3xl "><MdHistory /></p><p className=     " text-sm lg:text-lg font-semibold">History Orders</p></div>
   
   
           </div>

        </div>

        <div className="h-full  flex-1 bg-driver bg-cover opacity-80 px-1 py-1  lg:px-10 lg:pt-10">
          {StateDriver? < StateDriverr />:false}
          {Support?<SupportDriverr/>:false}
          {CurrentOrder?<CurrentOrderDriver/>:false}
          {HistoryProduct?<HistoryOrderDriver/>:false}
        </div>

      </div>

    </>
    )
}

export default Driver;