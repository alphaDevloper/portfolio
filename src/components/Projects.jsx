import Reveal from "../Reveal";
import { projects } from "../../data/index";

function Projects() {
  return (
    <div className="py-20 max-w-7xl" id="projects">
      {/* <div className="w-96 h-96 bg-blue-900 blur-[200px] rounded-full absolute left-0 lg:block hidden" /> */}
      <Reveal initialY={20}>
        <h1 className="text-4xl mb-24 font-semibold text-center text-white">
          A small selection of{" "}
          <span className="text-blue-400">recent projects</span>
        </h1>
      </Reveal>
      <div className="flex items-center justify-center flex-wrap lg:gap-20 gap-16">
        <Reveal initialY={20} delay={0.4}>
          <a href="https://movie-search-omega-five.vercel.app/">
            <div className="bg-black-100 p-4 rounded-3xl border border-white/20">
              <img src={projects[0].img} alt="" className="w-96" />
              <h1 className="text-white text-2xl mt-2 font-semibold">
                {projects[0].title}
              </h1>
              <p className="text-white text-lg w-full max-w-sm line-clamp-2">
                {projects[0].des}
              </p>
              <div className="flex items-center mt-2 space-x-2">
                {projects[0].iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/15 rounded-full bg-white/10 lg:w-10 lg:h-10 flex items-center justify-center"
                  >
                    <img
                      src={icon}
                      alt={`icon-${index}`}
                      className="lg:w-10 w-8 p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </a>
        </Reveal>
        <Reveal initialY={20} delay={0.4}>
          <a href="https://layers-mauve.vercel.app/">
            <div className="bg-black-100 p-4 rounded-xl border border-white/20">
              <img
                src="/images/Apex_1737543894578.png"
                alt=""
                className="w-96"
              />
              <h1 className="text-white text-2xl mt-2 font-semibold">
                {projects[1].title}
              </h1>
              <p className="text-white text-lg w-full max-w-sm line-clamp-2">
                {projects[1].des}
              </p>
              <div className="flex items-center mt-2 space-x-2">
                {projects[1].iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/15 rounded-full bg-white/10 lg:w-10 lg:h-10 flex items-center justify-center"
                  >
                    <img
                      src={icon}
                      alt={`icon-${index}`}
                      className="lg:w-10 w-8 p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </a>
        </Reveal>
        {/* <Reveal initialY={20} delay={0.4}>
          <div className="bg-black-100 p-4 rounded-xl border border-white/15">
            <img src="/images/Apex_1737543894578.png" alt="" className="w-96" />
            <h1 className="text-white text-2xl mt-2 font-semibold">
              Layers app
            </h1>
            <p className="text-white text-lg w-full max-w-sm line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              vel! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae aut debitis quia.
            </p>
            <div className="flex items-center mt-2">
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center">
                <img
                  src="/images/bootstrap.png"
                  alt=""
                  className="lg:w-10 w-8 p-2"
                />
              </div>
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center w-8 h-8">
                <img src="/images/bootstrap.png" alt="" className="w-10 p-2" />
              </div>
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center w-8 h-8">
                <img src="/images/bootstrap.png" alt="" className="w-10 p-2" />
              </div>
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center w-8 h-8">
                <img src="/images/bootstrap.png" alt="" className="w-10 p-2" />
              </div>
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center w-8 h-8">
                <img src="/images/bootstrap.png" alt="" className="w-10 p-2" />
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal initialY={20} delay={0.4}>
          <div className="bg-black-100 p-4 rounded-xl border border-white/15">
            <img src="/images/Apex_1737543894578.png" alt="" className="w-96" />
            <h1 className="text-white text-2xl mt-2 font-semibold">
              Layers app
            </h1>
            <p className="text-white text-lg w-full max-w-sm line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              vel! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae aut debitis quia.
            </p>
            <div className="flex items-center mt-2">
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center">
                <img
                  src="/images/bootstrap.png"
                  alt=""
                  className="lg:w-10 w-8 p-2"
                />
              </div>
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center w-8 h-8">
                <img src="/images/bootstrap.png" alt="" className="w-10 p-2" />
              </div>
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center w-8 h-8">
                <img src="/images/bootstrap.png" alt="" className="w-10 p-2" />
              </div>
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center w-8 h-8">
                <img src="/images/bootstrap.png" alt="" className="w-10 p-2" />
              </div>
              <div className="border border-white/15 rounded-full bg-black lg:w-10 lg:h-10 flex items-center justify-center w-8 h-8">
                <img src="/images/bootstrap.png" alt="" className="w-10 p-2" />
              </div>
            </div>
          </div>
        </Reveal> */}
      </div>
    </div>
  );
}

export default Projects;
