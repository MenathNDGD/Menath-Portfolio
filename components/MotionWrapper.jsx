"use client";

import { motion } from "framer-motion";

const MotionWrapper = ({ children, className, as: Component = "div" }) => {
  return (
    <motion.div
      as={Component}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
