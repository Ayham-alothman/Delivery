import { useSelector } from "react-redux";
import { RootState } from "../../../state/initstate";

import OrderSendSupermarketDriver from "../../resuableComponent/OrderSendSupermarketDriver";

function AprovalOrder(){
    let HistoryOrder=useSelector((s:RootState)=>s.orderSupermarketSlice.historyOrder )
    
    return(
        <div className="w-full h-full flex flex-col overflow-y-scroll ">  
          {HistoryOrder.map((e,i)=>{
            return (
            <>
             <OrderSendSupermarketDriver idOrder={e.idOrder} driver={e.driver} products={e.products}/>
            </>
            )
            })}
        </div>
    )
}

export default AprovalOrder;