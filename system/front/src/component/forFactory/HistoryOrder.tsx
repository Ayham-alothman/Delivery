import { UseSelector } from "react-redux";
import { RootState } from "../../state/initstate";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function HistoryOrder(){
    let waitOrder =useSelector((s:RootState)=>s.orderSlice.hisOrder);
    
    return(
       <div className="h-full w-full overflow-y-scroll ">
         {waitOrder.map((e,i)=>{
            return (
                <div className="border-b-8 border-slate-900">
                    <p className="font-semibold text-slate-900">id order:{e.id}</p>
                    <p className="font-semibold text-slate-900">Driver:{e.driver.name}</p>
                    {e.products.map((e,i)=>{
                        return(
                            <div className="flex justify-around">
                                <p className="SmallText text-lg text-slate-900 border-r">id:{e.id}</p>
                                <p className="SmallText text-lg text-slate-900 border-r">name:{e.name}</p>
                                <p className="SmallText text-lg text-slate-900 border-r">price:{e.price}</p>
                                <p className="SmallText text-lg text-slate-900 border-r">quntity:{e.qunt}</p>
                                <p className="SmallText text-lg text-slate-900">total price:{Number(e.price)*Number(e.qunt)}</p>

                            </div>
                        )
                    })}
                    <p className="font-semibold text-slate-900">complete price order:</p>
                </div>
            )
         })}

       </div>
    )
}

export default HistoryOrder;