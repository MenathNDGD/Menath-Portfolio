"use client";

import { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const TypingEffect = () => {
  useEffect(() => {
    const typewriter = new Typewriter("#typewriter", {
      autoStart: true,
      loop: true,
      delay: 50,
      cursor: "",
      devMode: false,
    });

    typewriter
      .typeString("Full Stack Developer")
      .pauseFor(1000)
      .deleteAll(1)
      .typeString("Software Engineer")
      .pauseFor(1000)
      .deleteAll(1)
      .typeString("Web Developer")
      .pauseFor(1000)
      .deleteAll(1)
      .start();

    return () => typewriter.stop();
  }, []);

  return <span id="typewriter" className="text-xl"></span>;
};

export default TypingEffect;
