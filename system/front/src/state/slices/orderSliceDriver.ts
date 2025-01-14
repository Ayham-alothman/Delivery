import { createSlice } from "@reduxjs/toolkit";

const OrderDriverSlice=createSlice({
    name:'order driver',
    initialState:{
        currentOrder:{
            factoryRequest:[],
            factoryAprofal:[],
            supermarkrtSendRequest:[],
            supermarketWaitRequest:[]
        },
        historyOrder:[]
    },
    reducers:{
        setaFctoryRequest:(state,action)=>{state.currentOrder.factoryRequest=action.payload},
        setFactoryAprofal:(state,action)=>{state.currentOrder.factoryAprofal=action.payload},
        setSupermarkrtSendRequest:(state,action)=>{state.currentOrder.supermarkrtSendRequest=action.payload},
        setSupermarketWaitRequest:(state,action)=>{state.currentOrder.supermarketWaitRequest=action.payload},
        setHistoryOrder:(state,action)=>{state.historyOrder=action.payload}
    }
})

export const {setFactoryAprofal,setaFctoryRequest,setSupermarketWaitRequest,setSupermarkrtSendRequest,setHistoryOrder} =OrderDriverSlice.actions;
export default OrderDriverSlice.reducer;