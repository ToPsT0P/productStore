import { IProduct } from "../../shared/models/IProduct.ts";
import { CiHeart } from "react-icons/ci";
import { useAppDispatch } from "../../shared/hooks/redux.ts";
import { productSlice } from "../../app/store/reducers/ProductSlice.ts";
import withoutPhoto from "../../shared/placeholder.png";
import {Link} from "react-router-dom";

const ProductCard = (item) => {
    const dispatch = useAppDispatch();
    const data: IProduct = item.item;

    return (
        <div className="bg-white w-full h-52 rounded-2xl hover:shadow-xl duration-200 p-5 flex justify-between gap-x-5">
            <div className="h-full w-64 flex justify-center items-center">
                <img
                    src={data.image || withoutPhoto}
                    alt={data.title}
                    className="h-36 max-h-48 max-w-52 object-contain"
                />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <p className="text-xl text-myDark">{data.title}</p>
                <p className="text-2xl text-myDarkBrown font-semibold">{data.price} $</p>
            </div>
            <div className="flex flex-col justify-between items-center w-32">
                  <CiHeart
                        className={`h-10 w-10 cursor-pointer ${data.liked ? "fill-myRed" : "fill-myDark"} hover:fill-myRed duration-200`}
                        onClick={() => {
                            dispatch(productSlice.actions.productLikeOrUnlike(data.id));
                        }}/>
                <Link to={`/productStore/products/${data.id}`} className="bg-myDark text-myWhite rounded-2xl flex justify-center items-center p-2 w-36 h-12 min-w-36 hover:bg-myDarkBrown duration-200">
                    Product Page
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
