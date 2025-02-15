import Reveal from "../Reveal";
function Skills() {
  return (
    <div className="py-20 max-w-7xl relative" id="skills">
      <div className="flex justify-center">
        <Reveal initialY={15}>
          <div className="inline-flex border border-white-400 gap-2 text-white font-semibold px-3 py-1 rounded-full uppercase items-center">
            ✦ Skills & Tech Stack
          </div>
        </Reveal>
      </div>
      <p className="px-6 mx-auto mt-4 lg:text-xl text-lg text-center text-white-100 max-w-[50rem]">
        Frontend | Backend | Databases
      </p>
      <div className="mt-12 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 lg:gap-24 md:gap-24 gap-7">
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/html.png"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/css-removebg-preview.png"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/javascript.svg"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/react.svg"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/typescript.svg"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/nodejs.png"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/mongodb.svg"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/figma.svg"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/bootstrap.png"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/tailwind.svg"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/git.svg"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
        <Reveal initialY={25}>
          <div className="m-2 images">
            <img
              src="/images/materialui.svg"
              alt=""
              className="lg:w-16 md:w-14 w-12"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Skills;
