"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

import { Button } from "../ui/button";

import MotionWrapper from "../CommonComponents/MotionWrapper";

const ServiceNotFound = () => {
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
      <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-8 text-center">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={itemVariants} 
          className="relative"
        >
          <div className="w-40 h-40 rounded-full bg-accent/20 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-accent/40 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center">
                <FaSearch className="text-4xl text-primary" />
              </div>
            </div>
          </div>

          {animate && (
            <>
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-accent"
                style={{ top: "10%", left: "85%" }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-accent"
                style={{ top: "70%", left: "5%" }}
                animate={{
                  y: [0, 8, 0],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-accent"
                style={{ top: "20%", left: "10%" }}
                animate={{
                  y: [0, -6, 0],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
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
          className="text-4xl font-bold text-white"
        >
          Service Not Found !
        </motion.h2>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-lg text-white/80 max-w-md"
        >
          We couldn't locate the service you're looking for. It might have been
          moved or doesn't exist.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4"
        >
          <Link href="/services" className="w-full sm:w-auto">
            <Button className="w-full px-6 py-6 sm:py-4 text-lg font-semibold transition-all duration-300 rounded-md text-primary bg-accent hover:bg-accent-hover flex items-center justify-center">
              <FaArrowCircleLeft className="mr-2 text-xl" />
              <span>Browse All Services</span>
            </Button>
          </Link>

          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full px-6 py-6 sm:py-4 text-lg font-semibold transition-all duration-300 rounded-md border-accent text-accent hover:bg-accent hover:text-white"
            >
              Return to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </MotionWrapper>
  );
};

export default ServiceNotFound;
