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
     path: "/products",
     element: <ProductsPage/>
    },
    {
        path:"/products/:id",
        element: <CurrentProductPage/>
    },
    {
        path: "/create-product",
        element: <CreateProductPage/>
    }
])


export default router