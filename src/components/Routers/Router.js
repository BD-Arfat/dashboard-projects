import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../Dashboard/Dashboard";
import Products from "../Products/Products";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                path : '/',
                element : <Dashboard/>
            },
            {
                path : '/products',
                element : <Products/>
            }
        ]
    }
])