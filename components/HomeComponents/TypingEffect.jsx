"use client";

import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const TypingEffect = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (!typewriterRef.current) return;

    const typewriter = new Typewriter(typewriterRef.current, {
      autoStart: true,
      loop: true,
      delay: 50,
      cursor: "",
      devMode: false,
    });

    typewriter
      .typeString("Full Stack Developer")
      .pauseFor(1000)
      .deleteAll(50)
      .typeString("Software Engineer")
      .pauseFor(1000)
      .deleteAll(50)
      .typeString("Web Developer")
      .pauseFor(1000)
      .deleteAll(50)
      .start();

    return () => {
      typewriter.stop();
    };
  }, []);

  return <span ref={typewriterRef} className="text-xl"></span>;
};

export default TypingEffect;
