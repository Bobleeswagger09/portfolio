"use client"

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const Projects = () => {
  const data = [
    {
      image: "/img/image1.webp",
      title: "Developer Blog",
      desc: "This blog highlights my software developer journey",
      liveUrl: "https://victor-devblog-six.vercel.app/",
      repo: "https://github.com/Bobleeswagger09/victorblog/",
    },
    {
      image: "/img/image6.webp",
      title: "A Streaming Website",
      desc: "Cinemate Represents a Simple Version of Netflix",
      liveUrl: "cinemateapp.vercel.app",
      repo: "https://github.com/Bobleeswagger09/cinemate",
    },
    {
      image: "/img/image2.webp",
      title: "Bright Cleaning Services",
      desc: "A Cleaning Services Website built with HTML CSS and JAVASCRIPT",
      liveUrl: "https://bright-cleaning-services.vercel.app/",
      repo: "https://github.com/Bobleeswagger09/Bright-Cleaning-Services",
    },
    {
      image: "/img/image3.webp",
      title: "A Coffee Website",
      desc: "A Simple Coffee Website using HTML, CSS, JAVASCRIPT",
      liveUrl: "https://simple-cofee-p28fos4gz-bobleeswagger09.vercel.app/",
      repo: "https://github.com/Bobleeswagger09/Simple-Cofee/",
    },
    {
      image: "/img/image4.webp",
      title: "A Food Odering Website",
      desc: "A food Ordering website built with React js",
      liveUrl: "https://delicious-eight.vercel.app/",
      repo: "https://github.com/gift56/Netflix_Clone/",
    },
    {
      image: "/img/image5.webp",
      title: "Smart Home Website",
      desc: "A simple design for a phone website",
      liveUrl: "https://smart-home-sooty.vercel.app/",
      repo: "https://github.com/Bobleeswagger09/Smart__Home",
    },
  ];

  const [screen, setScreen] = useState<number | any>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newScreen = screenWidth <= 714 ? 1 : screenWidth <= 940 ? 2 : 3;
      setScreen(newScreen);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="projects" className="py-10 w-full">
      <div className="container">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <h2
            className="text-2xl md:text-3xl font-semibold text-blue-500"
          >
            Featured projects
          </h2>
          <p
            className="text-sm md:text-base font-medium"
          >
            Check out Some of my projects
          </p>
          <div className="w-full mt-5">
            <Swiper
              slidesPerView={screen}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
            >
              {data.map((item) => (
                <SwiperSlide
                  key={item.desc}
                  className="w-full p-6 flex flex-col items-start justify-start bg-primary rounded-xl shadow-cardShad md:!h-[450px] mb-10"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[190px] w-full rounded-md"
                  />
                  <div className="flex items-start justify-start flex-col gap-3 mt-4">
                    <h2 className="text-xl font-semibold text-secondary tab:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-sm font-medium md:text-base">
                      {item.desc}
                    </p>
                    <div className="flex items-center flex-col md:flex-row justify-center gap-4 w-full">
                      <Link
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-base font-normal text-white cursor-pointer hover:bg-transparent border-secondary border flex items-center justify-center gap-3 w-full md:w-[50%] bg-secondary py-2 px-8 rounded-lg transition-all duration-300"
                      >
                        Demo
                      </Link>
                      <Link
                        href={item.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-base font-normal text-white cursor-pointer hover:bg-secondary border-secondary border flex items-center justify-center gap-3 w-full md:w-[50%] bg-transparent py-2 px-4 rounded-lg transition-all duration-300"
                      >
                        Github Repo
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
