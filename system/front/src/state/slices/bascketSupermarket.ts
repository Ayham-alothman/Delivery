import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    idProduct: string;
    name: string; 
    price:string,
    category:string,
    count:string,
    idFactory:string
}

interface ProductState {
    products: Product[];
}

// Create the slice
const BasketSupermarket = createSlice({
    name: "basket",
    initialState: { products: [] } as ProductState,
    reducers: {
        clearProduct: (state) => {
            state.products = [];
        },
        setNewProduct: (state, action) => {
            
            state.products.push(action.payload);

           
        },
        RemoveProduct:(state,action)=>{
            let idProduct=action.payload;
            state.products=state.products.filter((e:any)=>{
                if(e.idProduct!=idProduct){return e}
            })
        }
    }
});

// Export actions and reducer
export const { clearProduct, setNewProduct,RemoveProduct } = BasketSupermarket.actions;
export default BasketSupermarket.reducer;
