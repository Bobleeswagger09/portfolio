"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";git 
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../../public/img/logo.png";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        // if clieck event is a descendant of the modal ref the condition evaluates to true
        modalRef.current && // refers to the current value of the modalRef and this value hold the Dom node associated with the ref
        !modalRef.current.contains(event.target as Node) //e.target refers to the element that triggers the event which is the click
      ) {
        setMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex items-center justify-center py-4 gap-20  text-xl">
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        className="font-normal text-white cursor-pointer hover:text-secondary hidden md:flex"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        className="font-normal text-white cursor-pointer hover:text-secondary hidden md:flex"
      >
        About
      </ScrollLink>
      <div className="w-10 h-10 items-center justify-center rounded-full select-none font-semibold hidden md:flex">
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          className="rounded-lg "
        />
      </div>
      <div
        onClick={() => setMobileNav(true)}
        className="w-10 h-10 font-styleFont text-[38px] flex items-center justify-center rounded-full select-none font-semibold md:hidden"
      >
        <Image
          src={Logo}
          alt="logo"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <ScrollLink
        to="projects"
        spy={true}
        smooth={true}
        className="font-normal text-white cursor-pointer hover:text-secondary hidden md:flex"
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        className="font-normal text-white cursor-pointer hover:text-secondary hidden md:flex"
      >
        Contact
      </ScrollLink>
      <div
        className={`${
          mobileNav ? "left-0" : "-left-full"
        } tab:hidden flex flex-col h-screen bg-black/40 gap-7 absolute top-0 w-full z-10 transition-all duration-300 `}
      >
        <div
          ref={modalRef}
          className={`flex flex-col h-full bg-primary gap-7 absolute top-0 p-4 w-[250px]`}
        >
          <div className="w-full flex items-center justify-end">
            <span className="text-dark" onClick={() => setMobileNav(false)}>
              <MdClose size={25} />
            </span>
          </div>
          <nav className="w-full flex items-start justify-start flex-col gap-6">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
              className=" text-white cursor-pointer hover:text-secondary"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
              className=" text-white cursor-pointer hover:text-secondary"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
              className=" text-white cursor-pointer hover:text-secondary"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
              className="text-white cursor-pointer hover:text-secondary"
            >
              Contact
            </ScrollLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
