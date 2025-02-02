import Reveal from "../Reveal";
import Magicbtn from "./ui/Magicbtn";

function Contact() {
  return (
    <div className="py-20 max-w-7xl relative" id="contact">
      {/* <div className="w-96 h-96 bg-blue-900 blur-[200px] rounded-full absolute right-0 lg:block hidden" /> */}
      <div className="flex flex-col mx-auto items-center text-center">
        <Reveal initialY={20}>
          <h1 className="lg:text-5xl text-4xl text-white font-bold lg:px-64">
            Ready to take <span className="text-blue-400">your</span> digital
            presence to the <span className="text-blue-400">next level</span>?
          </h1>
        </Reveal>
        <Reveal initialY={20}>
          <p className="text-white-100 mt-4 mb-4 lg:text-xl text-lg">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
        </Reveal>
        <Reveal initialY={20}>
          <a href="mailto:abdullahdanyal1234@gmail.com">
            <Magicbtn title="Let's get in touch" />
          </a>
        </Reveal>
      </div>
    </div>
  );
}

export default Contact;
