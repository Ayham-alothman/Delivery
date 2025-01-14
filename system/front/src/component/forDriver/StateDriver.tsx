import { useState } from "react";
import Api from "../../utility/initApi";
import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";
import Sucsess from "../../utility/Notifaction/Scusess";

function StateDriver(){
  const [status, setStatus] = useState('on');
  const idDriver=useSelector((s:RootState)=>s.userSlice.idInfo);

  async function  handleChange  (e:any)  {
    setStatus(e.target.value); 
    let state;
    if(e.target.value=="on"){state=true}
    if(e.target.value=="off"){state=false};console.log(state)
    try{
      const res=await Api.post(`/driver/changestate`,{idDriver:idDriver,state:state});
      if(res.status==200){
        Sucsess(`the state change to ${state}`)
      }
    }
    catch(e){console.log(e)}

    
    
  }

  return (
    <div className="flex">
      <h3 className="LargeText text-yellow-700">Select Status:</h3>
      <div className="ml-5 mt-2">
      <label className="mr-5 text-yellow-700 text-lg">
        <input
          className="mr-1"
          type="radio"
          value="on"
          checked={status === 'on'}
          onChange={handleChange}
        />
        On
      </label>
      <label className="text-yellow-700 text-lg">
        <input
          type="radio"
          className="mr-1"
          value='off'
          checked={status === 'off'}
          onChange={handleChange}
        />
        Off
      </label>
      </div>
      
    </div>
  );
}

export default StateDriver;