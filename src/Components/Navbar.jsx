import React from 'react';
import logo from '../assets/Logo.jpg'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiCodeforces, SiCodechef } from "react-icons/si";

const Navbar = () => {
    return <nav className='mb-20 flex items-center justify-between py-6'> 
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-[100px]' src = {logo} alt="" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/shreyans-kothari-3a80a722a/" target='_blank' rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-125 transition-transform duration-300" >
                    <FaLinkedin />
                </a> 
                <a href="https://github.com/Shreyans1711" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                    <FaGithub/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transition-transform duration-300">
                    <FaInstagram/>
                </a>
                <a href="https://codeforces.com/profile/El-Metador" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                    <SiCodeforces />
                </a>
                <a href="https://www.codechef.com/users/shreyans1711" target="_blank" rel="noopener noreferrer" className="hover:text-amber-900 hover:scale-125 transition-transform duration-300">
                    <SiCodechef />
                </a>
            </div>
        </nav>;
};

export default Navbar
