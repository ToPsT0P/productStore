import React from 'react';
import ProductCard from "../../entities/productCard/ProductCard.tsx";
import {useAppSelector} from "../../shared/hooks/redux.ts";

const ProductsPage = () => {

    const {products, isLoading, sorted} = useAppSelector(state => state.productReducer)

    return (
        <div style={{width: "95vw"}} className="h-screen">

            {isLoading
                    ? <p>Загрузка....</p>
                    : <div className="w-fit h-screen p-10 gap-3 flex-wrap flex justify-center">
                    {sorted
                        ? <>
                            {products.map((item) => {
                                if(item.liked){
                                    return <ProductCard item={item}/>
                                }
                            })}
                        </>
                        : <>
                            {products.map((item) => {
                                return <ProductCard item={item}/>
                            })}
                        </>}
                    </div>
            }

        </div>
    )
        ;
};

export default ProductsPage;