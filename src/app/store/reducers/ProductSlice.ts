import { IProduct } from "../../../shared/models/IProduct.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductCreate} from "../../../shared/models/IProductCreate.ts";

interface ProductState {
    products: IProduct[];
    isLoading: boolean;
    error: string;
    sorted: boolean;
    product: IProduct;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: '',
    sorted: false,
    product: {id: 0, title: "none", price: 0, description: "none", image:"none", liked: false, rating:{count: 0, rate: 0}, category: "none" },
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

        createProduct(state, action:PayloadAction<IProductCreate>){
            const {title, price, description} = action.payload
            const id = Math.random() * (9999 - 1) + 1;

            const finalObject = {
                title,
                price,
                description,
                liked: false,
                rating: {rate: 0, count: 0},
                category: "none",
                image: "",
                id

            }
            state.products.push(finalObject)
        },

        fetchingCurrentProducts(state, action:PayloadAction<IProduct>) {
            state.product = action.payload

        },
    }
})

export default productSlice.reducer;
