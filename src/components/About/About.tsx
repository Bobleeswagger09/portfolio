"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "../TabButton/TabButton";

interface TabData {
  id: string;
  title: string;
  content: ReactNode; // Adjust the type according to the actual content type
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Good Communication</li>
        <li>Problem Solving Skills</li>
        <li>Technical Skills</li>
        <li>Growth Mindset</li>
        <li>Detail-Oriented</li>
        <li>Time Management</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          100 Days of Code: The Complete Python Pro Bootcamp for 2023 by Dr.
          Angela Yu.
        </li>
        <li>The Complete 2023 Web Development BootCamp by Dr. Angela Yu.</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const selectedTabContent = TAB_DATA.find((t) => t.id === tab)?.content;

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="container text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 sm:px-1 xl:gap-10 ">
        <Image
          src="/img/about.jpg"
          width={500}
          className="border-0 rounded hidden lg:block md:block"
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-md">
            Hello, my name is Victor Samuel, a dedicated Software Developer with
            over two years of intensive learning and hands-on experience in
            building robust and scalable web applications. I thrive in
            collaborative environments and I&apos;m eager to take on challenging
            projects that push me to expand my skills. I am committed to
            delivering exceptional service and fostering innovation through
            creative problem-solving and continuous learning.
          </p>
          <p className="pt-5">
            My specialties include Javascript, React and Next js and I&apos;m
            always looking for opportunities to apply this skills to create
            intuitive and user-friendly web applications.
          </p>
          <p className="pt-5">
            If you are looking for a versatile and motivated software developer
            for your team, feel free to connect with me. I am always open to new
            opportunities and partnerships.
          </p>

          <div className="flex justify-start flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
          </div>

          <div className="mt-8">
            {selectedTabContent ? (
              selectedTabContent
            ) : (
              <p>No content available for this tab.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
