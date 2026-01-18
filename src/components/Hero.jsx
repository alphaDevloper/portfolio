import Reveal from "../Reveal";
import Magicbtn from "./ui/Magicbtn";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/textGener";
import SEO from "./SEO";

function Hero() {
  return (
    <>
      <SEO
        title="Home - Abdullah Alam"
        description="Welcome to my portfolio. I'm a full-stack developer with expertise in React, Node.js, and UI/UX design. Explore my projects and get in touch!"
        url="https://portfolio-123-lemon.vercel.app/"
      />
      <div className="pb-16 pt-20 max-w-7xl relative">
        {/* <div className="w-96 h-96 bg-blue-900 blur-[200px] rounded-full absolute sm:left-0" /> */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="flex justify-center relative mt-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* <Reveal initialY={20}>
            <h1 className="text-center text-[30px] font-bold md:text-5xl lg:text-6xl leading-tight text-white">
              Transforming Ideas into Seamless{" "}
              <span className="text-purple">User Experiences</span>
            </h1>
          </Reveal> */}
            <TextGenerateEffect
              words=" Transforming Ideas into Seamless User Experiences"
              className="text-white text-[40px] md:text-5xl lg:text-6xl text-center font-bold leading-tight"
            />

            <Reveal initialY={20}>
              <p className="text-center md:tracking-wider mb-4 mt-4 text-sm md:text-lg lg:text-xl text-white-100">
                A Full Stack Developer with a Passion for Frontend Excellence
              </p>
            </Reveal>
            <Reveal initialY={20}>
              <a href="#projects">
                <Magicbtn title="View My Work" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
