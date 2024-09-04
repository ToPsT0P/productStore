import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductSlice.ts"

const rootReducer = combineReducers({
    productReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']