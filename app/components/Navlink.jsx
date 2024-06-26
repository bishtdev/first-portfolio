import Link from "next/link";
import React from "react";

const Navlink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 mr-4 text-[#ADB7BE] 
                sm:text-xl rounded md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
    >
      {title}
    </Link>
  );
};

export default Navlink;
