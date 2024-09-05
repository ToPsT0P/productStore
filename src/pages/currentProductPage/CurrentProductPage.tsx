import {useAppDispatch, useAppSelector} from "../../shared/hooks/redux.ts";
import {useEffect} from "react";
import {fetchOneProduct} from "../../app/store/reducers/ActionCreater.ts";
import {IoIosArrowRoundBack} from "react-icons/io";
import {Link} from "react-router-dom";

const CurrentProductPage = () => {

    const dispatch = useAppDispatch()
    const {product, products} = useAppSelector(state => state.productReducer)
    const id = window.location.href.split("/")[4]
    console.log(!!product)

    useEffect(() => {
        dispatch(fetchOneProduct(id))
    }, [ ]);

    if(!!product == false){
        products.forEach(element => {
            if(element.id == id){

            }
        })
    }


    return (
        <div className="p-12 flex flex-nowrap">

            <div className="w-1/3 min-w-96">
                <Link to={"/products"} className="items-center flex flex-nowrap">
                    <IoIosArrowRoundBack className="h-8 w-8"/><p className="h-7">Назад</p>
                </Link>
                <div className="flex flex-wrap justify-center items-center gap-y-3 mt-5">
                    <img src={product?.image} className="w-44" alt=""/>
                    <p className="w-full">Рейтинг: {product?.rating?.rate}</p>
                    <p className="w-full">Количетсво отзывов: {product?.rating?.count}</p>
                </div>
            </div>
            <div className="mt-7">
                <h1 className="font-bold text-4xl mb-8 border-b border-b-blue-900 pb-3">{product.title}</h1>
                <h3>Описание</h3>
                <p>{product?.description}</p>
                <p className="mt-7 text-2xl">Категория: {product.category}</p>
                <p className="mt-5 text-2xl">Цена: {product.price}$</p>
            </div>
        </div>
    );
};

export default CurrentProductPage;