import {AppDispatch} from "../store.ts";
import axios from "axios";
import {IProduct} from "../../../shared/models/IProduct.ts";
import {productSlice} from "./ProductSlice.ts";


export const fetchProducts = () => async (dispatch: AppDispatch)  => {
    try {
        dispatch(productSlice.actions.productsFetching())
        const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products")
        dispatch(productSlice.actions.productsFetchingSuccess(response.data))

    }catch (error){
        dispatch(productSlice.actions.productsFetchingError(error.message))

    }
}

export const fetchOneProduct = (id) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productsFetching())
        const response = await axios.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
        dispatch(productSlice.actions.fetchingCurrentProducts(response.data))
    }catch (e){

    }
}