import React, { useState } from 'react';
import logo from '../assets/logo2.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = (event) => {
    event.stopPropagation(); // Stop event propagation
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className="w-full typo z-[99] pt-5 mb-10 top-0 left-0 transition-all duration-500 flex items-center justify-between">
      <div className="scale-50">
        <img src={logo} alt="" draggable='false'/>
      </div>
      <div className="justify-between max-h-[80px] hidden md:flex transition-all duration-500">

        <div className="flex items-center transition-all duration-500 ">
            <ul className="flex items-end mr-[6.5rem] transition-all duration-500">
            <li className="m-3 z-[99]">
                <a href="#about" className="text-[1.2em] lg:text-[1.35em] xl:text-[1.45em] 2xl:text-[1.5em] text-primary font-normal navbarLink relative transition-all duration-500 hover:text-secondary hover:scale-105">
                ABOUT
                </a>
            </li>
            <li className="m-3 z-[99]">
                <a href="#projects" className="text-[1.2em] lg:text-[1.35em] xl:text-[1.45em] 2xl:text-[1.5em] text-primary font-normal navbarLink relative transition-all duration-500 hover:text-secondary hover:scale-105">
                PROJECTS
                </a>
            </li>
            <li className="m-3 z-[99]">
                <a href="#contact" className="text-[1.2em] lg:text-[1.35em] xl:text-[1.45em] 2xl:text-[1.5em] text-primary font-normal navbarLink relative transition-all duration-500 hover:text-secondary hover:scale-105">
                CONTACT
                </a>
            </li>
            <li className="m-3 z-[99]">
                <a href="https://github.com/vLimax24" className="text-[1.2em] lg:text-[1.35em] xl:text-[1.45em] 2xl:text-[1.5em] text-primary font-normal navbarLink relative transition-all duration-500 hover:text-secondary hover:scale-105">
                GITHUB
                </a>
            </li>
            <li className="m-3 z-[99]">
                <a href="#" className="text-[1.2em] lg:text-[1.35em] xl:text-[1.45em] 2xl:text-[1.5em] text-primary font-normal navbarLink relative transition-all duration-500 hover:text-secondary hover:scale-105">
                TECHSTACK
                </a>
            </li>
            </ul>

        </div>


      </div>
      <div className='mr-20 hidden md:flex'>
              <span className='font-black text-primary'>EN</span>
      </div>
      <div className="flex md:hidden text-[#FFF] z-[999999] justify-end  items-center mr-10 scale-125 transition-all duration-500">
            <button onClick={toggleMenu} className="rounded-[50%] p-3 h-10 w-10 flex items-center jsutify-center transition-all duration-500">
             <i className="fa fa-bars text-primary hover:text-secondary duration-300 transition-all hover:scale-[1.03]"></i>
            </button>
        </div>
      {/* Hamburger menu */}
      <div
        className={`${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 left-0 h-full w-full bg-[#55a8a1] z-[999999] typoRounded transition-transform duration-500 ease-in-out overflow-hidden text-[#FFF]`}
      >
        <div className="flex justify-end p-4 transition-all duration-300 mr-3">
          <button className="text-black font-bold text-[32px] hover:rotate-[90deg] transition-all duration-500" onClick={toggleMenu}>
          &#10006;
          </button>
        </div>
        <ul className="flex flex-col items-end mr-4">
        <li className="m-3 hover:scale-125 duration-300 transition-all origin-right" onClick={(event) => closeMenu(event)}>
            <a href="#about" className="text-[3em] text-black font-black hover:scale-150 duration-300 transition-all">
              ABOUT
            </a>
          </li>
          <li className="m-3 hover:scale-125 duration-300 transition-all origin-right" onClick={(event) => closeMenu(event)}>
            <a href="#projects" className="text-[3em] text-black font-black hover:scale-150 duration-300 transition-all">
              PROJECTS
            </a>
          </li>
          <li className="m-3 hover:scale-125 duration-300 transition-all origin-right" onClick={(event) => closeMenu(event)}>
            <a href="#contact" className="text-[3em] text-black font-black hover:scale-150 duration-300 transition-all">
              CONTACT
            </a>
          </li>
          <li className="m-3 hover:scale-125 duration-300 transition-all origin-right" onClick={(event) => closeMenu(event)}>
            <a href="https://github.com/vlimax24" className="text-[3em] text-black font-black hover:scale-150 duration-300 transition-all">
              GITHUB
            </a>
          </li>
          <li className="m-3 hover:scale-125 duration-300 transition-all origin-right" onClick={(event) => closeMenu(event)}>
            <a href="#" className="text-[3em] text-black font-black hover:scale-150 duration-300 transition-all">
              TECHSTACK
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};








export default Navbar;
