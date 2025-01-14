import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:{
        isLogin:false,
        id:"",
        username:"",
        email:"",
        idInfo:""
    },
    reducers:{
        LoginU:(state,action)=>{
            state.isLogin=true;
            state.id=action.payload.id;
            state.username=action.payload.username;
            state.email=action.payload.email;
            state.idInfo=action.payload.idInfo;
        },

        Logout:(state)=>{
          state.isLogin=false;
          state.id="";
          state.username="";
          state.email="";
          state.idInfo="";
        }
    }
})

export const {LoginU,Logout}=userSlice.actions;
export default userSlice.reducer;