import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the product type
interface Product {
    id: string;
    name: string;
    price: string;
    count:string
}

// Define the initial state type
interface BasketState {
    products: Product[];
}

// Create the slice
const BasketSupermarket = createSlice({
    name: "basket",
    initialState: {products:[] } as BasketState,
    reducers: {
        clearProduct: (state) => {
            state.products = [];
        },
        setNewProduct: (state, action: PayloadAction<Product>) => {
           console.log(action.payload);
           state.products.push(action.payload);
           
        },
        RemoveProduct:(state,action)=>{
            let idProduct=action.payload;
            state.products=state.products.filter((e)=>{
                if(e.id!=idProduct){return e}
            })
        }
    }
});

// Export actions and reducer
export const { clearProduct, setNewProduct,RemoveProduct } = BasketSupermarket.actions;
export default BasketSupermarket.reducer;
