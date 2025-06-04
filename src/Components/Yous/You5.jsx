import React from 'react'
import './You1.css'
import { NavLink } from 'react-router-dom'
import zz from "../assets/zz.jpg"

const You5 = () => {
  return (
    <div>
        <section>
            <article>
            <section>
            <article className="h-[20vh] border-3 border-[#FED2E2]  bg-[#8F87F1] flex justify-evenly items-center">
                <div className="aaaa  overflow-scroll ">
                    <ul className="text-white flex justify-evenly gap-3 m-4">
                        <li><NavLink to="/Home"><button className="border-4 h-[100%] p-2 w-[100%] bg-[#8F87F1]  px-8 border-[#FED2E2] ">home</button></NavLink></li>
                        <li><NavLink to="/you"><button className="border-4 h-[100%] p-2 w-[100%] bg-[#8F87F1]  px-8 border-[#FED2E2] ">you</button></NavLink></li>
                        <li><NavLink to="/notes"><button className="border-4 h-[100%] p-2 w-[100%] bg-[#8F87F1]  px-8 border-[#FED2E2] ">notes</button></NavLink></li>
                    </ul>
                </div>

            </article>
        </section>
                <div className=' flex w-full h-full relative'>
                    <img style={{ backgroundImage:`url("src/Components/assets/zz.jpg")`,height:"100%", backgroundSize:"cover",backgroundPosition:"center",Width:"100%",backgroundRepeat:"no-repeat",}} src={zz} className='w-full h-full relative'/>
                    <div className='w-full h-[100%] absolute text-white p-[1%] overflow-scroll '>
                        <h1 className='absolute right-0 top-[47%] ff'></h1>
                        <h1 className='fff'></h1>
                    </div>
                </div>
            </article>
        </section>
    </div>
  )
}

export default You5