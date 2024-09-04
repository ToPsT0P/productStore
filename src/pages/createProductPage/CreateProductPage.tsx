import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {IoMdPhotos} from "react-icons/io";
import {useDispatch} from "react-redux";

const CreateProductPage = () => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [price, setPrice] = useState<number>()

    const dispatch = useDispatch();

    // const addingProduct = () => {
    //     dispatch()                    //TODO Доделать страницу
    // }

    return (
        <form action="" className="p-12">
            <Link className="hover:text-red-500 duration-150" to={"/products"}>Назад</Link>
            <div className="border-2 border-gray-200 rounded-full w-72 h-72 mb-10 bg-gray-600 flex justify-center flex-wrap items-center">
                <p className="text-white p-5 cursor-default w-4/6 ">Сейчас добавить фото вашего товара нет возможности</p>
                <IoMdPhotos className="fill-white h-20 w-20" />
            </div>
            <div className="gap-4 flex flex-wrap w-1/4">
                <input className="p-2 w-full outline-none border-2 rounded" placeholder="Название" type="text"/>
                <input className="p-2 w-full outline-none border-2 rounded" placeholder="Описание" type="text"/>
                <input className="p-2 w-full outline-none border-2 rounded" placeholder="Цена" type="text"/>
            </div>
            <button className="mt-5 border text-gray-900 p-3 border-red-500 rounded hover:bg-red-400 duration-200">Создать товар</button>
        </form>
    );
};

export default CreateProductPage;