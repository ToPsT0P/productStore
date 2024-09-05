import React from 'react';
import ProductCard from "../../entities/productCard/ProductCard.tsx";
import {useAppSelector} from "../../shared/hooks/redux.ts";
import Navbar from "../../widgets/Navbar/Navbar.tsx";

const ProductsPage = () => {

    const {products, sorted} = useAppSelector(state => state.productReducer)

    return (
        <div style={{width: "95vw"}} className="h-screen">
                     <div className="w-screen h-screen p-10 gap-3 flex-wrap flex justify-center">
                    <Navbar/>
                    {sorted
                        ? <>
                            {products.map((item) => {
                                if(item.liked){
                                    return <ProductCard item={item} key={item.id} />
                                }
                            })}
                        </>
                        : <>
                            {products.map((item) => {
                                return <ProductCard item={item} key={item.id} />
                            })}
                        </>}
                    </div>


        </div>
    )
        ;
};

export default ProductsPage;