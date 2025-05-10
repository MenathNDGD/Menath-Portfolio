"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

import MotionWrapper from "@/components/CommonComponents/MotionWrapper";

export default function NotFound() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <MotionWrapper className="min-h-[80vh] flex flex-col justify-center items-center py-12 px-4">
      <div className="w-full max-w-md flex flex-col items-center justify-center gap-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="relative"
        >
          <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-accent/40 flex items-center justify-center">
              <div className="text-3xl font-bold text-accent">404</div>
            </div>
          </div>

          {animate && (
            <>
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-accent"
                style={{ top: "10%", left: "85%" }}
                animate={{
                  y: [0, -8, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-accent"
                style={{ top: "70%", left: "5%" }}
                animate={{
                  y: [0, 6, 0],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </>
          )}
        </motion.div>

        <motion.h2
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-2xl font-bold text-white"
        >
          Page Not Found !
        </motion.h2>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-lg text-white/80"
        >
          The page you are looking for does not exist.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="mt-4"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-accent text-primary rounded-lg font-medium flex items-center justify-center transition-colors hover:bg-accent-hover"
            >
              <FaHome className="mr-2" />
              Go back home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </MotionWrapper>
  );
}
