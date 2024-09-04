import {RouterProvider} from "react-router-dom";
import router from "./router/router.tsx";
import {useAppDispatch} from "../shared/hooks/redux.ts";
import {useEffect} from "react";
import {fetchProducts} from "./store/reducers/ActionCreater.ts";


function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

  return (
      <div className="">
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
