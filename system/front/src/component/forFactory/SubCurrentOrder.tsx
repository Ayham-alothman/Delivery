
import Order from "../resuableComponent/CurOrder";
import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";

function SubCurrentOrder(){
  let receiveOrder=useSelector((s:RootState)=>s.orderSlice.curOrder.receiveOrder);
    return(
        <div className="w-full h-full flex flex-col overflow-y-scroll ">  
          {receiveOrder.map((e:any)=>{
            return (
            <>
             <Order id={e.idOrder} driver={e.Driver} products={e.products} />
            </>
            )
            })}
        </div>
    )
}

export default SubCurrentOrder;