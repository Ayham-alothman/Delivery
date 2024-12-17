import { configureStore } from "@reduxjs/toolkit";

import sliceOrder from './slices/orderSlice';
import orderSliceDriver from "./slices/orderSliceDriver";


export const store=configureStore({
    reducer:{
        orderSlice:sliceOrder,
        orderDriverSlice:orderSliceDriver,
    }
})
export type RootState = ReturnType<typeof store.getState>;