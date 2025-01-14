import { useSelector } from "react-redux";
import { RootState } from "../../../state/initstate";

import OrderAprovalSupermarketDrive from "../../resuableComponent/OrderAprovalSupermarketDrive";

function AprovalOrder(){
    let aprovalOrder=useSelector((s:RootState)=>s.orderSupermarketSlice.curOrder.aprovalOrder )
    
    return(
        <div className="w-full h-full flex flex-col overflow-y-scroll ">  
          {aprovalOrder.map((e:any)=>{
            return (
            <>
             <OrderAprovalSupermarketDrive idOrder={e.idOrder} driver={e.Driver} products={e.products}/>
            </>
            )
            })}
        </div>
    )
}

export default AprovalOrder;