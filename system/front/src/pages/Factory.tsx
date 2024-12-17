import { MdFactory } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { MdRunningWithErrors } from "react-icons/md";
import { useState } from "react";

import MyProductC from "../component/forFactory/MyProduct";
import CurrentOrderC from "../component/forFactory/CurrentOrder";
import HistoryOrderC from "../component/forFactory/HistoryOrder";
import AddProductC from "../component/forFactory/AddProduct";

function Factory(){
    let [AddProduct,setAddProduct]=useState(0);
    let [MyProduct,setMyProduct]=useState(0);
    let [CurrentOrder,setCurrentOrder]=useState(0);
    let [HistoryProduct,setHistoryProduct]=useState(0);

    
    function changeView(view:string){
        if(view=="addproduct"){setAddProduct(1);setMyProduct(0);setCurrentOrder(0);setHistoryProduct(0)}
        else if(view=="myproduct"){setAddProduct(0);setMyProduct(1);setCurrentOrder(0);setHistoryProduct(0)}
        else if(view=="currentorder"){setAddProduct(0);setMyProduct(0);setCurrentOrder(1);setHistoryProduct(0)}
        else if(view=="historyorder"){setAddProduct(0);setMyProduct(0);setCurrentOrder(0);setHistoryProduct(1)}
        else{alert(`set value out range`)}
    }


 return(
 <>
  <div className="h-screen w-full flex flex-row  ">
    <div className="h-full bg-red-100 w-8 hidden"></div>

    <div className="h-full  bg-slate-300 w-40 flex flex-col lg:w-56">
        <div className='w-full  h-16 flex justify-between items-center px-2 text-indigo-950 border-b-2 border-indigo-950 '>
            <div className='flex space-x-2  '>
                <p className=" text-3xl lg:text-4xl "><MdFactory/></p>
                <p className=" text-sm font-semibold pt-2   lg:text-lg">name user</p>
            </div>
            <div className="text-2xl pt-2 lg:text-4xl"><FaArrowAltCircleLeft/></div>
        </div>
        
        <div className='w-full flex-1 flex flex-col'>
           <div className="w-full h-12  flex justify-between items-center px-2 text-indigo-950 hover:bg-white hover:rounded-full" onClick={(e)=>{e.preventDefault();changeView(`addproduct`)}}><p className="text-3xl "><IoIosAddCircle /></p><p className=" text-sm lg:text-lg font-semibold">Add Product</p></div>
           <div className="w-full h-12  flex justify-between items-center px-2 text-indigo-950 hover:bg-white hover:rounded-full" onClick={(e)=>{e.preventDefault();changeView(`myproduct`)}}><p className="text-3xl "><FaProductHunt /></p><p className= " text-sm lg:text-lg font-semibold">My Products</p></div>
           <div className="w-full h-12  flex justify-between items-center px-2 text-indigo-950 hover:bg-white hover:rounded-full" onClick={(e)=>{e.preventDefault();changeView(`currentorder`)}}><p className="text-3xl "><MdRunningWithErrors /></p><p className=" text-sm lg:text-lg font-semibold">Cureent Orders</p></div>
           <div className="w-full h-12  flex justify-between items-center px-2 text-indigo-950 hover:bg-white hover:rounded-full" onClick={(e)=>{e.preventDefault();changeView(`historyorder`)}}><p className="text-3xl "><MdHistory /></p><p className=     " text-sm lg:text-lg font-semibold">History Orders</p></div>



        </div>
    </div>

    <div className="h-full  flex-1 bg-factory bg-cover opacity-80 px-1 py-1  lg:px-10 lg:pt-10">
        {AddProduct?<AddProductC/>:false}
        {MyProduct?<MyProductC/>:false}
        {CurrentOrder?<CurrentOrderC/>:false}
        {HistoryProduct?<HistoryOrderC/>:false}
    </div>

  </div>
 </>
 )
}

export default Factory;