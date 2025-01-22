import Reveal from "../Reveal";
import Magicbtn from "./ui/Magicbtn";

function Hero() {
  return (
    <div className="pb-16 pt-20 max-w-7xl">
      <div className="flex justify-center relative mt-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Reveal initialY={20}>
            <h1 className="text-center text-[30px] font-bold md:text-5xl lg:text-6xl leading-tight text-white">
              Transforming Ideas into Seamless{" "}
              <span className="text-purple">User Experiences</span>
            </h1>
          </Reveal>

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
  );
}

export default Hero;
