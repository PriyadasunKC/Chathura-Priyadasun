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
    category: "Full Stack Web Development",
    title: "Digital Arts Selling Platform",
    description:
      "Full-stack digital arts marketplace built with Next.js for both frontend and backend. Features user authentication, product listings, cart and order management, PayPal payment gateway integration, admin portal for content management, and deployed on Vercel.",
    stack: [
      { name: "Next.js" },
      { name: "Supabase" },
      { name: "MongoDB" },
      { name: "PayPal" },
      { name: "Vercel" },
    ],
    image: "/assets/work/p14.jpg",
    live: "https://digital-arts-sell.vercel.app/",
    github: "https://github.com/PriyadasunKC/Digit-Ocean.git",
  },
  {
    num: "06",
    category: "Full Stack Web Development",
    title: "VehicleMart: Full-Stack Vehicle Rental Platform",
    description:
      "Complete vehicle rental platform connecting vehicle owners with renters for hourly and daily rentals. Features vehicle search with location, category, and date/time filters, interactive map, review system, owner dashboard, and dual interface (User app + Admin portal).",
    stack: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/p9.jpeg",
    live: "/",
    github: "/",
  },
  {
    num: "07",
    category: "Full Stack Web Development – Group Project",
    title: "Smart AI Metadata Generator for Images",
    description:
      "Web application that automates metadata generation for stock images using AI, producing titles, descriptions, and keywords. Supports single & bulk uploads, CSV export, and downloadable metadata-embedded images ready for Shutterstock, Adobe Stock, and Freepik. Microservice architecture deployed with Docker, CI/CD pipelines, and Nginx reverse proxy.",
    stack: [
      { name: "React.js" },
      { name: "Flask" },
      { name: "PostgreSQL" },
      { name: "Cloudinary" },
      { name: "Docker" },
      { name: "Nginx" },
    ],
    image: "/assets/work/p12.jpg",
    live: "/",
    github: "/",
  },
  {
    num: "08",
    category: "Full Stack Web Development",
    title: "Handfree - E-commerce Platform for Apple Products",
    description:
      "Responsive e-commerce store for Apple products with dynamic navigation, product search, category pages, product filters, order pages, sign-in drawers, profile pages, and real-time data fetching for dynamic searches.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/p13.jpg",
    live: "/",
    github: "/",
  },
  {
    num: "09",
    category: "DevOps",
    title: "VehicleMart: Production Infrastructure & Monitoring",
    description:
      "Complete DevOps infrastructure for the VehicleMart rental platform. Fully automated CI/CD pipelines using Jenkins for Node.js backend and dual Next.js frontends, Docker containerization, NGINX reverse proxy with multi-domain SSL/TLS, and Prometheus & Grafana monitoring stack.",
    stack: [
      { name: "Jenkins" },
      { name: "Docker" },
      { name: "NGINX" },
      { name: "Prometheus" },
      { name: "Grafana" },
    ],
    image: "/assets/work/p10.jpeg",
    live: "/",
    github: "/",
  },
  {
    num: "10",
    category: "DevOps",
    title: "Kubernetes Minikube Cluster Setup on AWS EC2",
    description:
      "Designed and deployed a Kubernetes Minikube cluster on AWS EC2 for development and testing. Configured t2.medium Ubuntu Server with Docker as container runtime, and managed pods, deployments, and services using Kubernetes manifests.",
    stack: [
      { name: "Kubernetes" },
      { name: "Minikube" },
      { name: "Docker" },
      { name: "AWS EC2" },
      { name: "Ubuntu" },
    ],
    image: "/assets/work/p11.jpg",
    live: "/",
    github: "/",
  },
  {
    num: "11",
    category: "Machine Learning / AI",
    title: "AgriPricelk – AI-Powered Crop Price Forecasting System",
    description:
      "End-to-end ML system predicting Sri Lankan market crop prices to help farmers make better decisions. Uses WFP dataset (2020–2025) across 44 markets and 9 provinces. XGBoost achieved R²: 0.9637 with 32 engineered features. Integrated SHAP explainability for transparent predictions.",
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "XGBoost" },
      { name: "SHAP" },
      { name: "scikit-learn" },
    ],
    image: "/assets/work/p8.jpeg",
    live: "/",
    github: "https://lnkd.in/gZn5czYx",
  },
  {
    num: "12",
    category: "Artificial Intelligence / Expert Systems",
    title: "PC Hardware Troubleshooting Expert System",
    description:
      "Full-stack expert system diagnosing PC hardware faults using a Prolog knowledge base, Experta forward-chaining engine, and a Flask REST API with vanilla JS UI. Features BIOS beep code diagnosis, symptom checker, and auto guided wizard with confidence scoring and step-by-step repair guidance.",
    stack: [
      { name: "Python" },
      { name: "Prolog" },
      { name: "Flask" },
      { name: "Experta" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/p7.jpeg",
    live: "/",
    github: "https://lnkd.in/gkSZKFaD",
  },
  {
    num: "13",
    category: "Mobile Development – Ongoing",
    title: "VehicleMart Mobile App",
    description:
      "Cross-platform mobile application for the VehicleMart vehicle rental platform. Features real-time vehicle location tracking with OpenStreetMap integration, vehicle search and booking with date/time filters, interactive maps, push notifications, and seamless user experience across iOS and Android.",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "OpenStreetMap" },
      { name: "REST API" },
      { name: "Firebase" },
    ],
    image: "/assets/work/p15.jpeg",
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
                          className="object-contain"
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
