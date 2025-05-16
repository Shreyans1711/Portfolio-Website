import React from 'react';
import logo from '../assets/Logo.jpg';
import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from 'react-icons/fa';
import { SiCodeforces, SiCodechef } from 'react-icons/si';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <img className="mx-2 w-[125px]" src={logo} alt="Logo" />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shreyans-kothari-3a80a722a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 hover:scale-125 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Shreyans1711"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 hover:scale-125 transition-transform duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://codeforces.com/profile/El-Metador"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <SiCodeforces />
        </a>
        <a
          href="https://www.codechef.com/users/shreyans1711"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-900 hover:scale-125 transition-transform duration-300"
        >
          <SiCodechef />
        </a>
        <a
          href="https://drive.google.com/file/d/1EvunsE0KxHUzb7SIbDAF1ZYAOh3odrP9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg font-medium hover:text-gray-700 hover:scale-110 transition-transform duration-300"
        >
          <FaFilePdf className="mr-2" />
          View CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
