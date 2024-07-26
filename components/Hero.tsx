import { Spotlight } from "./ui/Spotlight";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useState } from "react";
import MagicButton from "./ui/MagicButton";
import ButtonMagic from "./ui/ButtonMagic";

const Hero = () => {
  //   const [handleTextCompletion, setHandleTextCompletion] = useState(false);

  //   const handleFirstCompletion = () => {
  //     setHandleTextCompletion(true);
  //   };

  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 
        md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full 
            h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80
            h-[80vh] w-[50vh]"
          fill="skyblue"
        />
      </div>
      <div
        className="h-[50rem] w-full dark:bg-black 
      bg-white bg-grid-black/[0.2]
        flex items-center justify-center absolute"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0
         flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>
        <p
          className="text-4xl sm:text-7xl font-bold relative
         z-20 bg-clip-text text-transparent bg-gradient-to-b 
         from-neutral-200 to-neutral-500 py-8 top-0 left-0"
        ></p>
      </div>
      <div className="flex justify-center relative my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col item-center justify-center text-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"></h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi, I'm Reno won"
          />
          <p
            className="text-center text-sm text-gray-400 md:tracing-wider
          md-4 md:textlg lg:text-2xl"
          >
            Hong Kong based Software Engineer & Developer<br></br>Recent
            graduataed of City University of Hong Kong&apos;s Bachelor of
            Engineering in Computer and Data Engineering
          </p>
          <a href="#about">
            <MagicButton title="Show my work" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
