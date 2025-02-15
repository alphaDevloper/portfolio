export default function Nav() {
  return (
    <div className="py-4 lg:py-8 fixed top-0 z-50">
      <div className="border flex py-6 px-4 border-white/15 rounded-full md:rounded-full bg-black-100/25 backdrop-blur-sm">
        <a
          className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-100 dark:hover:text-neutral-300 hover:text-neutral-500"
          href="#about"
        >
          <span className="text-sm px-3 lg:px-8 !cursor-pointer">About</span>
        </a>
        <a
          className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-100 dark:hover:text-neutral-300 hover:text-neutral-500"
          href="#skills"
        >
          <span className="text-sm px-3 lg:px-8 !cursor-pointer">Skills</span>
        </a>
        <a
          className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-100 dark:hover:text-neutral-300 hover:text-neutral-500"
          href="#projects"
        >
          <span className="text-sm px-3 lg:px-8 !cursor-pointer">Projects</span>
        </a>
        <a
          className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-100 dark:hover:text-neutral-300 hover:text-neutral-500"
          href="#contact"
        >
          <span className="text-sm px-3 lg:px-8 !cursor-pointer">Contact</span>
        </a>
      </div>
    </div>
  );
}
