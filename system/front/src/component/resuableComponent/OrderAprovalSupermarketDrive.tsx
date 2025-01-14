import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcOk } from "react-icons/fc";

import Api from "../../utility/initApi";

import Sucsess from "../../utility/Notifaction/Scusess";
import msgErorr from "../../utility/Notifaction/Erorr";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../state/initstate";
import { FilterOrder } from "../../utility/FilterOrder";

import { setOrderSuper } from "../../state/slices/orderSliceSupemarket";




function OrderAprovalSupermarketDrive(prop:any){

    const dispatch=useDispatch();
  
    interface product {
        idProduct:string,
        name:string,
        price:string,
        count:string,
        idFactory:string,
        aproval?:boolean
    }


    let [UpdateProduct,setUpdateProduct]=useState<product[]>([]);
    let [TotalOrder,setTotalOrder]=useState(0)
    
    useEffect(()=>{
     let newPro=prop.products.map((e:any)=>{
        return {...e,aproval:false}
     })
     setUpdateProduct(newPro);
     
    
     
    },[])

    useEffect(() => {
        let AllPrice = 0;
        UpdateProduct.forEach((e) => {
            if (e.aproval == false) {
                AllPrice += Number(e.price) * Number(e.count);
            }
        });
        setTotalOrder(AllPrice);
    }, [UpdateProduct]); // Correct dependency



    function changeAproval(index:number,bool:boolean){
        let newProducts:product[]=UpdateProduct.map((e:product,i:number)=>{
            if(i==index){e.aproval=bool;return e}
            else{return e}
        })
        setUpdateProduct(newProducts);
    }

    const handleQuantityChange = (index: number, qunt:string) => {
        let newProducts:product[]=UpdateProduct.map((e:product,i:number)=>{
            if(i==index){e.count=qunt;return e}
            else{return e}
        })
        setUpdateProduct(newProducts)
    };
    const idS=useSelector((s:RootState)=>s.userSlice.idInfo)

    async function SendAprovalRequest(){
        try{
            let SenderProducts=UpdateProduct.filter((e:product)=>{
                if(e.aproval==false){
                    delete e.aproval;
                    return e;
                }
                
            })
            const ress=await Api.post('/supermarket/aprovalrequest',{
                idDriver:prop.driver.id,
                idSupermarket:idS,
                idOrder:prop.idOrder,
                products:SenderProducts
            })
            if(ress.status==200){
                const res=await Api.post(`/supermarket/getorder`,{idSupermarket:idS});
                if(res.status==200){
                    let {waitOrder,aprovalOrder,historyOrder}=res.data;
                    waitOrder=FilterOrder(waitOrder);
                    aprovalOrder=FilterOrder(aprovalOrder);
                    historyOrder=FilterOrder(historyOrder);console.log(waitOrder,aprovalOrder,historyOrder)
                    dispatch(setOrderSuper({waitOrder:waitOrder,aprovalOrder:aprovalOrder,historyOrder:historyOrder}));
                    Sucsess(`the request done you can review to you order`);
                }
               
            }
        }
        catch(e:any){
            if(e instanceof Error){
                msgErorr(e.message)
            }
            else{
                msgErorr(e)
            }
        }

    }
       
    return(
        <div className="border-b-8 border-slate-800  px-2 h-auto space-y-1">
        <p className="MeduimText text-yellow-900">id order: {prop.idOrder}</p>
        <p className="MeduimText text-yellow-900">driver:{prop.driver.name}</p> 
        <p className="MeduimText text-yellow-900">Products:</p> 
        <div className="h-auto  px-2 ">
            {UpdateProduct.map((e:product,i)=>{return(
                <div className="flex flex-col lg:flex-row  text-lg text-yellow-900 font-semibold justify-around">
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
            <button onClick={()=>{SendAprovalRequest()}} className="bg-green-400 text-white px-2 py-2 rounded-lg">Edit Order</button>
            <p className="text-lg text-yellow-900 font-bold">Total Price Order:{TotalOrder}</p>
            <button className="bg-green-700 text-white px-2 py-2 rounded-lg">Complete Order</button>
        </div>
      </div>
    )
}
export default OrderAprovalSupermarketDrive;