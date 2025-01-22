import { useRef } from "react";
import { useEffect } from "react";
import Typed from "typed.js";
import Reveal from "../Reveal";

function About() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "UI/UX design",
        "Frontend development with React.",
        "Backend development.",
        "Full-stack development.",
        "Figma for stunning designs.",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="py-20 max-w-7xl" id="about">
      <div className="flex justify-center relative  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <h2 className="font-semibold text-2xl my-2 text-center text-white">
            About Me
          </h2> */}
          <div className="flex justify-center">
            <Reveal initialY={15}>
              <div className="inline-flex font-semibold border border-white-400 mt-2 mb-3 gap-2 text-white px-3 py-1 rounded-full uppercase items-center">
                ✦ About Me
              </div>
            </Reveal>
          </div>
          <div className="grid lg:grid-cols-2 items-center lg:gap-16">
            <Reveal initialX={-25}>
              <h1 className="font-bold text-white text-center md:text-center lg:text-left text-3xl leading-tight">
                Hi, I&apos;m <span className="text-purple">Abdullah</span>, a
                Full Stack Developer with a Passion for{" "}
                <span className="text-purple">
                  {" "}
                  <span ref={el} />
                </span>
              </h1>
            </Reveal>
            <div className="my-6 flex justify-center">
              <Reveal initialX={25}>
                <img
                  src="/images/dev-removebg-preview.png"
                  alt=""
                  className="w-96"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 h-96 bg-blue-900 blur-[200px] rounded-full absolute right-0" />
    </div>
  );
}

export default About;
