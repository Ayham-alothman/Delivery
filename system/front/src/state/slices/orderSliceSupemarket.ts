import { createSlice } from "@reduxjs/toolkit";

const OrderSliceProduct=createSlice({
    name:"orderSupermarket",
    initialState:{
        curOrder:{
            requestOrder:[{idOrder:"1",driver:{idDriver:"22",name:"ahmad"},products:[{idProduct:"31",name:"barcil",price:"33",count:"4"}]},{idOrder:"14",driver:{idDriver:"22",name:"ahmad"},products:[{idProduct:"31",name:"barcil",price:"33",count:"4"},{idProduct:"321",name:"maji",price:"330",count:"2"}]}],
            aprovalOrder:[{idOrder:"1",driver:{idDriver:"22",name:"ahmad"},products:[{idProduct:"31",name:"barcil",price:"33",count:"4"},{idProduct:"321",name:"maji",price:"330",count:"2"}]}],
        },
        historyOrder:[{idOrder:"1",driver:{idDriver:"22",name:"ahmad"},products:[{idProduct:"31",name:"barcil",price:"33",count:"4"}]},{idOrder:"14",driver:{idDriver:"22",name:"ahmad"},products:[{idProduct:"31",name:"barcil",price:"33",count:"4"},{idProduct:"321",name:"maji",price:"330",count:"2"}]}]
    },
    reducers:{}
})

//export const {} =orderSliceProduct.actions ;
export default OrderSliceProduct.reducer;