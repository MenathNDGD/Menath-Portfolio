"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectDetails = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const formatProjectNumber = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-[50%]">
          <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
            {project.num}
          </div>
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.category} Project
          </h2>
          <span className="text-2xl font-semibold text-white/50">
            {project.title}
          </span>
          <p className="text-white/60">{project.description}</p>
          <ul className="flex flex-wrap items-center gap-4 md:flex-nowrap">
            {project.stack.map((item, index) => (
              <li
                key={index}
                className="items-center text-5xl transition-all duration-300 text-accent group"
              >
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <div className="text-4xl text-white group-hover:text-accent">
                        {item.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
          <div className="border border-white/20"></div>
          <div className="flex items-center gap-4">
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-3xl text-white group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub Repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[50%] mb-10 xl:mb-0 order-1 xl:order-none">
        <Carousel onSlideChange={handleSlideChange}>
          <CarouselContent>
            {projects.map((item, index) => (
              <CarouselItem key={index}>
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/10 rounded-xl">
                  <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                  <div className="w-full xl:w-[50%] xl:h-[460px] flex justify-center items-center">
                    <Image
                      src={item.image}
                      fill
                      className="w-[90%] h-auto rounded-xl shadow-lg"
                      alt={item.title}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {currentIndex > 0 && (
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 rounded-full p-2" />
          )}
          {currentIndex < projects.length - 1 && (
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 rounded-full p-2" />
          )}
        </Carousel>
        <div className="hidden md:block text-lg text-center text-white/60 mt-4">
          Project {formatProjectNumber(currentIndex + 1)} of{" "}
          {formatProjectNumber(projects.length)}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
