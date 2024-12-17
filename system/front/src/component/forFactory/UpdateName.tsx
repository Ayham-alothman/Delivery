
import { MdCancel } from "react-icons/md";
import Input from "../subcomponent/Input";


function UpdateName(){
    return(
    <div className="h-full w-full flex flex-col px-2 py-1">
        <div className="h-8 flex justify-end text-3xl "><MdCancel /></div>
        <div className="flex-1 flex flex-col">
            
            <div className="flex-1">
                <p className="SmallText">Current name</p>
                <div className="w-full"><Input placeholder="small char"/></div>
            </div>

            <div className="flex-1">
                <p className="SmallText">New name</p>
                <div className="w-full"><Input placeholder="small char"/></div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <button className="LargeButton">Update name</button>
            </div>

        </div>

    </div>
    )
}
export default UpdateName;