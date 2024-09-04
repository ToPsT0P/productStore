import {useAppDispatch, useAppSelector} from "../../shared/hooks/redux.ts";
import {useEffect, useState} from "react";
import {IProduct} from "../../shared/models/IProduct.ts";
import {fetchProducts} from "../../app/store/reducers/ActionCreater.ts";

const CurrentProductPage = () => {

    const [currentProduct, setCurrentProduct] = useState<IProduct>({})
    const {products} = useAppSelector(state => state.productReducer)
    const id = Number(window.location.pathname.split('/')[2]);

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
        console.log(products)
    }, []);


    return (
        <div className="">
            <p>{currentProduct.title}</p>
        </div>
    );
};

export default CurrentProductPage;