import {  toast } from 'react-toastify';

function Sucsess(message:string){
    toast.success(`${message}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

export default Sucsess;















