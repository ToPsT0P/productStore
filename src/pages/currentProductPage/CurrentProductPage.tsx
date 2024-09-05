import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux.ts";
import { useEffect, useState } from "react";
import { fetchOneProduct } from "../../app/store/reducers/ActionCreater.ts";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import {IProduct} from "../../shared/models/IProduct.ts";
import withoutPhoto from "../../shared/placeholder.png"

const CurrentProductPage = () => {
    const dispatch = useAppDispatch();
    const {  products } = useAppSelector(state => state.productReducer);
    const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);
    const [error, setError] = useState<string | null>(null);
    const id = Number(window.location.pathname.split("/")[3]);

    useEffect(() => {
        dispatch(fetchOneProduct(id))
            .then((fetchedProduct) => {
                if (fetchedProduct) {
                    setCurrentProduct(fetchedProduct);
                } else {
                    const localProduct = products.find(p => p.id === id);
                    if (localProduct) {
                        setCurrentProduct(localProduct);
                    } else {
                        setError("Продукт не найден");
                    }
                }
            })
            .catch(() => {
                const localProduct = products.find(p => p.id === id);
                if (localProduct) {
                    setCurrentProduct(localProduct);
                } else {
                    setError("Продукт не найден");
                }
            });
    }, [dispatch, id, products]);

    if (error) {
        return <div className="p-12">Ошибка: {error}</div>;
    }

    if (!currentProduct) {
        return <div className="p-12">Загрузка...</div>;
    }

    return (
        <div className="p-12 flex flex-nowrap">
            <div className="w-1/3 min-w-96">
                <Link to={"/productStore/products"} className="items-center flex flex-nowrap">
                    <IoIosArrowRoundBack className="h-8 w-8" />
                    <p className="h-7">Назад</p>
                </Link>
                <div className="flex flex-wrap justify-center items-center gap-y-3 mt-5">
                    {currentProduct.image
                        ? <img src={currentProduct?.image} className="w-44" alt="" />
                        : <img src={withoutPhoto} alt=""/>
                    }
                    <p className="w-full">Рейтинг: {currentProduct?.rating?.rate}</p>
                    <p className="w-full">Количество отзывов: {currentProduct?.rating?.count}</p>
                </div>
            </div>
            <div className="mt-7">
                <h1 className="font-bold text-4xl mb-8 border-b border-b-blue-900 pb-3">
                    {currentProduct.title}
                </h1>
                <h3>Описание</h3>
                <p>{currentProduct?.description}</p>
                <p className="mt-7 text-2xl">Категория: {currentProduct.category}</p>
                <p className="mt-5 text-2xl">Цена: {currentProduct.price}$</p>
            </div>
        </div>
    );
};

export default CurrentProductPage;
