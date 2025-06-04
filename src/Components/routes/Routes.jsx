import { createBrowserRouter,RouterProvider,createHashRouter,HashRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from './../Pages/Home';
import Login from "../Pages/Login";
import Notes from "../Pages/Notes";
import You from "../Pages/You";
import You1 from './../Yous/You1';
import You2 from "../Yous/You2";
import You3 from "../Yous/You3";
import You4 from "../Yous/You4";
import You5 from "../Yous/You5";
import You6 from "../Yous/You6";
import You7 from "../Yous/You7";
import You8 from "../Yous/You8";
import You9 from "../Yous/You9";


let myroutes=createHashRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[{
            path:"/Home",
            element:<Home/>,
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/notes",
            element:<Notes/>
        },
        {
            path:"/you",
            element:<You/>,
        },
        {
            path:"/you1",
            element:<You1/>
        },
        {
            path:"/you2",
            element:<You2/>
        },
        {
            path:"/you3",
            element:<You3/>
        },
        {
            path:"/you4",
            element:<You4/>
        },
        {
            path:"/you5",
            element:<You5/>
        },
        {
            path:"/you6",
            element:<You6/>
        },
        {
            path:"/you7",
            element:<You7/>
        },
        {
            path:"/you8",
            element:<You8/>
        },
        {
            path:"/you9",
            element:<You9/>
        }]
    }
]);
export default myroutes;