import React from "react";
import { projectItems } from "./type";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard: React.FC<projectItems> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <Image src={imgUrl} alt="img" className="h-52 md:h-72 rounded-t-xl" />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] hidden bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            target="_blank"
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
