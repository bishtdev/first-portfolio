"use client"
import React from "react";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {


  return (
    <section id="contact" className="grid md:grid-cols-3 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-2xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open,
          whether you have a question or just want to say hi, i will ll try my best
          to get back to you!
        </p>
        
      </div>
      <div className="socials flex flex-col gap-4 justify-center">
          <Link href="https://github.com/bishtdev" target="_blank">
            <p className="text-lg text-white font-bold mb-2">My Github</p>
            <ImGithub className="text-white text-3xl hover:text-purple-500 " />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dev-bisht-332946272/"
            target="_blank"
          >
            <p className="text-lg text-white font-bold mb-2">My Linkedin</p>
            <FaLinkedin className="text-white text-3xl hover:text-purple-500 " />
          </Link>
          
        </div>
        <div>
        <p className="text-lg text-white font-bold mb-2">Gmail <br /> <span className="text-[#ADB7BE] font-mono">bishtdev030@gmail.com</span></p>
          <p className="text-lg text-white font-bold mb-2">Contact No. <br /> <span className="text-[#ADB7BE] font-mono">+91 8860214340</span></p>
        </div>
    </section>
  );
};

export default EmailSection;
