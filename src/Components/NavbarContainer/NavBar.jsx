import React from 'react'
import Logo from './Logo';
import Menu from './Menu';

const NavBar = () => {
  return (
    <section className='h-[20vh] w-full bg-[#8F87F1]'>
        <article>
            <div className='flex h-full items-center justify-between'>
                <div className='h-full'><Logo/></div>
                <div><Menu/></div>
            </div>
        </article>
    </section>
  )
}
export default NavBar;