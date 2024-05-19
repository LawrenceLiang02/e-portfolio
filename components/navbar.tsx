import React from 'react'
import Image from "next/image";
import lawrence from '@/public/lawrence_linkedin.jpg'

function navbar() {
  return (
    <div className='fixed top-0 left-0 z-40 w-full h-auto px-40 py-2 scroll-smooth'>
        <div className='text-black w-auto h-auto flex flex-row justify-between items-center px-28 bg-white bg-opacity-80 hover:bg-opacity-90 ease-in-out duration-200 py-6 shadow-md'>
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
    </div>
  )
}

export default navbar