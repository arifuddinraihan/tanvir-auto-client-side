import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Pages/HomePage/Homepage";
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
            }
        ]
    }
])

export default router;