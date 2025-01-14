import { useSelector } from "react-redux";
import { RootState } from "../../../state/initstate";
import OrderAprovalFactoryDriver from "../../resuableComponent/OrderAprovalFactoryDriver";

function AprovalFactoryOrder(){
    const AprovalOrder=useSelector((s:RootState)=>s.orderDriverSlice.currentOrder.factoryAprofal);

    
        return(
        <div className="w-full h-full flex flex-col overflow-y-scroll ">  
          {AprovalOrder.map((e:any)=>{
            return (
            <>
            <OrderAprovalFactoryDriver idOrder={e.idOrder} factory={e.Supermarket} products={e.products} />
            </>
            )
            })}
        </div>
    )
    
}

export default AprovalFactoryOrder;