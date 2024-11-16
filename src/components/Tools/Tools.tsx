import React from "react";
import Image from "next/image";

// Importing icons
import htmlIcon from "../../../public/img/svgs/icons8-html-5.svg";
import cssIcon from "../../../public/img/svgs/icons8-css3.svg";
import tailwindcsIcon from "../../../public/img/svgs/icons8-tailwind-css.svg";
import javascriptIcon from "../../../public/img/svgs/icons8-javascript.svg";
import reactIcon from "../../../public/img/svgs/icons8-react.svg";
import typescriptIcon from "../../../public/img/svgs/icons8-typescript.svg";
import gitIcon from "../../../public/img/svgs/icons8-git.svg";
import nextjs from "../../../public/img/svgs/nextjs.svg";

const Tools = () => {
  // List of tool icons with unique ids
  const toolIcons = [
    { id: "nextjs", src: nextjs, alt: "Next.js" },
    { id: "react", src: reactIcon, alt: "React" },
    { id: "javascript", src: javascriptIcon, alt: "JavaScript" },
    { id: "typescript", src: typescriptIcon, alt: "TypeScript" },
    { id: "html", src: htmlIcon, alt: "HTML5" },
    { id: "css", src: cssIcon, alt: "CSS3" },
    { id: "tailwind", src: tailwindcsIcon, alt: "Tailwind CSS" },
    { id: "git", src: gitIcon, alt: "Git" },
  ];

  return (
    <div id="tools" className="mt-20 mx-4 flex flex-col items-center gap-4">
      <p className="text-3xl border-b-2 mb-4">Tech Stack</p>
      <ul className="flex justify-center items-center gap-8 flex-wrap">
        {toolIcons.map(({ id, src, alt }) => (
          <li
            key={id} // This ensures the key is unique
            id={id}
            className="cursor-pointer bg-white shadow-lg w-20 h-20 rounded-full flex items-center justify-center"
          >
            <Image src={src} alt={alt} width={60} height={60} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
