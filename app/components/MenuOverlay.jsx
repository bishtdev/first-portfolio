import React from 'react'
import Navlink from './Navlink'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index)=>(
           <li key={index}>
            <Navlink 
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] 
                sm:text-xl rounded md:p-0 hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            href={link.path}
            title={link.title} />
           </li> 
        ))}
    </ul>
  )
}

export default MenuOverlay