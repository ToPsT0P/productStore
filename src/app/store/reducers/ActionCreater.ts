import { AppDispatch } from "../store.ts";
import axios from "axios";
import { IProduct } from "../../../shared/models/IProduct.ts";
import { productSlice } from "./ProductSlice.ts";

export const fetchProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productsFetching());
        const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products");
        dispatch(productSlice.actions.productsFetchingSuccess(response.data));
    } catch (error) {
        dispatch(productSlice.actions.productsFetchingError(error.message));
    }
};

export const fetchOneProduct = (id: number, products: IProduct[]) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productsFetching());
        const response = await axios.get<IProduct>(`https://fakestoreapi.com/products/${id}`);

        if (response.data) {
            console.log(response.data);
            dispatch(productSlice.actions.fetchingCurrentProducts(response.data));
        } else {
            const localProduct = products.find((el) => el.id === id);
            if (localProduct) {
                dispatch(productSlice.actions.fetchingCurrentProducts(localProduct));
            }
        }
    } catch (e) {
        console.log(e);
    }
};
