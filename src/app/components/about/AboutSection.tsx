"use client";
import Image from "next/image";
import React, { useTransition, useState, useEffect } from "react";
import aboutMe from "../../../../public/about-image.png";
import TabButton from "./TabButton";
import Aos from "aos";

export const TAB_DATA = [
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
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Patecan Software (intern): Front-end developer (February 2024-April 2024) 
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          data-aos="flip-left"
          src={aboutMe}
          alt="about me"
          width={500}
          height={500}
        />
        <div className="mt-4 md-mt-0 text-left flex flex-col h-full">
          <h2
            data-aos="fade-down-left"
            className="text-4xl font-bold text-white mb-4"
          >
            About Me
          </h2>
          <p data-aos="fade-down-left" className="text-base lg:text-lg ">
            I{"'m"} a Frontend developer, just starting my journey in the world
            of web development. My curiosity and desire to learn led me to join
            working groups, where I had the opportunity to learn from
            experienced colleagues and apply new knowledge into practice. Even
            though I{"'m"} just starting out, I{"'m"} committed to bringing
            value and positive contributions to every project.
          </p>
          <div
            data-aos="fade-left"
            className="flex flex-row justify-start mt-8"
          >
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
            <TabButton
              selectTab={() => {
                handleTabChange("experiences");
              }}
              active={tab === "experiences"}
            >
              Experiences
            </TabButton>
          </div>
          <div className="mt-8" data-aos="fade-up-left">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
