import {useAppSelector} from "../../hooks/redux.ts";
import {productSlice} from "../../store/reducers/ProductSlice.ts";

const CurrentProductPage = () => {

    const {products} = useAppSelector(state => state.productReducer)
    const id = window.location.pathname.split('/')[2]

    console.log()
    return (
        <div className="bg-black">

        </div>
    );
};

export default CurrentProductPage;