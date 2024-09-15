import ProductCard from "../../entities/productCard/ProductCard.tsx";
import { useAppSelector } from "../../shared/hooks/redux.ts";
import Navbar from "../../widgets/Navbar/Navbar.tsx";
import LeftSideBar from "../../widgets/LeftSideBar/LeftSideBar.tsx";
import { IProduct } from "../../shared/models/IProduct.ts";

const ProductsPage = () => {
    const { products, sorted } = useAppSelector((state) => state.productReducer);
    const { productName } = useAppSelector((state) => state.productFindSlice);

    const filteredProducts = products.filter((product: IProduct) => {
        if (sorted) {
            return product.liked;
        }
        if (productName) {
            return product.title.toLowerCase().includes(productName.toLowerCase());
        }
        return true;
    });

    return (
        <div className="w-screen h-screen bg-myGray flex flex-col">
            <Navbar />
            <div className="w-screen flex h-[calc(100%-115px)] mt-28">
                <LeftSideBar />
                <div className="w-full flex flex-col gap-5 h-full overflow-auto scrollbar-corner-myDark scrollbar-thin">
                    <div className="w-full flex gap-x-3 text-myWhite">
                        <p className="pl-7 pt-10">
                            Сортировка: <span className="font-bold">по цене</span>
                        </p>
                    </div>
                    <div className="w-full h-full gap-y-5 flex flex-wrap p-5">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((element: IProduct) => (
                                <ProductCard key={element.id} item={element} />
                            ))
                        ) : (
                            <p className="text-myWhite">Ничего не найдено</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
