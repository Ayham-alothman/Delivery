import { createSlice } from "@reduxjs/toolkit";

const OrderDriverSlice=createSlice({
    name:'order driver',
    initialState:{
        currentOrder:{
            factoryRequest:[{idOrder:'10',factory:{idFactory:"3",name:"katkit"},products:[{idProduct:"4",nameProduct:"tweest",priceUnit:"10",qunt:10},{idProduct:"18",nameProduct:"rube",priceUnit:"11",qunt:5}]},{idOrder:'22',factory:{idFactory:"1",name:"almium"},products:[{idProduct:"4",nameProduct:"tweest",priceUnit:"10",qunt:10},{idProduct:"18",nameProduct:"rube",priceUnit:"11",qunt:5}]}],
            factoryAprofal:[{idOrder:'10',factory:{idFactory:"3",name:"katkit"},products:[{idProduct:"4",nameProduct:"tweest",priceUnit:"10",qunt:10},{idProduct:"18",nameProduct:"rube",priceUnit:"11",qunt:5}]},{idOrder:'22',factory:{idFactory:"1",name:"almium"},products:[{idProduct:"4",nameProduct:"tweest",priceUnit:"10",qunt:10},{idProduct:"18",nameProduct:"rube",priceUnit:"11",qunt:5}]}],
            supermarkrtSendRequest:[{idOrder:'10',supermarket:{id:"3",name:"hamood"},products:[{idProduct:"4",nameProduct:"tweest",priceUnit:"10",qunt:10},{idProduct:"18",nameProduct:"rube",priceUnit:"11",qunt:5}]},{idOrder:'22',supermarket:{id:"1",name:"almium"},products:[{idProduct:"4",nameProduct:"tweest",priceUnit:"10",qunt:10},{idProduct:"18",nameProduct:"rube",priceUnit:"11",qunt:5}]}],
            supermarketWaitRequest:[{idOrder:'10',supermarket:{id:"3",name:"hamood"},products:[{idProduct:"4",nameProduct:"tweest",priceUnit:"10",qunt:10},{idProduct:"18",nameProduct:"rube",priceUnit:"11",qunt:5}]},{idOrder:'22',supermarket:{id:"1",name:"almium"},products:[{idProduct:"4",nameProduct:"tweest",priceUnit:"10",qunt:10},{idProduct:"18",nameProduct:"rube",priceUnit:"11",qunt:5}]}]
        },
        historyOrder:[{id:"1",supermarket:{id:"2",name:"samerS"},product:[{id:"4",name:"wood",price:"23221",quntity:3,factory:{id:"41",name:"katkit"}}]}]
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