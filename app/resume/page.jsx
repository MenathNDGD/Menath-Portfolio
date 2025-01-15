"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
  FaJava,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiCanva,
  SiShadcnui,
  SiFirebase,
  SiLaravel,
  SiAppwrite,
  SiTrello,
  SiVisualstudiocode,
  SiC,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I excel at creating intuitive, visually appealing web applications that enhance user experience, focusing on seamless interfaces and responsive full-stack solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Menath Nadungoda",
    },
    {
      fieldName: "Mobile",
      fieldValue: "(+94) 76 549 3072",
    },
    {
      fieldName: "Email",
      fieldValue: "nadungmenath1@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Colombo, Sri Lanka",
    },
    {
      fieldName: "Experience",
      fieldValue: "03+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
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

const experience = {
  title: "My Experience",
  description:
    "With over three years of web development experience, I have utilized various technologies and frameworks to create robust, user-friendly applications that meet client needs.",
  items: [
    {
      position: "Frontend Developer",
      company: "Freelance",
      date: "2024 - Present",
    },
    {
      position: "Full Stack Developer",
      company: "Smart Tech Solutions",
      date: "2023 Jun - 2024",
    },
    {
      position: "UI/Ux Designer",
      company: "Freelance",
      date: "2022 Sep - 2023 Jun",
    },
    {
      position: "Trainee Intern",
      company: "People's Bank",
      date: "2022 Feb - 2022 Aug",
    },
    {
      position: "Assistant Intern",
      company: "Bank of Ceylon",
      date: "2021 Jul - 2022 Mar",
    },
    {
      position: "E-commerce Startup",
      company: "Freelance Web Developer",
      date: "2021 - 2022 Sep",
    },
    {
      position: "UI/Ux Designer",
      company: "Design Studio",
      date: "2020 - 2021",
    },
    {
      position: "Junior Video Editor",
      company: "ModernViz Inc.",
      date: "2020 Feb - 2020",
    },
    {
      position: "Documentary Filmmaker",
      company: "AloneMax Station",
      date: "2019 - 2020 Feb",
    },
    {
      position: "Content Creator",
      company: "Freelance",
      date: "2018 - 2019",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "I am an undergraduate with a BSc(Hons.) in Computing & Information Systems (CIS) from the Sabaragamuwa University of Sri Lanka.",
  items: [
    {
      degree: "BSc(Hons) in Computing & Information Systems",
      university: "Sabaragamuwa University",
      date: "2022 - Present",
    },
    {
      degree: "Professional Skill Program on Agility",
      university: "SLASSCOM, Colombo",
      date: "20223 Oct",
    },
    {
      degree: "Agile Project Management",
      university: "Coursera",
      date: "2023 Sep",
    },
    {
      degree: "Foundations of Digital Marketing & E-commerce",
      university: "Coursera",
      date: "2023 Aug",
    },
    {
      degree: "IT Security, Defence Against the Digital Dark",
      university: "Coursera",
      date: "2023 May",
    },
    {
      degree: "The Fundamentals of Digital Marketing",
      university: "Google Digital Garage",
      date: "2023 Apr",
    },
    {
      degree: "Diploma in Information Technology (DIT)",
      university: "ICBT Campus, Colombo",
      date: "2021 Apr - 2021 Oct",
    },
    {
      degree: "General Certificate of Education (G.C.E) A/L",
      university: "St. Aloysisus College, Galle",
      date: "2018 - 2020",
    },
    {
      degree: "General Certificate of Education (G.C.E) O/L",
      university: "All Saints College, Galle",
      date: "2017 - 2019",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have experience working with various technologies and frameworks, such as React, Node.js, and Firebase, enabling me to build robust and scalable applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiShadcnui />,
      name: "Shadcn UI",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiC />,
      name: "C",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiExpress />,
      name: "Express JS",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiAppwrite />,
      name: "Appwrite",
    },
    {
      icon: <SiTrello />,
      name: "Trello",
    },
    {
      icon: <SiVisualstudiocode />,
      name: "VS Code",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
    {
      icon: <SiVercel />,
      name: "Vercel",
    },
  ],
};

const Resume = () => {
  const [emailCopyStatus, setEmailCopyStatus] = useState("Copy Email");
  const [phoneCopyStatus, setPhoneCopyStatus] = useState("Copy Phone");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nadungmenath1@gmail.com").then(() => {
      setEmailCopyStatus("Copied!");
      setTimeout(() => {
        setEmailCopyStatus("Copy Email");
      }, 5000);
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("(+94) 76 549 3072").then(() => {
      setPhoneCopyStatus("Copied!");
      setTimeout(() => {
        setPhoneCopyStatus("Copy Phone");
      }, 5000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-3">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-lg text-accent">
                            {item.fieldName}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.fieldValue}
                          </h3>
                          {item.fieldName === "Email" && (
                            <Button
                              onClick={handleCopyEmail}
                              className="px-3 py-1 mt-0 text-sm text-white bg-gray-900 rounded-lg hover:bg-gray-800"
                            >
                              {emailCopyStatus}
                            </Button>
                          )}
                          {item.fieldName === "Mobile" && (
                            <Button
                              onClick={handleCopyPhone}
                              className="px-3 py-1 mt-0 text-sm text-white bg-gray-900 rounded-lg hover:bg-gray-800"
                            >
                              {phoneCopyStatus}
                            </Button>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-3">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-3">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.university}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] pr-3">
                    {skills.skillList.map((item, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                  {item.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
