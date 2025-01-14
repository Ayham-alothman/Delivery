import { RootState } from "../../state/initstate";
import { useSelector } from "react-redux";

function HistoryOrder(){
    let hisOrder =useSelector((s:RootState)=>s.orderSlice.hisOrder);
    let allP=0
    
    return(
       <div className="h-full w-full overflow-y-scroll ">
         {hisOrder.map((e:any)=>{
            return (
                <div className="border-b-8 border-slate-900">
                    <p className="font-semibold text-slate-900">id order:{e.idOrder}</p>
                    <p className="font-semibold text-slate-900">Driver:{e.Driver.name}</p>
                    {
                    e.products.map((e:any)=>{allP=allP+(e.price*e.count);
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
                    <p className="font-semibold text-slate-900">complete price order:{allP}</p>
                </div>
            )
         })}

       </div>
    )
}

export default HistoryOrder;