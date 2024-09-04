"use client";

import { animate, delay, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.5,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        {/*Image*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="w-[250px] h-[250px] xl:w-[460px] xl:h-[460px] mix-blend-lighten"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="My Image"
            className="object-contain rounded-full"
          />
        </motion.div>

        {/*Circle*/}
        <motion.svg
          className="w-[252px] xl:w-[462px] h-[252px]  xl:h-[462px]"
          fill="transparent"
          viewBox="0 0 462 462"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="252"
            cy="252"
            stroke="#00ff99"
            strokeWidth="4"
            StrokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
