"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import aboutMe from "../../../public/about-image.png";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js Express</li>
        <li>Javascrip Reactjs Nextjs Typescript</li>
        <li>Antd Boostrap Tailwindcss</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Greenwich</li>
        <li>Front-End Developer CyberSoft Academy</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Information Technology</li>
        <li>Professional Front-End Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={aboutMe} alt="about me" width={500} height={500} />
        <div className="mt-4 md-mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            molestias vel obcaecati corrupti consectetur libero dolore, nihil
            blanditiis, ratione eaque beatae unde quis mollitia, quo qui dolor
            cupiditate perferendis officia. Tenetur modi id magnam suscipit,
            assumenda illo? Deleniti ut totam earum illum id ducimus, libero
            quod eveniet, nihil minus neque facere quaerat placeat quisquam?
            Commodi ducimus rerum iure beatae ad!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => {
                handleTabChange("skills");
              }}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("education");
              }}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("certifications");
              }}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
