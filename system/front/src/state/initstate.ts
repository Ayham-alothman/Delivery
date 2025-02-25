import { configureStore } from "@reduxjs/toolkit";

import sliceOrder from './slices/orderSlice';
import orderSliceDriver from "./slices/orderSliceDriver";
import ProductSlice from "./slices/productSupermarket";
import bascketSupermarket from "./slices/bascketSupermarket";
import orderSliceSupemarket from "./slices/orderSliceSupemarket";
import userSlice from "./slices/userSlice";


export const store=configureStore({
    reducer:{
        orderSlice:sliceOrder,
        orderDriverSlice:orderSliceDriver,
        productSliceSupermarkit:ProductSlice,
        bascket:bascketSupermarket,
        orderSupermarketSlice:orderSliceSupemarket,
        userSlice:userSlice,
        
    }
})
export type RootState = ReturnType<typeof store.getState>;