import { createSlice } from "@reduxjs/toolkit";

const ProductSlice=createSlice({
    name:"ProductSliceSupermarket",
    initialState:{products:[]},
    reducers:{
        setAllProducts:(state,action)=>{
            state.products=action.payload
        }
    }

})

export const {setAllProducts}=ProductSlice.actions
export default ProductSlice.reducer;

