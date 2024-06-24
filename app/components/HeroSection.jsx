import React from "react";
import Image from "next/image";


const HeroSection = () => {
  return (
    <section>
     <div className="grid grid-cols-1 lg:grid-cols-12">
     <div className="col-span-7 place-self-center">
     <h1 className="text-white mb-4 text-4xl  lg:text-6xl font-extrabold">Hello, I'm Dev Bisht</h1>
      <p className="text-[#ADB7BE] text-lg mb-6 ">
        Dynamic frontend developer crafting seamless user experiences with
        modern technologies and a passion for design.
      </p>
      <div>
        <button className="px-6 py-3 rounded-full mr-4 text-black bg-white hover:bg-slate-200">Hire Me!</button>
        <button className="px-6 py-3 rounded-full text-white  border border-white bg-black hover:bg-gray-900">Online CV</button>
      </div>
     </div>
     <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative">
        <Image
         src='/images/man.png'
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
