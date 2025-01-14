import { createSlice } from "@reduxjs/toolkit";

const orderSlice=createSlice({
    name:'order',
    initialState:{
        curOrder:{
            receiveOrder:[ ],
            waitOrder:[ ]
        },
        hisOrder:[    ]
    },
    reducers:{
        
        setOrderFactory:(state,action)=>{
             state.curOrder.receiveOrder=action.payload.receiveOrder;
             state.curOrder.waitOrder=action.payload.waitOrder;
             state.hisOrder=action.payload.hisOrder;
            
        }
       
    }
})

 export const {setOrderFactory}= orderSlice.actions;
 export default orderSlice.reducer; 

