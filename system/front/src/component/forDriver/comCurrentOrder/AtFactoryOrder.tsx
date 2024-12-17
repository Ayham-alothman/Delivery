import { useSelector } from "react-redux";
import { RootState } from "../../../state/initstate";

function AtFactoryOrder(){
    const factoryOrder=useSelector((s:RootState)=>s.orderDriverSlice.currentOrder.factoryRequest);
   
    
    return(
        <div className="h-full w-full overflow-y-scroll ">
         {factoryOrder.map((e,i)=>{let totalPrice=0;
            return (
                <div className="border-b-8 border-slate-900">
                    <p className="font-semibold text-yellow-900">id order:{e.idOrder}</p>
                    <p className="font-semibold text-yellow-900">name factory:{e.factory.name}</p>
                    {e.products.map((e,i)=>{totalPrice=totalPrice+(Number(e.priceUnit)*Number(e.qunt))
                        return(
                            <div className="flex justify-around">
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">id product:{e.idProduct}</p>
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">name:{e.nameProduct}</p>
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">price:{e.priceUnit}</p>
                                <p className="SmallText text-lg text-yellow-900 font-medium  border-r">quntity:{e.qunt}</p>
                                <p className="SmallText text-lg text-yellow-900 font-medium ">total price:{Number(e.priceUnit)*Number(e.qunt)}</p>

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