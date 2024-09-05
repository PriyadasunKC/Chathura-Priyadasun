"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaJava,
  FaBootstrap,
  FaWindows,
  FaLinux,
} from "react-icons/fa";

import { DiMsqlServer } from "react-icons/di";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiJenkins,
  SiDocker,
  SiGit,
  SiGithub,
  SiAntdesign,
  SiApachemaven,
  SiAmazonec2,
  SiAmazonroute53,
  SiAnsible,
  SiNamecheap,
  SiSonarqube,
} from "react-icons/si";

import { Tabs, TabContents, TabLists, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "I am a full stack developer with 3 years of experience in web development. I have a strong understanding of web technologies and have worked on various projects. I am passionate about learning new technologies and building scalable applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Chathura Priyadasun",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 76 561 9482",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldValue: "cpriyadasun@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on various projects and have experience in building web applications using modern technologies.",
  items: [
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      date: "2019 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Frontend Developer Intern",
      date: "summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      date: "2023 - 2024",
    },
    {
      company: "Tech Academy ",
      position: "Teaching Assistant",
      date: "2023 - 2024",
    },
    {
      company: "Tech Academy ",
      position: "Teaching Assistant",
      date: "2023 - 2024",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have worked on various projects and have experience in building web applications using modern technologies.",
  items: [
    {
      institution: "Online Course Platform",
      position: "Full Stack Web development Bootcamp",
      date: "2021",
    },
    {
      institution: "Online Course Platform",
      position: "Full Stack Web development Bootcamp",
      date: "2021",
    },
    {
      institution: "Online Course Platform",
      position: "Full Stack Web development Bootcamp",
      date: "2021",
    },
    {
      institution: "Online Course Platform",
      position: "Full Stack Web development Bootcamp",
      date: "2021",
    },
  ],
};

// Skills data
const skills = {
  title: "My Skills",
  description:
    "I have worked on various projects and have experience in building web applications using modern technologies.",
  skillList: [
    {
      icon: FaJava,
      name: "Java",
    },
    {
      icon: FaHtml5,
      name: "HTML 5",
    },
    {
      icon: FaCss3,
      name: "css 3",
    },
    {
      icon: FaJs,
      name: "Javascript",
    },
    {
      icon: FaReact,
      name: "React JS",
    },
    {
      icon: FaNode,
      name: "Node JS",
    },
    {
      icon: SiExpress,
      name: "Express JS",
    },
    {
      icon: SiMongodb,
      name: "Mongo DB",
    },
    {
      icon: SiMysql,
      name: "My SQL",
    },
    {
      icon: DiMsqlServer,
      name: "MS SQL Server",
    },
    {
      icon: FaBootstrap,
      name: "Bootstrap",
    },
    {
      icon: SiAntdesign,
      name: "Ant Design",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
    },
    {
      icon: SiAmazonec2,
      name: "AWS EC2",
    },
    {
      icon: SiAmazonroute53,
      name: "AWS Route 53",
    },
    {
      icon: SiNamecheap,
      name: "Namecheap",
    },
    {
      icon: SiGit,
      name: "Git",
    },
    {
      icon: SiGithub,
      name: "Github",
    },
    {
      icon: SiJenkins,
      name: "Jenkins",
    },
    {
      icon: SiAnsible,
      name: "Ansible",
    },
    {
      icon: SiDocker,
      name: "Docker",
    },
    {
      icon: SiDocker,
      name: "Docker",
    },
    {
      icon: SiApachemaven,
      name: "Apache Maven",
    },
    {
      icon: SiSonarqube,
      name: "Sonarqube",
    },
  ],
};

const Resume = () => {
  return <motion.div>Resume page</motion.div>;
};

export default Resume;
