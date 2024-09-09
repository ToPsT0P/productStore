import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (

        <div className="w-screen h-screen bg-black flex justify-center items-center">
            <div className="w-1/2 h-1/5 min-w-80 min-h-44 flex justify-center flex-wrap">
                <h1 className="text-white text-4xl">Такой страницы не существует...</h1>
                <h3 className="text-white text-2xl">Возможно вы хотели зайти на страницу <Link className="text-green-300" to={"/productStore/products"}> Тык </Link> где находиться листинг товаров</h3>
            </div>
        </div>

    );
};

export default ErrorPage;