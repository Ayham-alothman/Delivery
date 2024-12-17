import Car from '../assets/images/car.png';
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Login(){

    const gray=1;
    return(
    <>
     <div className=" h-screen  flex flex-col justify-end items-center">
        <div className=" h-4/5 w-4/5 bg-white flex flex-col">
            <div className=" basis-1/5  flex flex-col items-center justify-center">
                <div><img src={Car}></img></div>
                <h1 className=' font-semibold'>Log into your account</h1>
            </div>
            
            <div className=" basis-3/5  flex">
                <div className='h-full bg-white w-full flex flex-col '>
                    <div className='w-full flex-1 pl-5 border-b-2 flex flex-col justify-center'>
                        <p className=' font-thin text-sm'>EMAIL ADDRESS</p>
                        <input type="text" placeholder='name@example.com' className=' w-full h-10 font-thin border-0 pl-2' />
                    </div>

                    <div className='flex-1 pl-5 flex flex-col justify-center'>
                         <p className='font-thin text-sm'>Password</p>
                        <input type="password" placeholder='Password' className=' w-full h-10 font-thin border-0 pl-2' />      
                    </div>

                    <div className='flex-1 flex  items-center '>
                        <div className="h-2/5 w-2/3 bg-black rounded-lg text-white ml-5 flex justify-center items-center"   >Login</div>
                    </div>
                </div>

                <div className=' border-l-2 border-gray-500 h-full  w-full flex flex-col justify-center items-center space-y-3'>
                    <div className=' border-2 border-black rounded-xl h-12 w-2/3 flex justify-around items-center'>
                        <div className=' text-3xl'><FaApple/></div>
                        <p className=' font-semibold'>Continue with Apple</p>
                    </div>
                    <div className=' border-2 border-black rounded-xl h-12 w-2/3 flex justify-around items-center'>
                    <div className=' text-2xl text-blue-700'><FaFacebook /></div>
                        <p className=' font-semibold'>Continue with Facebook</p>
                    </div>
                    <div className=' border-2 border-black rounded-xl h-12 w-2/3 flex justify-around items-center'>
                    <div className=' text-2xl text-red-600'><FaGoogle /></div>
                        <p className=' font-semibold'>Continue with Google</p>
                    </div>
                </div>
            </div>

            <div className="basis-1/5  flex flex-col items-center justify-center ">
                
                <h1 className=' font-semibold' >CAN T LOG IN?</h1>
                <p className=' font-thin'>Secure Login with reCAPTCHA subject to Google
                 Terms & Privacy</p>
                
            </div>
        </div>
     </div>
    </>
    )
}

export default Login;