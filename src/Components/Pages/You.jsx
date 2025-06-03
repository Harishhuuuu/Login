import React from 'react'
import { NavLink } from 'react-router-dom'

const You = () => {
  return (
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
        <div className='relative flex w-full h-full'>
        <img style={{ backgroundImage:`url("src/Components/assets/f4.jpeg")`,height:"100%", backgroundSize:"cover",backgroundPosition:"center",Width:"100%",backgroundRepeat:"no-repeat",}} src='src/Components/assets/f4.jpeg' className='w-full h-full relative'/>
        <section className='absolute  w-full h-full'>
            <ul className='flex flex-col w-full h-full justify-evenly absolute text-2xl'>
                <div className='w-[100%] justify-evenly p-2 flex'>
                <li className=''>
                    <NavLink to="/you1"><button className='w-[100%] border-black border-4  rounded-2xl focus:bg-purple-400 backdrop-brightness-90 p-2'> <h1>You 1</h1></button></NavLink>
                </li>
                <li className='' >
                    <NavLink to="/you2"><button className='w-[100%] border-black border-4  rounded-2xl focus:bg-purple-400 backdrop-brightness-90 p-2'> <h1>You 2</h1></button></NavLink>
                </li>
                <li className=''>
                    <NavLink to="/you3"><button className='w-[100%] border-black border-4  rounded-2xl focus:bg-purple-400 backdrop-brightness-90 p-2'> <h1>You 3</h1></button></NavLink>
                </li>
                </div>
                <div className='w-[100%] flex justify-evenly p-2'>
                <li className=''>
                    <NavLink to="/you4"><button className='w-[100%] border-black border-4  rounded-2xl focus:bg-purple-400 backdrop-brightness-90 p-2'> <h1>You 4</h1></button></NavLink>
                </li>
                <li className=''>
                    <NavLink to="/you5"><button className='w-[100%] border-black border-4  rounded-2xl focus:bg-purple-400 backdrop-brightness-90 p-2'> <h1>You 5</h1></button></NavLink>
                </li>
                <li className=''>
                    <NavLink to="/you6"><button className='w-[100%] border-black border-4  rounded-2xl focus:bg-purple-400 backdrop-brightness-90 p-2'> <h1>You 6</h1></button></NavLink>
                </li>
                </div>
                <div className='w-[100%] flex justify-evenly p-2'>
                <li className=''>
                    <NavLink to="/you7"><button className='w-[100%] border-black border-4  rounded-2xl focus:bg-purple-400 backdrop-brightness-90 p-2'> <h1>You 7</h1></button></NavLink>
                </li>
                <li className=''>
                    <NavLink to="/you8"><button className='w-[100%] border-black border-4  rounded-2xl focus:bg-purple-400 backdrop-brightness-90 p-2'> <h1>You 8</h1></button></NavLink>
                </li>
                <li className=''>
                    <NavLink to="/you9"><button className='w-[100%] border-black border-4  rounded-2xl focus:bg-purple-400 backdrop-brightness-90 p-2'> <h1>You 9</h1></button></NavLink>
                </li>
                </div>
            </ul>
            </section>
        </div>
      </article>
    </section>
  )
}

export default You