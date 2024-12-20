import { useEffect, useState } from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";

import Bascket from "../subcomponent/Bascket";
import CardProductSupermarkit from "../resuableComponent/CardProductSupermarkit";

function TakeOrder(){
    interface product{
        id:string,
        name:string,
        price:string,
        numberOfUnit:number,
        category:string
    }
    const pro=useSelector((s:RootState)=>s.productSliceSupermarkit.products);
    const Basket=useSelector((s:RootState)=>s.bascket.products)


    let [Category,setCategory]=useState('');
    let [Products,setProducts]=useState<product[]>([...pro]);
    let [BasketS,setBasketS]=useState(Basket.length)


    function handelCategory(){

    }
    

    return(
        <div className="flex flex-col h-full ">
            <div className=" h-12  flex justify-between items-center px-3    ">
                <input placeholder="what you need ? " className="h-8 rounded-full SmallText pl-2 border border-gray-400"></input>
                <div className="flex space-x-1">
                    <p className="SmallText">set category</p>
                    <select className="w-12" value={Category} onChange={(e)=>{console.log(e.target.value,Category)}}>
                    <option></option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
                </div>
                <Bascket/>
            </div>

            <div className=" flex-1 overflow-y-scroll flex flex-wrap ">
                {
                    Products.map((e:product,i:number)=>{
                        return(
                         <CardProductSupermarkit e={e}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TakeOrder;