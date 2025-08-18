import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
//icons
import { TiHomeOutline } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { navigation } from '../data';




export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-customBlue via-customPurple to-customOrange w-full">
      <nav className="mx-auto flex items-center justify-between p-6 px-8" aria-label="Global">
        {/* Logo and Site Name */}
        <div className="flex lg:flex-1 items-center">
          <img src="/imvse-pc/logo.png" alt="IMVSE Logo" className="w-14 transition-transform duration-300 hover:scale-105" />
          <Link to="/home" className="-m-1.5 p-4 hover:text-gray-600 transition-all duration-300">
            <span className="text-customOrange text-3xl font-extrabold">IMVSE</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="flex gap-x-5 mx-2">
          <Link 
            to="/home" 
            className="text-base font-semibold leading-6 transition-all duration-300 flex items-center gap-2"
          >
            <TiHomeOutline className={`w-6 h-6 transition-transform duration-300 hover:scale-110 ${location.pathname === '/home' ? 'w-7 h-7 text-customOrange font-extrabold text-xl' : 'text-gray-200'}`} />
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base font-semibold leading-6 transition-all duration-300
                ${location.pathname === item.href 
                  ? 'border-b-2 border-customOrange text-customOrange font-extrabold text-xl hover:text-customOrange' 
                  : 'text-gray-200 hover:text-white hover:border-b-2 hover:border-white'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* search bar */}
        

        {/* Login Section */}
        <div className="flex lg:flex-1 justify-center items-end flex-col gap-4">
          <Link
            to="/home"
            className="flex text-sm font-semibold leading-6 text-gray-200 hover:text-white transition-all duration-300 items-center group hover:scale-110"
          >
            <FaUserCircle className="w-6 h-6 mr-2 transition-transform duration-300" />
            Log in 
            <span aria-hidden="true" className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
              to="/contact"
              className={`text-base font-semibold leading-6 transition-all duration-300 inline-block
                ${location.pathname === "/contact"
                  ? 'border-b-2 border-customBlue text-customBlue font-extrabold text-xl hover:text-customBlue' 
                  : 'text-gray-200 hover:text-white hover:border-b-2 hover:border-white'}`}
            >
              Join the IMVSE
            </Link>
          
        </div>
      </nav>
    </header>
  );
} 