import { RootState } from "../../state/initstate";
import { useSelector } from "react-redux";

function WaitingAproval(){

   let waitOrder =useSelector((s:RootState)=>s.orderSlice.curOrder.waitOrder);
    
    return(
       <div className="h-full w-full overflow-y-scroll ">
         {waitOrder.map((e:any)=>{
            return (
                <div className="border-b-8 border-slate-900">
                    <p className="font-semibold text-slate-900">id order:{e.idOrder}</p>
                    <p className="font-semibold text-slate-900">Driver:{e.Driver.name}</p>
                    {e.products.map((e:any)=>{
                        return(
                            <div className="flex justify-around">
                                <p className="SmallText text-lg text-slate-900 border-r">id:{e.idProduct}</p>
                                <p className="SmallText text-lg text-slate-900 border-r">name:{e.name}</p>
                                <p className="SmallText text-lg text-slate-900 border-r">price:{e.price}</p>
                                <p className="SmallText text-lg text-slate-900 border-r">quntity:{e.count}</p>
                                <p className="SmallText text-lg text-slate-900">total price:{Number(e.price)*Number(e.count)}</p>

                            </div>
                        )
                    })}
                </div>
            )
         })}

       </div>
    )
}

export default WaitingAproval;