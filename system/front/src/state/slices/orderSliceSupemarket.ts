import { createSlice } from "@reduxjs/toolkit";

const OrderSliceProduct=createSlice({
    name:"orderSupermarket",
    initialState:{
        curOrder:{
            requestOrder:[],
            aprovalOrder:[],
        },
        historyOrder:[]
    },
    reducers:{
        setOrderSuper:(state,action)=>{
            state.curOrder.requestOrder=action.payload.waitOrder
            state.curOrder.aprovalOrder=action.payload.aprovalOrder
            state.historyOrder=action.payload.historyOrder
        }
    }
})

export const {setOrderSuper} =OrderSliceProduct.actions ;
export default OrderSliceProduct.reducer;