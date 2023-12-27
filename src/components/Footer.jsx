import React from 'react';
import logo from '../assets/logo2.svg'
import discord from '../assets/discord.svg'
import instagram from '../assets/instagram-fill.svg'
import tiktok from '../assets/tiktok.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 text-primary">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo */}
        <div className="w-full md:w-1/4 mb-6 md:mb-[-3rem] ml-5">
            <img src={logo} alt="" />
        </div>

        {/* Navigation */}
        <div className="w-full md:w-1/4 ml-5">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://vLimax24.github.io/portfolio" className="hover:text-gray-300 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300 transition duration-300">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/4 ml-5 mt-5">
          <h2 className="text-lg font-semibold mb-4">Connect With Us</h2>
          <div className="flex space-x-4">
            <a href="" className="text-xl hover:text-gray-300 transition duration-300">
              <img src={discord} alt="" className='w-10 h-7'/>
            </a>
            <a href="#" className="text-xl hover:text-gray-300 transition duration-300">
              <img src={youtube} alt="" className='w-10 h-7'/>            
            </a>
            <a href="#" className="text-xl hover:text-gray-300 transition duration-300">
              <img src={instagram} alt="" className='w-10 h-7'/>
            </a>
            <a href="#" className="text-xl hover:text-gray-300 transition duration-300">
              <img src={tiktok} alt="" className='w-10 h-7'/>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/4 ml-5 mt-5">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>Email: delgixstudios@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Delgix Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;