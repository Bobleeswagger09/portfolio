"use client"

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="py-10 w-full xl:h-[70vh] xl:pt-0">
      <div className="container h-full">
        <div className="w-full flex flex-col xl:flex-row lg:flex-row md:flex-row items-center justify-center tab:flex-row gap-10 h-full">
          <div className="tab:flex-1 w-full flex flex-col items-start justify-start gap-5">
            <h1
              className="text-xl lg:text-2xl font-semibold md:text-2xl"
            >
              Hello, my name is{" "}
              <i className="font-styleFont text-secondary">Victor</i>
            </h1>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Fullstack developer",
                1000,
                "I learn",
                1000,
                "I Create",
                1000,

            
              ]}
              speed={50}
              className="text-3xl lg:text-5xl  font-bold md:text-4xl"
              repeat={Infinity}
            />
            <span
              className="text-base sm:text-lg md:text-xl font-medium"
            >
              Experienced full stack developer with proficiency in 
              <span className="text-secondary"> React js, Next.js, Node.js, Express.js, MongoDB, SQL and Tyepescript</span>.🧑‍💻
            </span>
            <div
              className="flex items-center justify-start gap-5"
            >
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                className="text-base font-normal text-white cursor-pointer hover:bg-transparent border-secondary border flex items-center justify-center gap-3 w-fit bg-secondary py-2 px-5 md:px-8 rounded-lg transition-all duration-300"
              >
                Projects
              </ScrollLink>
              <Link
                href="/cv.pdf"
                download
                target="_blank"
                rel="noreferrer noopener"
                className="text-base font-normal text-white cursor-pointer hover:bg-secondary border-secondary border flex items-center justify-center gap-3 w-fit bg-transparent py-2 px-5 md:px-8 rounded-lg transition-all duration-300"
              >
                Download CV
              </Link>
            </div>
          </div>
          <div className="tab:flex-1 w-full relative flex items-center justify-center h-full md:overflow-hidden">
            <div className="home-img bg-secondary sm:h-[300px] h-[250px] lg:h-[350px] xl-[450px] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/img/victor.webp"
                alt="hero_image"
                className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:h-[300px] md:w-[300px] lg:w-[350px]  lg:h-[350px] xl-[450px] rounded-xl relative z-10 object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
