import {useAppDispatch, useAppSelector} from "../../shared/hooks/redux.ts";
import {productSlice} from "../../app/store/reducers/ProductSlice.ts";
import {Link} from "react-router-dom";
import {CiHeart, CiSearch, CiSquarePlus} from "react-icons/ci";

const Navbar = () => {

     const {sorted} = useAppSelector(state => state.productReducer)
    const dispatch = useAppDispatch()

    return (
        <div className="h-28 shadow-xl fixed left-0 top-0 w-full bg-myGray px-5 py-3 gap-x-3 flex items-center overflow-x-hidden">
            <div className="w-64 min-w-64 h-5/6 flex flex-nowrap">
                <div className="h-full w-1/2 justify-center items-center flex bg-blue-300 text-myWhite bg-myDark rounded-tl-xl rounded-bl-xl text-3xl cursor-default">
                    Лого
                </div>
                <Link to={"/productStore"} className="h-full w-1/2 flex items-center justify-center bg-blue-300 text-myWhite bg-myDark rounded-tr-xl rounded-br-xl hover:shadow-2xl">
                    Home
                </Link>
            </div>
            <div className="w-full h-5/6 flex items-center rounded-xl border-none hover:drop-shadow-lg px-3 duration-300 bg-myInputColor">
                <input placeholder="Search the site" type="text" className="w-full rounded bg-myInputColor text-myWhite placeholder-myWhite h-full outline-none "/>
                <CiSearch className="fill-myWhite w-6 h-6" />
            </div>
            <div className="flex flex-nowrap gap-x-3 h-full items-center">
                <Link to={"create-product"}>
                    <CiSquarePlus className="w-9 h-9 fill-myWhite hover:fill-myDark cursor-pointer duration-300" />
                </Link>
                <CiHeart className="w-9 h-9 fill-myWhite hover:fill-myDark cursor-pointer duration-300" onClick={() => {dispatch(productSlice.actions.sortedChange())}}/>
            </div>

        </div>
    );
};

export default Navbar;