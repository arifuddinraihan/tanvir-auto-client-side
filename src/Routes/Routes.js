import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout/Checkout";
import Homepage from "../Pages/HomePage/Homepage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ErrorPage from "../Pages/Shared/Error404/ErrorPage";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Homepage></Homepage>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/checkout/:id',
                element : <Checkout></Checkout>,
                loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])

export default router;