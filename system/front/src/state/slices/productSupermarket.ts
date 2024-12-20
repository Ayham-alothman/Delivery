import { createSlice } from "@reduxjs/toolkit";

const ProductSlice=createSlice({
    name:"ProductSliceSupermarket",
    initialState:{products:[{id:"1",name:"pro1",price:"100",numberOfUnit:5,category:"any1"},{id:"2",name:"pro2",price:"100",numberOfUnit:5,category:"any2"},{id:"3",name:"pro3",price:"100",numberOfUnit:5,category:"any3"},{id:"213",name:"pro4",price:"120",numberOfUnit:2,category:"any4"}]
},
    reducers:{}

})

export default ProductSlice.reducer;

