import { useState } from 'react';
import imgCard from '../../assets/images/card.jpg';

import { MdCancel } from "react-icons/md";
import Input from '../subcomponent/Input';

function Card(props:any){

    let [UpdateName,setUpdateNam]=useState(0);
    let [UpdatePrice,setUpdatePrice]=useState(0);
    let [UpdateUnit,setUpdateUnit]=useState(0);


    return(
        <div className=" relative flex flex-col border border-black space-y-1 bg-gray-300 w-60 h-96 rounded-xl py-1 mx-4 my-2">
            <div className='w-full h-2/5'><img src={imgCard}  className=' object-contain'></img></div>
           
            <div className='flex-1 flex justify-between px-2 '>
              <p className='MeduimText text-slate-950'>Name:{props.name}</p>
              <button className='SmallButton' onClick={(e)=>{e.preventDefault();setUpdateNam(1)}}>Update</button>
            </div>

            <div className='flex-1 flex justify-between px-2'>
              <p className='MeduimText text-slate-950'>Price:{props.price}</p>
              <button className='SmallButton' onClick={(e)=>{e.preventDefault();setUpdatePrice(1)}}>Update</button>
            </div>

            <div className='flex-1 flex justify-between px-2'>
              <p className='MeduimText text-slate-950'>Unit:{props.unit}</p>
              <button className='SmallButton' onClick={(e)=>{e.preventDefault();setUpdateUnit(1)}}>Update</button>
            </div>

            <div className='flex-1 flex justify-between px-2'>
              <p className='MeduimText text-slate-950'>Category:{props.unit}</p>
              <button className='SmallButton'>Update</button>
            </div>

            <div className='flex-1 flex justify-center items-center '>
                <button className='LargeButton'>Delete product</button>
            </div>
            

            <div className={UpdateName?' absolute top-0 left-0 h-full w-full bg-gray-200':`hidden`}>
            <div className="h-full w-full flex flex-col px-2 py-1">
                 <div className="h-8 flex justify-end text-3xl " onClick={(e)=>{e.preventDefault();setUpdateNam(0)}}><MdCancel /></div>
                 <div className="flex-1 flex flex-col">
                     
                     <div className="flex-1">
                         <p className="SmallText">Current name</p>
                         <div className="w-full"><Input placeholder="small char"/></div>
                     </div>
         
                     <div className="flex-1">
                         <p className="SmallText">New name</p>
                         <div className="w-full"><Input placeholder="small char"/></div>
                     </div>
         
                     <div className="flex-1 flex justify-center items-center">
                         <button className="LargeButton">Update name</button>
                     </div>

                </div>

            </div>
            </div>
            
            <div className={UpdatePrice?' absolute top-0 left-0 h-full w-full bg-gray-200':`hidden`}>
              
                 <div className="h-full w-full flex flex-col px-2 py-1">
                    <div className="h-8 flex justify-end text-3xl " onClick={(e)=>{e.preventDefault();setUpdatePrice(0)}}><MdCancel /></div>
                    <div className="flex-1 flex flex-col">
                        
                        <div className="flex-1">
                            <p className="SmallText">Current price</p>
                            <div className="w-full"><Input placeholder="only number "/></div>
                        </div>
            
                        <div className="flex-1">
                            <p className="SmallText">New price</p>
                            <div className="w-full"><Input placeholder="only number"/></div>
                        </div>
            
                        <div className="flex-1 flex justify-center items-center">
                            <button className="LargeButton">Update price</button>
                        </div>
   
                   </div>
   
               </div>
              
            </div>
            
            <div className={UpdateUnit?' absolute top-0 left-0 h-full w-full bg-gray-200':`hidden`}>
              

                 <div className="h-full w-full flex flex-col px-2 py-1">
                       <div className="h-8 flex justify-end text-3xl " onClick={(e)=>{e.preventDefault();setUpdateUnit(0)}}><MdCancel /></div>
                       <div className="flex-1 flex flex-col">
                           
                           <div className="flex-1">
                               <p className="SmallText">Current unit</p>
                               <div className="w-full"><Input placeholder="only number "/></div>
                           </div>
               
                           <div className="flex-1">
                               <p className="SmallText">New unit</p>
                               <div className="w-full"><Input placeholder="only number"/></div>
                           </div>
               
                           <div className="flex-1 flex justify-center items-center">
                               <button className="LargeButton">Update price</button>
                           </div>
      
                      </div>
      
                  </div>

              

            </div>
        </div>
    )
}

export default Card;
