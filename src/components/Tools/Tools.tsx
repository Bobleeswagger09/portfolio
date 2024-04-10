import React from 'react'
import htmlIcon from "../../../public/img/svgs/icons8-html-5.svg"
import cssIcon from "../../../public/img/svgs/icons8-css3.svg"
import tailwindcsIcon from "../../../public/img/svgs/icons8-tailwind-css.svg" 
import javascriptIcon from "../../../public/img/svgs/icons8-javascript.svg" 
import reactIcon from "../../../public/img/svgs/icons8-react.svg"
import typescriptIcon from "../../../public/img/svgs/icons8-typescript.svg"
import nodeIcon from "../../../public/img/svgs/icons8-node-js.svg"
import gitIcon from "../../../public/img/svgs/icons8-git.svg"
import express from "../../../public/img/svgs/express.svg"
import mongodb from "../../../public/img/svgs/mongodb.svg"
import nextjs from "../../../public/img/svgs/nextjs.svg"
import sql from "../../../public/img/svgs/sql.svg"
import Image from 'next/image'



const Tools = () => {
    const links = [nextjs, reactIcon, javascriptIcon, typescriptIcon, nodeIcon, express, mongodb, sql, htmlIcon, cssIcon, tailwindcsIcon, gitIcon]

  return (
    <div id="tools" className="mt-[90px] mx-4 my-0 flex flex-col gap-4 items-center">
    <p className='text-3xl border-b-2 mb-4'>Tech Stack</p>
    <ul className='flex justify-center items-center gap-8 flex-wrap'>
        {links.map((link) => (
            <li key={link.id} className='cursor-pointer bg-[#ffff] shadow-lg w-20 h-20 rounded-full relative  flex items-center justify-center'>
                <Image src={link} height={100} width={100} alt='tools' className='w-[60px] h-[150px]'/>
            </li>
        ))}
    </ul>
    
  </div>
  )
}

export default Tools;