import React from "react";
import { RouterProvider } from "react-router-dom";
import myroutes from "./Components/routes/Routes";
import NavBar from './Components/NavbarContainer/NavBar';
import Login from "./Components/Pages/Login";
import Maybeshownavbar from "./Components/Maybeshownabar/Maybeshownavbar";
import { basename } from './../node_modules/upath/upath.d';
const App=()=>{
    return (
        <section>
            <article>
                <div>
                    <RouterProvider basename="/Login" router={myroutes}>
                  
                    <NavBar/>
                   
                    <Login/>
                    </RouterProvider>
                </div>
            </article>
        </section>
    );
}
export default App;