import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate reverse index of the staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
  return <>
  {/* render 6 motion div each represent a step of a the stair */}
  {[...Array(6)].map((_, index) => (
    
    <motion.div
        key={index}
        variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay:reverseIndex(index) * 0.1
        }}
        className="w-full h-full bg-white relative"
    />
    ))    
}
  </>;

};

export default Stairs;
