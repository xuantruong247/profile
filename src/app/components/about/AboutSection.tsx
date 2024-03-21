"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import aboutMe from "../../../../public/about-image.png";
import TabButton from "./TabButton";
import { TAB_DATA } from "../../../utils/constant";

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
          <p className="text-base lg:text-lg ">
            I'm a Frontend developer, just starting my journey in the world of
            web development. My curiosity and desire to learn led me to join
            working groups, where I had the opportunity to learn from
            experienced colleagues and apply new knowledge into practice. Even
            though I'm just starting out, I'm committed to bringing value and
            positive contributions to every project.
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
