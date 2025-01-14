import React, { useState } from 'react';

import Sucsess from '../../utility/Notifaction/Scusess';
import msgErorr from '../../utility/Notifaction/Erorr';
import Api from '../../utility/initApi';

function AddSubermarket(){
  const [supermarketName, setSupermarketName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  async function handleSubmit(){
    try{
        const res=await Api.post(`/signup/supermarket`,{username:supermarketName,password:password,email:email});
        if(res.status==200){
            setSupermarketName('');
            setEmail('');
            setPassword('');
            Sucsess(`the registration driver done`)
        }
    }
    catch(e:any){msgErorr(e)}
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign up for Supermarket</h1>
        
          <div className="mb-4">
            <label htmlFor="supermarketName" className="block text-sm font-medium text-gray-700">Supermarket Name:</label>
            <input
              type="text"
              id="supermarketName"
              value={supermarketName}
              onChange={(e) => setSupermarketName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            onClick={()=>{handleSubmit()}}
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        
      </div>
    </div>
  );
};

export default AddSubermarket;
