"use client"

import { ReactNode } from 'react'
import Image from 'next/image'
import { useState, useTransition  } from 'react'
import TabButton from '../TabButton/TabButton'

interface TabData {
  id: string;
  title: string
  content: ReactNode; // Adjust the type according to the actual content type
}

const TAB_DATA: TabData[] = [
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>Problem Solving Skills</li>
                <li>Critical thinking Skills</li>
                <li>Technical Skills</li>
                <li>Good Communication</li>
                <li>Growth Mindset</li>
                <li>Detail-Oriented</li>
                <li>Time Management</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content:(
            <ul className='list-disc pl-2'>
                <li>Fullstack Engineering Student @ALX Africa</li>
                <li>100 Days of Code: The Complete Python Pro Bootcamp for 2023 by Dr. Angela Yu.</li>
                <li>The Complete 2023 Web Development BootCamp by Dr. Angela Yu.</li>
            </ul>
        )
    },
]


const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const selectedTabContent = TAB_DATA.find((t) => t.id === tab)?.content;


    const handleTabChange  = (id: string) =>{
        startTransition(() => {
            setTab(id);
        })
    }


  return (
    <section  className='container text-white' id="about" >
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 sm:px-1 xl:gap-10 '>
            <Image 
                src='/img/about.jpg'  
                width={500}
                className='border-0 rounded hidden lg:block md:block'
                height={500}
                alt="about"
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-md'>
                    Hi there!
                    my name is Victor Samuel, I am a Full-stack web developer with over three years of experience in area of computer programming . 
                    I build websites that run on the web on the web and I am passionate about utilizing new technologies to make better user experience. 
                    I thrive in collaborative environments and love working on project that challenge me to learn new technologies and techniques. I am highly
                     motivated to provide legendary service to customers and teammate, as well as encouraging thought of new possibilities.
                </p>
                <p className='pt-5'>
                    My specialties include Python, Javascript, React and Next js and am always looking for opportunities to apply this skills to create intuitive and user-friendly web applications. 
                    I enjoy &apos;s working on both frontend and  backend part of a web application.
                </p>
                <p className='pt-5'>   
                    If you are looking for a versatile and motivated full stack developer for your team, 
                    feel free to connect with me. i am always open to new opportunities and partnerships.
                </p>
                   
                <div className='flex justify-start flex-row mt-8'>
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

                <div className='mt-8'>
                  {selectedTabContent ? (
                    selectedTabContent
                  ) : (
                    <p>No content available for this tab.</p>
                  )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;