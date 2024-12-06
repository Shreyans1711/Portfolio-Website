import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa"; // Font Awesome icons
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiSocketdotio, SiCplusplus } from "react-icons/si";

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <div className='flex flex-wrap items-center justify-center gap-4'>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className='text-7xl text-red-500'/>
                </div>
                
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className='text-7xl text-cyan-400'/>
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJs className='text-7xl text-yellow-400'/>
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className='text-7xl text-cyan-400'/>
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl text-cyan-400'/>
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-400'/>
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl'/>
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiSocketdotio  className='text-7xl text-neutral-200'/>
                </div>

                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCplusplus   className='text-7xl text-blue-600'/>
                </div>
            </div>
        </div>
    )
}

export default Technologies
