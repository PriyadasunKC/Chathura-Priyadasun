"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Full Stack Web Development",
    title: "Cricket Management System",
    description:
      "BISTEC Global Project: Led API development for seamless front-end and back-end communication, including dashboards, admin panels, and features like cricket match fixtures and player profiles.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Node",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Ant Design",
      },
    ],
    image: "/assets/work/p1.jpg",
    live: "https://www.linkedin.com/posts/sathiska-sasindu-749709273_sportmanagementsystem-uom-bistec-ugcPost-7221526547730419714-HSWI?utm_source=share&utm_medium=member_desktop",
    github:
      "https://github.com/sathiska567/Sport-Management-System-Project.git",
  },
  {
    num: "02",
    category: "Hardware Project",
    title: "CNC Bathic Printing Machine",
    description:
      "We developed a hardware project that automates pattern drawing on fabric using wax with CNC technology. The machine features intelligent temperature sensors to maintain wax in a liquid state and monitors wax levels to ensure continuous operation",
    stack: [
      {
        name: "CNC",
      },
      {
        name: "GRBL",
      },
      {
        name: "Inkscape",
      },
      {
        name: "UGS",
      },
      {
        name: "Arduino",
      },
    ],
    image: "/assets/work/p2.jpg",
    live: "https://www.linkedin.com/posts/cpriyadasun_hardwareproject-innovation-groupactivity-activity-7087834552131342336-IAaW?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy",
    github:
      "https://www.linkedin.com/posts/cpriyadasun_hardwareproject-innovation-groupactivity-activity-7087834552131342336-IAaW?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy",
  },
  {
    num: "03",
    category: "Full Stack Web Development",
    title:
      "G.U. Language Centre Student Record System and User Registration Method",
    description:
      "Student Record System: Created a student record system for G.U. Language Academy, enhancing exam preparation with features like student management and payment tracking, hosted on Amazon EC2 with HTTPS.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Node",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Ant Design",
      },
    ],
    image: "/assets/work/p3.jpg",
    live: "https://www.linkedin.com/posts/cpriyadasun_reactjs-expressjs-nodejs-activity-7166528988759207937-SgWB?utm_source=share&utm_medium=member_desktop",
    github:
      "https://github.com/sathiska567/English-Student-Management-System.git",
  },
  {
    num: "04",
    category: "Full Stack Web Development",
    title: "USA-based children's story writer Website for book launch",
    description:
      "Book Promotion Platform: Developed a platform for authors to upload and manage book details and reader engagement. Features separate user and admin interfaces for efficient management.",
    stack: [
      {
        name: "React",
      },
      {
        name: "Node",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Ant Design",
      },
    ],
    image: "/assets/work/p4.jpg",
    live: "https://www.linkedin.com/posts/cpriyadasun_codevanguard-fullstackdevelopment-reactjs-activity-7154181284339040256-DHbj?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/sathiska567/Book_Cover_Project.git",
  },
  {
    num: "05",
    category: "Full Stack Web Development - On going",
    title: "E-commerce Website to sell Digital Products",
    description:
      "E-Commerce Platform: Developing a platform to sell digital products with features for user authentication, cart and order management, profile management, and payment processing,",
    stack: [
      {
        name: "React ",
      },
      {
        name: "nest",
      },
      {
        name: "Express",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Ant Design",
      },
    ],
    image: "/assets/work/p5.jpg",
    live: "/",
    github: "https://github.com/PriyadasunKC/Digit-Ocean.git",
  },
  {
    num: "06",
    category: "Full Stack Web Development - On going",
    title: "Wedding Planning Website",
    description:
      "Wedding Planning Website: Developing a platform to assist with wedding planning and provide all necessary services in one place, featuring user authentication, cart and order management, profile management, and payment processing.",
    stack: [
      {
        name: "Angular",
      },
      {
        name: "Spring Boot",
      },
      {
        name: "Ms SQL",
      },
      {
        name: "Tailwind CSS",
      },
    ],
    image: "/assets/work/p6.jpg",
    live: "/",
    github: "/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentSlide = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentSlide]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.8, duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* Outline Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* Project Description  */}
              <p className="text-white/60 ">{project.description}</p>

              {/* Project Stack */}
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* Remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live || "/"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Project Button */}
                <Link href={project.github || "/"}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0  bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
