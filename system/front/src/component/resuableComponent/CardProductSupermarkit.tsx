import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewProduct } from "../../state/slices/bascketSupermarket";

import imgCard from '../../assets/images/card.jpg';


function CardProductSupermarkit(prop:any){
   const dispatch=useDispatch();
    let [CountPro,setCountPro]=useState("");

    function AddtoBascket(){ 
        if (CountPro!="") {
            // Create a new product object
            const newProduct = {
                id: prop.e.id, // Replace with actual ID
                name: prop.e.name, // Replace with actual name
                price: prop.e.price, // Assuming CountPro is the price
                count: CountPro
            };
            
            // Dispatch the action to add the new product
            dispatch(setNewProduct(newProduct));
            setCountPro("")
        }
        else{
            alert("set count")
        }
    }
    return(
    <div className="flex flex-col w-72 h-96 mx-2 ">
        <div className="w-full h-1/2"><img src={imgCard} className="w-full h-full object-contain "></img></div>
        <p className="flex-1 SmallText pl-4">name:{prop.e.name}</p>
        <p className="flex-1 SmallText pl-4">price:{prop.e.price}</p>
        <p className="flex-1 SmallText pl-4">number of unit:{prop.e.numberOfUnit}</p>
        <p className="flex-1 SmallText pl-4">category:{prop.e.category}</p>
        <input className="h-8 pl-2 rounded border-2 border-black mb-1" placeholder="number of count you need ?" value={CountPro} onChange={(e)=>{setCountPro(e.target.value)}}></input>
        <button className="h-10 bg-red-600 text-white" onClick={()=>{AddtoBascket()}}>Add to bascket</button>
    </div>
    )
}

export default CardProductSupermarkit