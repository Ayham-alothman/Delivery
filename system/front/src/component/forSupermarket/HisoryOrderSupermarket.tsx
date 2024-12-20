import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";

function HisoryOrderSupermarket(){
  const HistoryOrder=useSelector((s:RootState)=>s.orderSupermarketSlice.historyOrder)
  return(
    <div className="h-full w-full overflow-y-scroll ">
      {HistoryOrder.map((e,i)=>{let tot=0;
         return (
             <div className="border-b-8 border-slate-900">
                 <p className="font-semibold text-slate-900">id order:{e.idOrder}</p>
                 <p className="font-semibold text-slate-900">Driver:{e.driver.name}</p>
                 {e.products.map((e,i)=>{tot=tot+(Number(e.price)*Number(e.count))
                     return(
                         <div className="flex justify-around">
                             <p className="SmallText text-lg text-slate-900 border-r">id:{e.idProduct}</p>
                             <p className="SmallText text-lg text-slate-900 border-r">name:{e.name}</p>
                             <p className="SmallText text-lg text-slate-900 border-r">price:{e.price}</p>
                             <p className="SmallText text-lg text-slate-900 border-r">count:{e.count}</p>
                             <p className="SmallText text-lg text-slate-900">total price:{Number(e.price)*Number(e.count)}</p>

                         </div>
                     )
                 })}
                 <p className="font-semibold text-slate-900">complete price order:{tot}</p>
             </div>
         )
      })}

    </div>
 )
}

export default HisoryOrderSupermarket;