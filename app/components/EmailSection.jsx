import React from 'react'
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div >
            <h5 className='text-xl font-bold text-white my-2'>
                Let's Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                I'm currently looking for new opportunities, my inbox is always open, 
                whether you have a question or just want to say hi, i'll try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='https://github.com/bishtdev' target='_blank'>
                    <ImGithub />
                </Link>
                <Link href='https://www.linkedin.com/in/dev-bisht-332946272/' target='_blank'>
                    <FaLinkedin />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default EmailSection