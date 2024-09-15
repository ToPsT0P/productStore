import { useState } from "react";
import { Link } from "react-router-dom";
import {IoIosArrowRoundBack, IoMdPhotos} from "react-icons/io";
import { useDispatch } from "react-redux";
import { IProductCreate } from "../../shared/models/IProductCreate.ts";
import { productSlice } from "../../app/store/reducers/ProductSlice.ts";

const CreateProductPage = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [image, setImage] = useState<string>("")

    let finalObject: IProductCreate = {
        price,
        description,
        title,
        image
    };

    const dispatch = useDispatch();

    const addingProduct = () => {
        dispatch(productSlice.actions.createProduct(finalObject));
    };

    return (
        <div className="w-screen min-h-screen bg-myGray p-10 flex flex-col items-center">
            <div className="w-full max-w-6xl mb-8">
                <Link
                    to="/productStore"
                    className="flex items-center text-myDark hover:text-myWhite transition-all duration-300"
                >
                    <IoIosArrowRoundBack className="h-8 w-8 mr-2" />
                    <p className="text-lg font-medium">Home</p>
                </Link>
            </div>

            <div className="bg-white w-full max-w-4xl p-10 rounded-xl shadow-lg flex flex-col items-center">

                <div className="w-full max-w-xs h-64 bg-myDark rounded-lg flex cursor-pointer flex-col justify-center items-center mb-8">
                    <p className="text-myWhite mb-4 text-center">
                        Click to add ur image
                    </p>
                    <IoMdPhotos className="text-myWhite h-20 w-20" />
                </div>

                <div className="w-full max-w-lg flex flex-col gap-6">
                    <input
                        className="p-4 border-2 border-myDark rounded-xl outline-none focus:border-myLightBrown transition-all duration-300"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Название товара"
                        type="text"
                    />
                    <textarea
                        className="p-4 border-2 border-myDark rounded-xl outline-none focus:border-myLightBrown transition-all duration-300 resize-none"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Описание товара"
                        rows={5}
                    ></textarea>
                    <input
                        className="p-4 border-2 border-myDark rounded-xl outline-none focus:border-myLightBrown transition-all duration-300"
                        onChange={(e) => setPrice(Number(e.target.value))}
                        placeholder="Цена товара"
                        type="number"
                    />
                </div>

                <button
                    className="mt-10 bg-myDark text-myWhite py-3 px-6 rounded-xl shadow-md hover:bg-myLightBrown hover:text-myDark transition-all duration-300"
                    onClick={addingProduct}
                >
                    Создать товар
                </button>
            </div>
        </div>
    );
};

export default CreateProductPage;
