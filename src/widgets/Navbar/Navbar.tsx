import React from 'react';
import {useAppDispatch, useAppSelector} from "../../shared/hooks/redux.ts";
import {productSlice} from "../../app/store/reducers/ProductSlice.ts";

const Navbar = () => {

    const {sorted} = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()

    return (
        <div className="h-20 border-b border-b-blue-900 left-0 top-0 w-full flex items-center gap-6 pl-14 overflow-x-hidden">
            <p className="cursor-pointer hover:text-red-500 duration-150">Создать товар</p>

            {sorted
                ? <p className="cursor-pointer hover:text-red-500 duration-150" onClick={() => {
                    dispatch(productSlice.actions.sortedChange())
                }}>Убрать сортировку</p>
                : <p className="cursor-pointer hover:text-red-500 duration-150" onClick={() => {
                    dispatch(productSlice.actions.sortedChange())
                }}>Сортировка по лайкам</p>

            }

        </div>
    );
};

export default Navbar;