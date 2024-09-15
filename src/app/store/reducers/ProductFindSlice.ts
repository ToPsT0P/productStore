import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ProductFindSlice {
    productName: string;
}

const initialState: ProductFindSlice = {
    productName: ""
}

export const productFindSLice = createSlice({
    name: "ProductFindSlice",
    initialState,
    reducers: {
        changeProductName(state, action:PayloadAction<string>){
            state.productName = action.payload
            console.log(state.productName)
        }
    }
})

export default productFindSLice.reducer