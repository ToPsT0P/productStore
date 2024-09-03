import {IProduct} from "../../models/IProduct.ts";
import React from "react";
import {CiHeart, CiTrash} from "react-icons/ci";
import {useAppDispatch} from "../../hooks/redux.ts";
import {productSlice} from "../../store/reducers/ProductSlice.ts";
import {Link} from "react-router-dom";


const ProductCard = (item) => {

    const dispatch = useAppDispatch()
    const data:IProduct = item.item


    return (
        <Link to={`/products/${data.id}`} className="h-80 w-64 border-b-gray-900 border-x-2 border-y-2 flex p-5 cursor-pointer flex-wrap">
            <CiTrash className="hover:fill-red-500 duration-75 w-6 h-6" />
            <div className="w-full h-fit flex justify-center">
                <img className="h-24" src={data.image} alt=""/>
            </div>
            <div className="w-full h-fit flex justify-center">
                <p>{data.title}</p>
            </div>
            <div className="flex flex-nowrap items-center w-full justify-between">
                <p>{data.price}$</p>
                {data.liked
                    ? <CiHeart onClick={() => {dispatch(productSlice.actions.productUnLike(data.id))}} className="w-8 h-8 fill-red-500"/>
                    : <CiHeart onClick={() => {dispatch(productSlice.actions.productLike(data.id))}} className="w-8 h-8  hover:fill-red-500 duration-150"/>
                }
            </div>
        </Link>
    );
};

export default ProductCard;