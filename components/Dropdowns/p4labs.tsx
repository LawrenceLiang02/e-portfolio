'use client'
import React, { useState } from 'react'
import logo from '@/public/p4labs_logo.png'
import Image from "next/image";

function P4LABS() {
    const [isExtendedCAE, setExtendCAE] = useState(false);
    return (
        <div className='flex flex-col w-full h-auto hover:scale-[102%]'>
            <div onClick={() => setExtendCAE(!isExtendedCAE)} className={` ${isExtendedCAE ? "z-10": "z-30"} flex flex-row bg-white rounded-2xl w-full h-auto justify-around items-center shadow-lg px-6 py-4 ease-in-out duration-200 hover:cursor-pointer space-x-6 font-exo-2`}>
                <Image
                    className='w-20 h-auto ease-in-out duration-200 hover:cursor-pointer'
                    src={logo}
                    alt="P4Labs"
                />
                <div className="flex flex-col space-y">
                    <p className="text-md">Software Developer Intern</p>
                    <p className="text-md font-semibold text-blue-400">P4Labs</p>
                    <p className="">Mar 2021 – May 2021</p>
                </div>

                <div className={`${isExtendedCAE ? "rotate-90" : "rotate-0"} ease-in-out duration-500`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 hover:scale-[130%] ease-in-out duration-200 text-slate-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            
            </div>

            <div className={` ${isExtendedCAE ? "-translate-y-6 opacity-100 z-11 h-auto ": "-translate-y-full opacity-0 z-0 h-0"} bg-[#fcfcfc] w-full rounded-b-lg shadow-lg ease-in-out duration-200`} >
                <ul className={`${isExtendedCAE ? "": "hidden "}list-disc px-8`}>
                    <li></li>
                    <li className='py-2'>Developed a curriculum of Arduino projects using C++ and Arduino library to help teenagers learn robotics.</li>
                    <li className='py-2'>Created web pages with Vue.js and markdown files to dynamically display the projects on the website.</li>
                </ul>
            </div>
            
        </div>
        
        
    )
}

export default P4LABS