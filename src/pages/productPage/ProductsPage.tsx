import ProductCard from "../../entities/productCard/ProductCard.tsx";
import {useAppSelector} from "../../shared/hooks/redux.ts";
import Navbar from "../../widgets/Navbar/Navbar.tsx";
import LeftSideBar from "../../widgets/LeftSideBar/LeftSideBar.tsx";

const ProductsPage = () => {

    const {products, sorted} = useAppSelector(state => state.productReducer)

    return (
       <div className="w-screen h-screen bg-myGray flex flex-wrap overflow-x-hidden">
        <Navbar/>
           <div className="w-screen flex flex-nowrap h-[calc(100%-155px)]">
                <LeftSideBar/>
               <div className="w-full px-5 py-10 flex flex-wrap gap-5">
                    <div className="w-full flex flex-nowrap gap-x-3">
                        <p>Сортировка: <a>недорогоик</a></p>
                    </div>
                   <div>
                       {products.map((element) => {
                           return <ProductCard key={element.id} item={element} />
                       })}
                   </div>
               </div>
           </div>

       </div>
    )
        ;
};

export default ProductsPage;