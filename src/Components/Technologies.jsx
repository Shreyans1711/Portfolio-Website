import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGithub } from "react-icons/fa"; // Font Awesome icons
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiSocketdotio, SiCplusplus, SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";
import { GiDuration } from 'react-icons/gi';

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y : [10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{y:-100,opacity:0}} transition={{duration:0.5, delay:0.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{opacity:1, x:0}} initial={{x:-100,opacity:0}} transition={{duration:0.5, delay:0.5}} className='flex flex-wrap items-center justify-center gap-4'>

                <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className='text-7xl text-red-500'/>
                </motion.div>
                
                <motion.div variants={iconVariants(2.25)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className='text-7xl text-cyan-400'/>
                </motion.div>

                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJs className='text-7xl text-yellow-400'/>
                </motion.div>

                <motion.div variants={iconVariants(2.75)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className='text-7xl text-cyan-400'/>
                </motion.div>

                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl text-cyan-400'/>
                </motion.div>

                <motion.div variants={iconVariants(3.25)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-400'/>
                </motion.div>

                <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl'/>
                </motion.div>

                <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiSocketdotio  className='text-7xl text-neutral-200'/>
                </motion.div>

                <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCplusplus   className='text-7xl text-blue-600'/>
                </motion.div>

                <motion.div variants={iconVariants(4.25)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMysql   className='text-7xl text-neutral-200'/>
                </motion.div>

                <motion.div variants={iconVariants(3.75)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGithub   className='text-7xl text-neutral-200'/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
