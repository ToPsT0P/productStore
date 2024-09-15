import {createBrowserRouter} from "react-router-dom";
import ProductsPage from "../../pages/productPage/ProductsPage.tsx";
import ErrorPage from "../../pages/errorPage/ErrorPage.tsx";
import CurrentProductPage from "../../pages/currentProductPage/CurrentProductPage.tsx";
import CreateProductPage from "../../pages/createProductPage/CreateProductPage.tsx";


const router = createBrowserRouter([
    {
      path:"/",
      element:  <ErrorPage/>  ,
      errorElement: <ErrorPage/>,
    },
    {
     path: "/productStore/",
     element: <ProductsPage/>
    },
    {
        path:"/productStore/products/:id",
        element: <CurrentProductPage/>
    },
    {
        path: "productStore/create-product",
        element: <CreateProductPage/>
    }
])


export default router