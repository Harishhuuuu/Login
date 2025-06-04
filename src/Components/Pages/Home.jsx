import React from 'react'
import { NavLink } from 'react-router-dom';
import f2 from "../assets/f2.jpeg"

const Home = () => {
  return (
    <div className=''>
      <section className='sticky top-0 z-20  '>
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
        <div className='relative z-10 w-[100%] '>
        <img style={{ backgroundImage:`url("src/Components/assets/f1.jpeg")`,height:"100%", backgroundSize:"cover",backgroundPosition:"center",Width:"100%",backgroundRepeat:"no-repeat",}} src={f2} className='w-full h-full relative'/>
        <section className='absolute top-3 w-full flex-col overflow-y-scroll h-[90%]'>
        <h1 className='  text-[white] text-8xl px-[5%]'>Hi,</h1>
        <h1 style={{ lineHeight: "2.5" }} className=' flex-wrap text-[white] text-5xl whitespace-pre-wrap tracking-[3px] px-[8%] '>epdi   irukeenga   neenga   idha   paakureenga   na   kadaisiya   idha   muchiten   nu   nenaikure   idha   seiya   aaarambichi   innaioda   15   naal   aavudhu 
          idha   edhuku   seiren   nu   therla   but   edhacha   seiyanum   pola   irundhuchu   seri   idhula   na   enna   laa   panniruken   nu   suthi   paarunga   byee..
        </h1>
        </section>
        </div>
    </div>
  )
}

export default Home