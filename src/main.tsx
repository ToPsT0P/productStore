import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {setupStore} from "./app/store/store.ts";
import Navbar from "./widgets/Navbar/Navbar.tsx";

const store = setupStore()

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Navbar/>
        <App />
    </Provider>
)
