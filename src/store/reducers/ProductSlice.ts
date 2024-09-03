import { IProduct } from "../../models/IProduct.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        productsFetching(state){
            state.isLoading = true
        },

        productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false
            state.error = ""
            state.products = action.payload
        },

        productsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },

        productLike(state, action: PayloadAction<number>) {
            const index = action.payload - 1;
            if (state.products[index]) {
                state.products[index].liked = true;
            }
        },

        productUnLike(state, action: PayloadAction<number>) {
            const index = action.payload - 1;
            if (state.products[index]) {
                state.products[index].liked = false;
            }
        },

        productDelete(state, action:PayloadAction<number>) {

        }
    }
})

export default productSlice.reducer;
