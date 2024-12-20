import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcOk } from "react-icons/fc";

function OrderAprovalSupermarketDrive(prop:any){
    interface product {
        idProduct:string,
        nameProduct:string,
        priceUnit:string,
        qunt:string,
        aproval?:boolean
    }


    let [UpdateProduct,setUpdateProduct]=useState<product[]>([]);
    let [TotalOrder,setTotalOrder]=useState(0);


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
                   AllPrice += Number(e.priceUnit) * Number(e.qunt);
               }
           });
           setTotalOrder(AllPrice);
       }, [UpdateProduct]);

       
    return(
        <>
        </>
    )
}
export default OrderAprovalSupermarketDrive;