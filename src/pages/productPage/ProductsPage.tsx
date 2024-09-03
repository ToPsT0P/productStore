import React from 'react';
import ProductCard from "../../entities/productCard/ProductCard.tsx";
import {useAppSelector} from "../../hooks/redux.ts";

const ProductsPage = () => {

    const {products, isLoading} = useAppSelector(state => state.productReducer)

    return (
        <div className="w-screen h-screen">

            {isLoading
                    ? <p>Загрузка....</p>
                    : <div className="w-fit h-screen p-10 gap-3 flex-wrap flex">
                        {products.map((item) => {
                            console.log(item)
                            return <ProductCard item={item}/>
                        })}
                    </div>
            }

        </div>
    )
        ;
};

export default ProductsPage;