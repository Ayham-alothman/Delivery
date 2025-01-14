import { useSelector } from "react-redux";
import { RootState } from "../../../state/initstate";

function AtFactoryOrder(){
    const factoryOrder=useSelector((s:RootState)=>s.orderDriverSlice.currentOrder.factoryRequest);
   
    
    return(
        <div className="h-full w-full overflow-y-scroll ">
         {factoryOrder.map((e:any)=>{let totalPrice=0;
            return (
                <div className="border-b-8 border-slate-900">
                    <p className="font-semibold text-yellow-900">id order:{e.idOrder}</p>
                    <p className="font-semibold text-yellow-900">name supermarket:{e.Supermarket.name}</p>
                    {e.products.map((e:any)=>{totalPrice=totalPrice+(Number(e.price)*Number(e.count))
                        return(
                            
                           <div>
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">id factory:{e.idFactory}</p>
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">id product:{e.idProduct}</p>
                             <div className="flex  justify-around">
                               
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">name:{e.name}</p>
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">price:{e.price}</p>
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">count:{e.count}</p>
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">category:{e.category}</p>
                                <p className="SmallText text-lg text-yellow-900 font-medium ">total price:{Number(e.price)*Number(e.count)}</p>

                            </div>
                           </div>
                        )
                    })}
                    <p className="text-yellow-900">total price order:{totalPrice}</p>
                </div>
            )
         })}

       </div>
    )
}

export default AtFactoryOrder;