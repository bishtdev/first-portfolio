"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTranstion] = useTransition();

  const handleTabChange = (id) => {
    startTranstion(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          className="rounded-full"
          src="/images/pc.png"
          width={500}
          height={500}
          alt="pc image"
        />
        <div>
          <h2 className="text-4xl font-bold  mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500  ">
            {" "}
            About Me
          </h2>
          <p className="text-base md:text-lg ">
            I am a frontend developer with a passion for creating interactive
            and responsive web application. i have experience working with HTML,
            CSS, JavaScript, React Js, Redux Toolkit, Next Js, handling Api's,
            Tailwind , Bootstrap and web Designing tools like Figma. I am quick
            learner and i am always looking to expand my knowledge and skill
            set. I am team player and i am excited to work with others to create
            amazing application{" "}
          </p>
          <div className="flex flex-row mt-8 gap-4 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            />
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            />
            <TabButton
              selectTab={() => handleTabChange("expereince")}
              active={tab === "expereince"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
