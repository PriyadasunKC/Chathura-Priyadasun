"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


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
  SiC,
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

import { GiCubes } from "react-icons/gi";
import { ScrollArea } from "@/components/ui/scroll-area";

// about data
const about = {
  title: "About me",
  description:
    "I am a full stack developer with Multiple Real World Project experience in web development. I have a strong understanding of web technologies . I am passionate about learning new technologies and building scalable applications.",
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
      fieldValue: "Undergraduate",
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

const renderFieldValue = (fieldName, fieldValue) => {
  switch (fieldName) {
    case "Email":
      return (
        <a href={`mailto:${fieldValue}`} className="text-[16px hover:underline">
          {fieldValue}
        </a>
      );
    case "Phone":
      return (
        <a
          href={`tel:${fieldValue.replace(/[^\d+]/g, "")}`}
          className="text-[16px] hover:underline"
        >
          {fieldValue}
        </a>
      );
    default:
      return <span className="text-[16px]">{fieldValue}</span>;
  }
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Pursuing a BSc (Hons) in Information Technology at the University of Moratuwa, with diplomas in IT and Hardware Engineering. Experienced in building web applications using modern technologies.",
  items: [
    {
      institute: "University of Moratuwa",
      degree: "BSc (Hons) in Information Technology",
      date: "2021 - Present",
    },
    {
      degree: "GCE Advanced Level Mahinda College Galle",
      stream: "Biological Science",
      score: "Bio - A, Chem - B, Phy - B",
      zScore: "1.6032",
      rank: "District Rank 56 (Old)",
      date: "2020",
    },
    {
      institute: "Esoft Metro Campus",
      degree: "Pearson Assured Diploma in Information Technology",
      date: "2019",
    },
    {
      institute: "Esoft Metro Campus",
      degree:
        "Pearson Assured Diploma in Hardware Engineering and Network Administration",
      date: "2019",
    },
    {
      institute: "Coursera - IBM",
      degree: "Introduction to Web Development ",
      date: "2023",
    },
  ],
};

// Programming Skills
const ProgrammingSkills = {
  title: "Programming Language Skills",
  description:
    "Skilled in C, Java, and Object-Oriented Programming (OOP), with a strong ability to develop efficient and scalable applications.",
  ProgrammingList: [
    {
      icon: FaJava,
      name: "Java",
    },
    {
      icon: SiC,
      name: "C",
    },
    {
      icon: GiCubes,
      name: "OOP",
    },
  ],
};

// Web Development Skills
const webSkills = {
  title: "Web Developing Skills",
  description:
    "Highly skilled in web development, with expertise in both frontend and backend frameworks, database management, and responsive design.",
  WebSkillList: [
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
  ],
};

// DevOps Skills
const DevOpsSkills = {
  title: "DevOps Skills",
  description:
    "Experienced in DevOps practices, with proficiency in cloud services, version control, CI/CD tools, containerization, and infrastructure automation.",
  DevOpsSkillList: [
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
      icon: SiApachemaven,
      name: "Apache Maven",
    },
    {
      icon: SiSonarqube,
      name: "Sonarqube",
    },
  ],
};

const OperatingSystemSkills = {
  title: "DevOps Skills",
  description:
    "Experienced with Windows and Linux operating systems, with a solid understanding of managing and configuring environments on both.",
  OSSkillList: [
    {
      icon: FaWindows,
      name: "Windows",
    },
    {
      icon: FaLinux,
      name: "Linux",
    },
  ],
};


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
        className:
          "min-h-[80vh] flex items-center justify-center py-12 xl:py-0",
      }}
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="ProgrammingSkills">
              Programming Language Skills
            </TabsTrigger>
            <TabsTrigger value="webSkills">Web Developing Skills</TabsTrigger>
            <TabsTrigger value="DevOpsSkills">DevOps Skills</TabsTrigger>
            <TabsTrigger value="OperatingSystemSkills">
              Operating System Skills
            </TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] p-6 rounded-xl flex flex-col justify-start items-center lg:items-start gap-2"
                      >
                        <span className="text-accent">{item.date}</span>
                        <h3 className="text-xl max-w-full text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <p className="text-white/60">{item.institute}</p>
                        <div className="mt-2 flex flex-col items-center lg:items-start">
                          {item.stream && (
                            <p className="text-white/60">{item.stream}</p>
                          )}
                          {item.score && (
                            <p className="text-white/60">{item.score}</p>
                          )}
                          {item.zScore && (
                            <p className="text-white/60">{item.zScore}</p>
                          )}
                          {item.rank && (
                            <p className="text-white/60">{item.rank}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Programming-Skills */}
            <TabsContent value="ProgrammingSkills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {ProgrammingSkills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {ProgrammingSkills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {ProgrammingSkills.ProgrammingList.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                <IconComponent />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Web-Skills */}
            <TabsContent value="webSkills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{webSkills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {webSkills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {webSkills.WebSkillList.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                <IconComponent />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* DevOps-Skills */}
            <TabsContent value="DevOpsSkills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{DevOpsSkills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {DevOpsSkills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {DevOpsSkills.DevOpsSkillList.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                <IconComponent />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Operating System Skills */}
            <TabsContent
              value="OperatingSystemSkills"
              className="w-full h-full"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">
                    {OperatingSystemSkills.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {OperatingSystemSkills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {OperatingSystemSkills.OSSkillList.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                <IconComponent />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] max-w-[600px] mx-auto xl:mx-0">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="text-white/60">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-5"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      {renderFieldValue(item.fieldName, item.fieldValue)}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
