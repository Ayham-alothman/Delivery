import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useState } from "react";
import AddDriver from "../component/forDashbored/AddDriver";
import AddFactory from "../component/forDashbored/AddFactory";
import AddSubermarket from "../component/forDashbored/AddSubermarket";
import DeleteStuff from "../component/forDashbored/DeleteStuff";


function Dashbored(){
    let [Nav1,setNav1]=useState(0);
    let [Nav2,setNav2]=useState(1);
    let [Driver,SetDriver]=useState(0);
    let [Factory,SetFactory]=useState(0);
    let [Supermarket,SetSubermarket]=useState(0);
    let [Deletestuff,SetDeletestuff]=useState(0);

    function changeNav(N:number){
      if(N==1){setNav1(1);setNav2(0)}
      else if(N==2){setNav1(0);setNav2(1)}
    }
    
    function changeContent(str:string){
      if(str=='Driver'){SetDriver(1);SetFactory(0);SetSubermarket(0);SetDeletestuff(0);}
      else if(str=='Factory'){SetDriver(0);SetFactory(1);SetSubermarket(0);SetDeletestuff(0);}  
      else if(str=='Supermarket'){SetDriver(0);SetFactory(0);SetSubermarket(1);SetDeletestuff(0);}
      else if(str=='Delete'){SetDriver(0);SetFactory(0);SetSubermarket(0);SetDeletestuff(1);}
    } 
   
    return(
    <>
      <div className=" h-screen flex">
        
        <div className={Nav1?` w-1/12 bg-gray-300 h-full flex justify-center`:`hidden`}>
          <div className=" text-gray-400 text-4xl mt-5" onClick={()=>{changeNav(2)}}><FaArrowCircleRight /></div>
        </div>

        <div className={Nav2?" w-1/6 bg-gray-200 h-full flex flex-col":`hidden`}>
           <div className="w-full h-16 flex justify-between items-center px-3 ">
            <div className="flex space-x-1 ">
              <p className="text-xl text-blue-700"><FaUser /></p>
              <p className="text-xl text-blue-700">name user</p>
            </div>
            <div className="text-4xl text-blue-700" onClick={()=>{changeNav(1)}}><FaArrowAltCircleLeft /></div>
           </div>
           
           <div className="h-full w-full flex flex-col border-t  border-black">
            <div className=" w-full h-12 flex justify-between px-3 items-center text-blue-700 hover:bg-white hover:rounded-3xl" onClick={()=>{changeContent("Factory")}}><p className="text-3xl"><MdFactory /></p> <p className="font-light">Add Factory</p></div>
            <div className=" w-full h-12 flex justify-between px-3 items-center text-blue-700 hover:bg-white hover:rounded-3xl" onClick={()=>{changeContent("Supermarket")}}><p className="text-3xl"><MdLocalGroceryStore /></p> <p className="font-light">Add Supermarket</p></div>
            <div className=" w-full h-12 flex justify-between px-3 items-center text-blue-700 hover:bg-white hover:rounded-3xl" onClick={()=>{changeContent("Driver")}}><p className="text-3xl"><FaCar /></p> <p className="font-light">Add Driver</p></div>
            <div className=" w-full h-12 flex justify-between px-3 items-center text-blue-700 hover:bg-white hover:rounded-3xl" onClick={()=>{changeContent("Delete")}}><p className="text-3xl"><RiDeleteBack2Fill /></p> <p className="font-light">Delete Stuff</p></div>



           </div>
        </div>

        <div className="flex-1  h-full py-10 px-10">
          {Factory? <AddFactory/> :false}
          {Supermarket? <AddSubermarket/> :false}
          {Driver? <AddDriver/> :false}
          {Deletestuff? <DeleteStuff/> :false}
        </div>
      </div>
    </>
    )
}


export default Dashbored;