import { createSlice } from "@reduxjs/toolkit";

const orderSlice=createSlice({
    name:'order',
    initialState:{
        curOrder:{
            receiveOrder:[
                {id:1,driver:"ahmad",products:[{name:'pro1',price:20,qunt:5}]},
                {id:2,driver:"samer",products:[{name:'pro2',price:20,qunt:10},{name:'pro10',price:10,qunt:2}]}
            ],
            waitOrder:[
                {id:1,driver:{id:"1",name:"abo rateb"},products:[{id:'122',name:'pro1',price:20,qunt:5}]},
                {id:2,driver:{id:"",name:"abo samer"},products:[{id:"231",name:'pro2',price:20,qunt:10},{id:"",name:'pro10',price:10,qunt:2}]}
            ]
        },
        hisOrder:[
            {id:1,driver:{id:"1",name:"abo rateb"},products:[{id:'122',name:'pro1',price:20,qunt:5}]},
            {id:2,driver:{id:"",name:"abo samer"},products:[{id:"231",name:'pro2',price:20,qunt:10},{id:"",name:'pro10',price:10,qunt:2}]}
        ]
    },
    reducers:{
        updatecurOrder:(state,action)=>{state.curOrder=action.payload},
        updatehisOrder:(state,action)=>{state.hisOrder=action.payload},
        receiveToWait:(state,action)=>{
            let idOrder=action.payload.idOrder;
            let Driver=action.payload.driver;
            let Products=action.payload.products;
            //for(let ele of state.curOrder.receiveOrder){
            //     if(ele.id==idOrder){
            //        for(let i=0;i<ele.products.length;i++){
            //            for(let Epro of Products){
            //                if(ele.products[i].name=Epro.name){
            //                    
            //                }
            //            }
            //        }
            //     }
            //}
        }
       
    }
})

 export const {updatecurOrder,updatehisOrder}= orderSlice.actions;
 export default orderSlice.reducer; 

