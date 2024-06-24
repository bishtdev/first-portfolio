import React from "react";
import Link from "next/link";
import Navlink from "./Navlink";


const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={'/'} className="text-5xl font-bold px-3 py-4
         text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Portfolio</Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
                <li> <Navlink href={'#about'} title={'About'}/></li>
                <li> <Navlink href={'#projects'} title={'Projects'}/></li>
                <li> <Navlink href={'#contact'} title={'Contact'}/></li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
