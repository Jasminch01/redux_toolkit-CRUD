import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import AddBooks from "../Pages/AddBooks";
import ShowBooks from "../Pages/ShowBooks";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : '/add-books',
                element : <AddBooks/>
            },
            {
                path : '/show-books',
                element : <ShowBooks/>
            }
        ]
    }
])

export default Router;