import {useAppSelector} from "../../shared/hooks/redux.ts";
import {productSlice} from "../../app/store/reducers/ProductSlice.ts";

const CurrentProductPage = () => {

    const {products} = useAppSelector(state => state.productReducer)
    const id = window.location.pathname.split('/')[2]

    return (
        <div className="bg-black">

        </div>
    );
};

export default CurrentProductPage;