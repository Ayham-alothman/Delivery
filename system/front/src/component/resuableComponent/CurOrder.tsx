import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { FcOk } from "react-icons/fc";

interface product{
    id:number,
    name:string,
    price:string,
    qunt:string,
    aproval?:boolean
}
function CurOrder(prop:any){
    
    
    
    let [products,setProducts]=useState<product[]>([])

    useEffect(()=>{
       
        let updatenewproducts=prop.products.map((e:any)=>{
            return {...e,aproval:false}
        })
       
        setProducts(updatenewproducts);
    },[])

    const handleQuantityChange = (index: number, qunt:string) => {
        let newProducts:product[]=products.map((e:product,i:number)=>{
            if(i==index){e.qunt=qunt;return e}
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

    function EditOrder(){
        let aproProduct: product[] = [];
            let newProduct: product[] = products.filter((e: product) => {
            if (e.aproval === true) {
                aproProduct.push(e);
            }
            else{return e}
        });
        
        if(newProduct.length==0){
            //delete order
        }
        else if(newProduct.length!=0){setProducts(newProduct);}
   
        if(aproProduct.length>0){
            //add to wating (idorder,name driver,product)
        }

    }


    return(
        <div className="border-b-8 border-slate-800 bg-white px-2 h-auto space-y-1">
            <p className="MeduimText">id order: {prop.id}</p>
            <p className="MeduimText">Driver:{prop.driver}</p> 
            <p className="MeduimText">Products:</p> 
            <div className="h-auto  px-2 ">
                {products.map((e:product,i:number)=>{return(
                    <div className="flex flex-col lg:flex-row  text-lg text-slate-950 font-semibold justify-around">
                        {e.aproval?<s>name:{e.name}</s>:<p>name:{e.name}</p>}
                        {e.aproval?<s>price one unit:{e.price} </s>:<p>price one unit:{e.price} </p>}
                        <div className="flex space-x-1">
                            <div>quantity:</div>
                            <input type="text" className="w-10 border-2 border-red-300"  value={e.qunt} onChange={(e)=>{e.preventDefault(); handleQuantityChange(i,e.target.value)}} readOnly={e.aproval}></input>
                        </div>
                        {e.aproval?<s>total:{Number(e.price)*Number(e.qunt)}</s>:<p>total:{Number(e.price)*Number(e.qunt)}</p>}
                        {e.aproval?<p className=" text-4xl text-red-600"><AiFillCloseCircle  onClick={()=>{changeAproval(i,false)}}/></p>: <p className="text-4xl"><FcOk onClick={()=>{changeAproval(i,true)}} /></p>}
                    </div>
                )})}
            </div>
            <div className="flex justify-around py-5">
                <button className="bg-green-400 text-white px-2 py-2 rounded-lg">Edit Order</button>
                <button className="bg-green-700 text-white px-2 py-2 rounded-lg">Complete Order</button>
            </div>
        </div>
    )
}

export default CurOrder;