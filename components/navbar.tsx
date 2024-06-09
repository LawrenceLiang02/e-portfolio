"use client"
import React, { useState } from 'react'
import Image from "next/image";
import lawrence from '@/public/lawrence_linkedin.jpg'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  function setFalse() {
    setMobileOpen(false);
    document.body.style.overflow = 'unset';
  }

  return (
    <div className='fixed top-0 right-0 z-40 w-full h-auto lg:px-40 lg:py-2 lg:scroll-smooth'>
        <div className='hidden text-black w-auto h-auto lg:flex flex-row justify-between items-center px-28 bg-white bg-opacity-80 hover:bg-opacity-90 ease-in-out duration-200 hover:py-6 py-3 shadow-md'>
            <a href="/#home" className='flex flex-row justify-between items-center space-x-4'>
                <Image
                className='rounded-full w-12 h-12'
                src={lawrence}
                alt="Lawrence Liang"
                />
                <div className='text-2xl semi-bold font-poetsen'>Lawrence Liang</div>
            </a>

            <div className='flex flex-row justify-between items-center space-x-2 font-exo-2'>
                <a className='navbar-item' href="/#aboutme">About Me</a>
                <a className='navbar-item' href="/#projects">Projects</a>
                <a className='navbar-item' href="/#contactme">Contact Me</a>
                <p className = "py-4 border-l border-black"></p>
                <button className='navbar-item'>CV</button>
            </div>
        </div>

          <div className="lg:hidden flex items-center flex-row justify-end z-20 p-4 text-[#FFD700] w-full h-full ">
            <button onClick={() => setMobileOpen(!mobileOpen)} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div className = {`z-30 flex flex-row items-start justify-end h-full visible lg:invisible absolute inset-y-0 w-full min-h-screen right-0 transform duration-700 ease-out  ${mobileOpen ? '-translate-x-0' : 'translate-x-full'}`}>
            <div className='flex flex-col justify-start items-end w-2/5 h-full'  onClick={setFalse}>
            </div>

            <div className=' w-3/5 bg-white bg-opacity-90 h-full flex flex-col justify-center items-center font-exo-2'>
                <a className='navbar-item-mobile' href="/#aboutme">About Me</a>
                <a className='navbar-item-mobile' href="/#projects">Projects</a>
                <a className='navbar-item-mobile' href="/#contactme">Contact Me</a>
                <div className="h-1 w-1/2 bg-neutral-300 rounded-full"> </div>
                <button className='navbar-item-mobile'>CV</button>
            </div>
          </div>
    </div>
  )
}

export default Navbar