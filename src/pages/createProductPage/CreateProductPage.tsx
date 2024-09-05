import {useState} from 'react';
import {Link} from "react-router-dom";
import {IoMdPhotos} from "react-icons/io";
import {useDispatch} from "react-redux";
import {IProductCreate} from "../../shared/models/IProductCreate.ts";
import {productSlice} from "../../app/store/reducers/ProductSlice.ts";

const CreateProductPage = () => {

    const [title, setTitle] = useState<string>("dwsdwa")
    const [description, setDescription] = useState<string>("hgfsd")
    const [price, setPrice] = useState<number>(449)
    let finalObject:IProductCreate ={
        price,
        description,
        title
    }
    const dispatch = useDispatch();

    const addingProduct = () => {
        dispatch(productSlice.actions.createProduct(finalObject))
    }

    return (
        <div className="p-12">
            <Link className="hover:text-red-500 duration-150" to={"/products"}>Назад</Link>
            <div className="border-2 border-gray-200 rounded-full w-72 h-72 mb-10 bg-gray-600 flex justify-center flex-wrap items-center">
                <p className="text-white p-5 cursor-default w-4/6 ">Сейчас добавить фото вашего товара нет возможности</p>
                <IoMdPhotos className="fill-white h-20 w-20" />
            </div>
            <div className="gap-4 flex flex-wrap w-1/4">
                <input className="p-2 w-full outline-none border-2 rounded" onChange={(e) => {setTitle(e.target.value)}} placeholder="Название" type="text"/>
                <input className="p-2 w-full outline-none border-2 rounded" onChange={(e) => {setDescription(e.target.value)}} placeholder="Описание" type="text"/>
                <input className="p-2 w-full outline-none border-2 rounded" onChange={(e) => {setPrice(e.target.value)}} placeholder="Цена" type="number"/>
            </div>
            <button className="mt-5 border text-gray-900 p-3 border-red-500 rounded hover:bg-red-400 duration-200" onClick={() => {addingProduct()}}>Создать товар</button>
        </div>
    );
};

export default CreateProductPage;