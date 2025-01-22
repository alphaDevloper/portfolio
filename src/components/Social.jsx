import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import Reveal from "../Reveal";

function Social() {
  return (
    <div className="py-20 max-w-7xl">
      {" "}
      <div className="flex justify-center flex-col items-center text-center">
        <Reveal initialY={20}>
          <h2 className="text-white text-4xl font-bold">
            Follow me on my <span className="text-purple">social channels</span>
          </h2>
        </Reveal>
        <div className="mt-12 flex justify-center flex-wrap lg:gap-16 gap-8">
          <a href="https://www.youtube.com/">
            <div>
              <FaYoutube className="text-white text-5xl hover:text-purple-300 cursor-pointer" />
            </div>
          </a>
          <a href="https://www.linkedin.com/">
            <div>
              <FaLinkedin className="text-white text-5xl hover:text-purple-300 cursor-pointer" />
            </div>
          </a>
          <a href="https://github.com/">
            <div>
              <FaGithub className="text-white text-5xl hover:text-purple-300 cursor-pointer" />
            </div>
          </a>
          <a href="https://www.instagram.com/">
            <div>
              <FaInstagram className="text-white text-5xl hover:text-purple-300 cursor-pointer" />
            </div>
          </a>
          <a href="https://discord.com/">
            <div>
              <FaDiscord className="text-white text-5xl hover:text-purple-300 cursor-pointer" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
