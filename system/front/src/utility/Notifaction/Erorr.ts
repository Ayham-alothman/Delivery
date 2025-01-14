import {  toast } from 'react-toastify';

function Erorr(message:string){
    toast.error(`${message}`, {
        position: "bottom-left",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    
    
}

export default Erorr