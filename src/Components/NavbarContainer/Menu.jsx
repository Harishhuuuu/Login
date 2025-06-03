import React from "react";
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return(
        <section>
            <article className="h-[20vh]   flex justify-evenly items-center">
                <div className="">
                    <ul className="text-white flex ">
                        <li><button className=" h-[100%] p-2 w-[100%]  px-8 border-8 border-fuchsia-700 "><NavLink to="/login">Log in</NavLink></button></li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Menu;