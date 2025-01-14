
import { Navigate,Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/initstate";

function ProtectRoute(){
    const Login=useSelector((s:RootState)=>s.userSlice.isLogin);
    if(Login){return <Outlet/>}
    else{return <Navigate to={`/login`}/>}    
}

export default ProtectRoute;