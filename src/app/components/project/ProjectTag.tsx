import React from "react";
import { projectTags } from "./type";

const ProjectTag: React.FC<projectTags> = ({ name, onClick, isSelected }) => {
  const buttonStype = isSelected
    ? "text-white border-purple-500 bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <div>
      <button
        className={`${buttonStype} rounded-full border-2 px-6 py-3 text-xl cursor-pointer `}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};

export default ProjectTag;
