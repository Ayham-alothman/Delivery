import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { FcOk } from "react-icons/fc";

import Sucsess from "../../utility/Notifaction/Scusess";
import msgErorr from "../../utility/Notifaction/Erorr";

import Api from "../../utility/initApi";
import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";

import { FilterOrder } from "../../utility/FilterOrder";
import { setOrderFactory } from "../../state/slices/orderSlice";
import { useDispatch } from "react-redux";


interface product{
    id:number,
    name:string,
    price:string,
    count:string,
    aproval?:boolean
}
function CurOrder(prop:any){

    const dispatch=useDispatch();

    const idFactory=useSelector((s:RootState)=>s.userSlice.idInfo);
    let [products,setProducts]=useState<product[]>([])

    useEffect(()=>{
       
        let updatenewproducts=prop.products.map((e:any)=>{
            return {...e,aproval:false}
        })
       
        setProducts(updatenewproducts);
    },[])

    const handleQuantityChange = (index: number, qunt:string) => {
        let newProducts:product[]=products.map((e:product,i:number)=>{
            if(i==index){e.count=qunt;return e}
            else{return e}
        })
        setProducts(newProducts)
    };

    function changeAproval(index:number,bool:boolean){console.log(index,bool)
        let newProducts:product[]=products.map((e:product,i:number)=>{
            if(i==index){e.aproval=bool;return e}
            else{return e}
        })
        setProducts(newProducts)
    }

    async function EditOrder(){
           try{
            let newProduct = products.filter((e: product) => {
                if (e.aproval === false) {
                    delete e.aproval;
                    return e
                }
                
            });

            const ress=await Api.post('/factory/sendrequest',
            {idDriver:prop.driver.idDriver,idOrder:prop.id,products:newProduct});
             if(ress.status==200){
               Sucsess(`done send request`);
                const res=await Api.post(`/factory/getorder`,{idFactory:idFactory});
                let {requestOrder,waitOrder,historyOrder}=res.data;
                requestOrder=FilterOrder(requestOrder);
                waitOrder=FilterOrder(waitOrder);
                historyOrder=FilterOrder(historyOrder);

                dispatch(setOrderFactory({receiveOrder:requestOrder,waitOrder:waitOrder,hisOrder:historyOrder}));
               
             }
             else{
                msgErorr(`there miss data`);
             }
           }
           catch(e){console.log(e)}

    }


    return(
        <div className="border-b-8 border-slate-800 bg-white px-2 h-auto space-y-1">
            <p className="MeduimText">id order: {prop.id}</p>
            <p className="MeduimText">Driver:{prop.driver.nameDriver}</p> 
            <p className="MeduimText">Products:</p> 
            <div className="h-auto  px-2 ">
                {products.map((e:product,i:number)=>{return(
                    <div className="flex flex-col lg:flex-row  text-lg text-slate-950 font-semibold justify-around">
                        {e.aproval?<s>name:{e.name}</s>:<p>name:{e.name}</p>}
                        {e.aproval?<s>price one unit:{e.price} </s>:<p>price one unit:{e.price} </p>}
                        <div className="flex space-x-1">
                            <div>quantity:</div>
                            <input type="text" className="w-10 border-2 border-red-300"  value={e.count} onChange={(e)=>{e.preventDefault(); handleQuantityChange(i,e.target.value)}} readOnly={e.aproval}></input>
                        </div>
                        {e.aproval?<s>total:{Number(e.price)*Number(e.count)}</s>:<p>total:{Number(e.price)*Number(e.count)}</p>}
                        {e.aproval?<p className=" text-4xl text-red-600"><AiFillCloseCircle  onClick={()=>{changeAproval(i,false)}}/></p>: <p className="text-4xl"><FcOk onClick={()=>{changeAproval(i,true)}} /></p>}
                    </div>
                )})}
            </div>
            <div className="flex justify-around py-5">
                <button onClick={()=>{EditOrder()}} className="bg-green-400 text-white px-2 py-2 rounded-lg">Edit Order</button>
                <button onClick={()=>{}} className="bg-green-700 text-white px-2 py-2 rounded-lg">Complete Order</button>
            </div>
        </div>
    )
}

export default CurOrder;