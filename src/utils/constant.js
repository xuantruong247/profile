import project1 from "../../public/project-1.jpg";
import patecan1 from "../../public/patacan-1.png";

export const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects & Experiences", path: "#projects&experiences" },
  { title: "Contact", path: "#contact" },
];

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
];

export const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description:
      "Our e-commerce project is an online shopping platform with a variety of products, from fashion to technology. We provide a convenient and safe shopping experience for customers, with smart search, diverse payments and fast delivery. Our platform also supports the local sales community and promotes products effectively.",
    image: project1,
    tag: ["ALL", "Projects"],
    gitUrl: "https://github.com/xuantruong247/final-1682",
    previewUrl: "https://perfume-tau.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "Our e-commerce project is an online shopping platform with a variety of products, from fashion to technology. We provide a convenient and safe shopping experience for customers, with smart search, diverse payments and fast delivery. Our platform also supports the local sales community and promotes products effectively.",
    image: project1,
    tag: ["ALL", "Projects"],
    gitUrl: "https://github.com/xuantruong247/final-1682",
    previewUrl: "https://perfume-tau.vercel.app/",
  },
  {
    id: 4,
    title: "E-commerce Application",
    description:
      "Our e-commerce project is an online shopping platform with a variety of products, from fashion to technology. We provide a convenient and safe shopping experience for customers, with smart search, diverse payments and fast delivery. Our platform also supports the local sales community and promotes products effectively.",
    image: project1,
    tag: ["ALL", "Projects"],
    gitUrl: "https://github.com/xuantruong247/final-1682",
    previewUrl: "https://perfume-tau.vercel.app/",
  },
  {
    id: 2,
    title: "Patecan Software",
    time: "February 2024 - April 2024",
    postion: "Intern",
    description:
      "I interned and worked here as a front-end developer. Work within the Scrum/Agile SDLC model, collaborating with designers and backend teams ensuring customer needs are met.",
    image: patecan1,
    tag: ["ALL", "Experiences"],
    gitUrl: "https://www.patecan.com/",
    previewUrl: "https://phucuonghome.com/",
  },
  {
    id: 5,
    title: "Patecan Software",
    time: "February 2024 - April 2024",
    postion: "Intern",
    description:
      "I interned and worked here as a front-end developer. Work within the Scrum/Agile SDLC model, collaborating with designers and backend teams ensuring customer needs are met.",
    image: patecan1,
    tag: ["ALL", "Experiences"],
    gitUrl: "https://www.patecan.com/",
    previewUrl: "https://phucuonghome.com/",
  },
  {
    id: 6,
    title: "Patecan Software",
    time: "February 2024 - April 2024",
    postion: "Intern",
    description:
      "I interned and worked here as a front-end developer. Work within the Scrum/Agile SDLC model, collaborating with designers and backend teams ensuring customer needs are met.",
    image: patecan1,
    tag: ["ALL", "Experiences"],
    gitUrl: "https://www.patecan.com/",
    previewUrl: "https://phucuonghome.com/",
  },
];
