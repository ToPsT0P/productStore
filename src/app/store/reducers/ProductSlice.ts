import { IProduct } from "../../../shared/models/IProduct.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
    sorted: boolean;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
    sorted: false,
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

        productLikeOrUnlike(state, action: PayloadAction<number>) {
            const id = action.payload;
            state.products.forEach((element) => {
                if (element.id === id) {
                    element.liked = !element.liked
                }
            })
        },

        productDelete(state, action:PayloadAction<number>) {
            const id = action.payload;
            state.products.forEach((element, i) => {
                if (element.id === id) {
                    state.products.splice(i, 1)
                }
            })
        },

        sortedChange(state){
            state.sorted = !state.sorted
        },

        createProduct(state, action:PayloadAction<IProduct>){
            state.products.push(action.payload)
        }
    }
})

export default productSlice.reducer;
