"use client"
import React, { useState } from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import MenuOverlay from "./MenuOverlay";


const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const navLInks = [
    {
      title: 'About',
      path: '#about'
    },
    {
      title:'Projects',
      path:'#project'
    },
    {
      title:'Contact',
      path:'#contact'
    }
  ]


  return (

    <nav className="fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link href={'/'} className="text-3xl sm:text-5xl font-bold px-3 py-4
         text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Portfolio</Link>
        <div className="mobile-menu block md:hidden">
          { 
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" >
                <GiHamburgerMenu className="h-5 w-5"/>
                </button>
            ):(
              <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <IoCloseOutline className="h-5 w-5 "/>
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
                <li> <Navlink href={'#about'} title={'About'}/></li>
                <li> <Navlink href={'#projects'} title={'Projects'}/></li>
                <li> <Navlink href={'#contact'} title={'Contact'}/></li>
            </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLInks} /> : null}
    </nav>
  );
};

export default Navbar;
