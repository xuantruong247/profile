"use client";
import { projectsData } from "@/utils/constant";
import React, { useEffect } from "react";
import { ProjectCard } from "..";
import Aos from "aos";

const ProjectSection = () => {



  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects">
      <h2
        className="text-4xl text-center font-bold text-white mt-4"
        data-aos="fade-down"
      >
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-8">
        {projectsData.map((product) => (
          <ProjectCard
            key={product.id}
            title={product.title}
            imgUrl={product.image}
            description={product.description}
            gitUrl={product.gitUrl}
            previewUrl={product.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
