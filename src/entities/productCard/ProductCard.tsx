import {IProduct} from "../../shared/models/IProduct.ts";
import React from "react";
import {CiHeart, CiTrash} from "react-icons/ci";
import {useAppDispatch} from "../../shared/hooks/redux.ts";
import {productSlice} from "../../app/store/reducers/ProductSlice.ts";
import {Link} from "react-router-dom";
import withoutPhoto from "../../shared/placeholder.png"

const ProductCard = (item) => {

    const dispatch = useAppDispatch()
    const data:IProduct = item.item

    return (
        <div className="h-80 w-64 border-b-gray-900 border-x-2 border-y-2 flex p-5 cursor-pointer flex-wrap">
            <Link className="h-4/5 flex flex-wrap justify-center" to={`/products/${data.id}`}>
                <div className="w-full h-fit flex justify-center">
                    {data.image ? <img className="h-28" src={data.image} alt=""/> : <img src={withoutPhoto} alt=""/>}
                </div>
                <div className="w-full h-fit flex justify-center">
                    <p>{data.title}</p>
                </div>
            </Link>

            <div className="flex flex-nowrap items-center w-full justify-between">
                <CiTrash onClick={() => {dispatch(productSlice.actions.productDelete(data.id))}} className="hover:fill-red-500 duration-75 w-6 h-6"/>
                <p>{data.price}$</p>
                {data.liked
                    ? <CiHeart onClick={() => dispatch(productSlice.actions.productLikeOrUnlike(data.id))} className="w-8 h-8 fill-red-500"/>
                    : <CiHeart onClick={() => dispatch(productSlice.actions.productLikeOrUnlike(data.id))} className="w-8 h-8  hover:fill-red-500 duration-150"/>
                }
            </div>
        </div>
    );
};

export default ProductCard;