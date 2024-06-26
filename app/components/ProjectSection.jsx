"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "A Workout App",
    description:
      "this React js App helps you customize your fitness journey, generating tailored workout plans for various preference and goals",
    image: "/images/projects/workout-app.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/bishtdev/gym-app",
    previewUrl: "https://workoutapp-devbisht.netlify.app/",
  },
  {
    id: 2,
    title: "Spotify Clone",
    description:
      "A spotify clone with actual music player made with react and tailwind",
    image: "/images/projects/spotify-clone.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/bishtdev/spotify-clone",
    previewUrl: "https://spotify-devbisht.netlify.app/",
  },
  {
    id: 3,
    title: "A CRUD email Contact app ",
    description:
      "An App using React and firebase as a backend server, in which you can add delete and update your email with search functionality",
    image: "/images/projects/firebase-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/bishtdev/email-contact-app",
    previewUrl: "https://firebase-email-contacts-devbisht.netlify.app/",
  },
  {
    id: 4,
    title: "A myntra Clone",
    description:
      "Famous ecommerce website myntra clone with react and bootstrap ",
    image: "/images/projects/myntra-clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bishtdev/myntra-clone",
    previewUrl: "https://ecommerce-devbisht.netlify.app/",
  },
  {
    id: 5,
    title: "A dice game ",
    description: "A simple dice Game using react and bootstrap",
    image: "/images/projects/dice-game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bishtdev/dice-game",
    previewUrl: "https://dice-game-devbisht.netlify.app/",
  },
  {
    id: 6,
    title: "Nike landing page",
    description: "A simple nike landing page made with React and tailwindCSS",
    image: "/images/projects/nike-page.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/bishtdev/nike-website",
    previewUrl: "https://nike-app-devbisht.netlify.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterProject = projectsData.filter((project) => 
   project.tag.includes(tag))

  return (
    <>
      <h2 className="text-center text-white font-bold text-4xl mt-4 mb-8 md:mb-8">
        My Projects
      </h2>

      <div id="projects" className="text-white flex flex-row justify-center items-center gap-4 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProject.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
