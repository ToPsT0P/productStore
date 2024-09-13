import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux.ts";
import {useEffect} from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import withoutPhoto from "../../shared/placeholder.png";
import {fetchOneProduct} from "../../app/store/reducers/ActionCreater.ts";

const CurrentProductPage = () => {
    const dispatch = useAppDispatch();
    const { product, products } = useAppSelector((state) => state.productReducer);
    const id = Number(window.location.pathname.split("/")[3]);

    useEffect(() => {
        dispatch(fetchOneProduct(id, products))
    }, []);

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

            <div className="bg-white w-full max-w-6xl p-10 rounded-xl shadow-lg flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    {product.image ? (
                        <img src={product.image} className="w-80 h-auto" alt={product.title} />
                    ) : (
                        <img src={withoutPhoto} className="w-80 h-auto rounded-lg shadow-md" alt="No image available" />
                    )}
                </div>

                <div className="flex-1 text-myDark flex flex-col">
                    <h1 className="text-4xl font-bold mb-4">
                        {product.title || "Название продукта"}
                    </h1>
                    <p className="text-lg leading-relaxed mb-6">
                        {product.description || "We don`t have description."}
                    </p>

                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-3 mb-5">
                            <p className="text-xl font-semibold">
                                Rating: {product?.rating?.rate || "No data"}
                            </p>
                            <p className="text-xl font-semibold">
                                Comments: {product?.rating?.count || "No data"}
                            </p>
                        </div>

                        <p className="text-3xl font-bold mb-4">
                            Price: <span className="text-myDarkBrown">{product.price}$</span>
                        </p>

                        <button className="w-full bg-myDark text-myWhite py-3 rounded-xl shadow-md hover:bg-myLightBrown hover:text-myDark transition-all duration-300">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentProductPage;


