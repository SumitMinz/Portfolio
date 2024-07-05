import {
  FaDiagramProject,
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Todo, Natours, Sorting } from "../assets";

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: SiLeetcode,
    uril: "https://leetcode.com/u/sumit_minz24/",
    color: "#F3FF90",
  },
  {
    id: `youtube-${Date.now()}`,
    Icon: SiGeeksforgeeks,
    uril: "https://www.geeksforgeeks.org/user/sumitmanishminz/",
    color: "#006769",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: "https://www.linkedin.com/in/sumit-minz-447a65194",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: "https://github.com/SumitMinz",
    color: "#fff",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    url: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    url: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    url: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    url: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    url: "#contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `natours-${Date.now()}`,
    name: "Natours",
    imgSrc: Natours,
    gitURL: "https://github.com/SumitMinz/Natours",
    dLink: "https://natours-a7qr.onrender.com/",
  },
  {
    id: `sorting-${Date.now()}`,
    name: "Sorting Visualizers",
    imgSrc: Sorting,
    gitURL: "https://github.com/SumitMinz/sorting-visualizer",
    dLink: "https://sumitminz.github.io/sorting-visualizer/",
  },
  {
    id: `todo-${Date.now()}`,
    name: "Todo",
    imgSrc: Todo,
    gitURL: "https://github.com/SumitMinz/Todo-List",
    dLink: "https://sumitminz.github.io/Todo-List/",
  },
];
