import OrderSendSupermarketDriver from "../../resuableComponent/OrderSendSupermarketDriver";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/initstate";

function SendSupermarketOrder(){
    const OrderSupermarket=useSelector((s:RootState)=>s.orderDriverSlice.currentOrder.supermarkrtSendRequest)
    
    return(
        <div className="w-full h-full flex flex-col overflow-y-scroll ">  
          {OrderSupermarket.map((e,i)=>{
            return (
            <>
            <OrderSendSupermarketDriver idOrder={e.idOrder} supermarket={e.supermarket} products={e.products} />
            </>
            )
            })}
        </div>
    )
}

export default SendSupermarketOrder;