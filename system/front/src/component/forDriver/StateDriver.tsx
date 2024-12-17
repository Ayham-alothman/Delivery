import { useState } from "react";

function StateDriver(){
    const [status, setStatus] = useState('off');

  const handleChange = (event:any) => {
    setStatus(event.target.value);
  };

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
          value="off"
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