import {RouterProvider} from "react-router-dom";
import router from "../router/router.tsx";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {useEffect} from "react";
import {fetchProducts} from "../store/reducers/ActionCreater.ts";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

  return (
      <div className="overflow-x-hidden">
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
