"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
              Hello, I'm <br />
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Dev Bisht",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Frontend Developer",
                1000,
                "mobile developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 ">
            Dynamic frontend developer crafting seamless user experiences with
            modern technologies and a passion for design.
          </p>
          <div className="button">
            {/* <button
              className="px-6 py-3 rounded-full mr-4 text-white
             bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200"
            >
              Hire Me!
            </button> */}
            {/* <button
              className="px-1 py-1 rounded-full text-white
             bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gray-900"
            >
              <span className="block rounded-full bg-[#121212] hover:bg-slate-800 px-5 py-2 text-white">
                {" "}
                Online CV
              </span>
            </button> */}
          <a href="#contact">
          <button className="cursor-pointer text-white font-bold relative text-[17px] mr-8 px-6 py-2 text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 z-10 " >
              Hire Me 
            </button>
          </a>
           <a href="https://docs.google.com/document/d/1IJZiH2N6wHmSg_wIhf3vmJAKCbuzPSDf--6ENJdTiLg/edit" target="_blank"> <button className="cursor-pointer text-white font-bold relative text-[17px] px-6 py-2 text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px]  hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 z-10">
            Online CV
            </button></a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/man.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt="hero image"
              width={270}
              height={270}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
