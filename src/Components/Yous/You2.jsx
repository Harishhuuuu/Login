import React from 'react'
import './You1.css'
import { NavLink } from 'react-router-dom'
import s2 from "../assets/s2.jpeg"

const You2 = () => {
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
                    <img style={{ backgroundImage:`url("src/Components/assets/s2.jpeg")`,height:"100%", backgroundSize:"cover",backgroundPosition:"center",Width:"100%",backgroundRepeat:"no-repeat",}} src={s2} className='w-full h-full relative'/>
                    <div className='w-full h-[100%] absolute text-white p-[5%] overflow-scroll '>
                        <h1 className=' fff'>Fiza,
Adikadi na aprm pesalaam nu sollirupen,
sila vaati msg ah paathutuka maten, 
Enake theriyudhu namma pesura konja time a kuda na innum kammi panniduren nu,
Aana Na edhayum Venum nu pannala ,
Timeing apdi Iruku enaku , 
Innaiku 27 april 25 innai la irundhu na apdi aprm pesalaam ,class Iruku,veliya ponum nu solluradhellam kammi pannanum nu try pandren.

Sorry....</h1>
                        <h1 className='fff'></h1>
                    </div>
                </div>
            </article>
        </section>
    </div>
  )
}

export default You2