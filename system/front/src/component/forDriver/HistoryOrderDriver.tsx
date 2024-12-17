import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";

function HistoryOrderDriver(){

    useSelector((s:RootState)=>s.orderSlice.hisOrder)

    return(
        
         <div>

         </div>
        
    )
}

export default HistoryOrderDriver;