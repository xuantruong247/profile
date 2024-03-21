"use client";
import { projectsData } from "@/utils/constant";
import React, { useState } from "react";
import { ProjectCard } from "..";
import ProjectTag from "./ProjectTag";

const ProjectSection = () => {
  const [tag, setTag] = useState<string>("ALL");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData?.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <>
      <h2 className="text-4xl text-center font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "ALL"}
          name="ALL"
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Projects"}
          name="Projects"
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Experiences"}
          name="Experiences"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((product) => (
          <ProjectCard
            key={product.id}
            title={product.title}
            imgUrl={product.image}
            description={product.description}
            time={product.time}
            postion={product.postion}
            tag={product}
            gitUrl={product.gitUrl}
            previewUrl={product.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
