import ProductCard from "../../entities/productCard/ProductCard.tsx";
import {useAppSelector} from "../../shared/hooks/redux.ts";
import Navbar from "../../widgets/Navbar/Navbar.tsx";

const ProductsPage = () => {

    const {products, sorted} = useAppSelector(state => state.productReducer)

    return (
       <div className="w-screen h-screen bg-myGray flex flex-wrap">
        <Navbar/>
           <div className="w-screen flex flex-nowrap h-[calc(100%-155px)]">
               <div className="w-72 min-w-72  shadow-lg bg-myInputColor rounded-2xl ml-5 mt-10 ">
                   Всякие элементы
               </div>
               <div className="w-full px-5 py-10 flex flex-wrap gap-5">
                    <div className="w-full">
                        <p>Сортировка по цене: слова</p>
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