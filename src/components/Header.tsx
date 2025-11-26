import { Link } from "react-router";
import resumePdf from "../assets/jaylou_resume.pdf";
import Button from "./Button";
import { useEffect, useState } from "react";

import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";

const Header = () => {
   const [isDark, setIsDark] = useState<boolean>(() => {
      const savedMode = localStorage.getItem("isDark");

      // If "isDark exists"
      if (savedMode != null) {
         return savedMode === "true"
      }

      // If "isDark" does not exist, fallback to preference scheme.
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         return true;
      }

      return false;
   });

   useEffect(() => {
      if (isDark) {
         document.documentElement.classList.add("dark");
         localStorage.setItem("isDark", "true");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("isDark", "false");
      }
   }, [isDark]);

   return (
      <header className="flex justify-between items-center py-6 media-screen">
         <div className="logo">
            <Link to="/">
               <span className="text-4xl font-bold text-gray-950 dark:text-white">
                  {"<JR />"}
               </span>
            </Link>
         </div>
         <div className="nav flex">
            <div className="links flex items-center justify-center gap-6 font-medium">
               <a href="#about" className="nav-link">
                  About
               </a>
               <a href="#work" className="nav-link">
                  Work
               </a>
               <a href="#projects" className="nav-link">
                  Projects
               </a>
               <a href="#contact" className="nav-link">
                  Contact
               </a>
            </div>
            <div>
               <div className="divider mx-6 h-full border-l border-gray-300"></div>
            </div>
            <div className="others flex justify-center align-center gap-x-6">
               <div
                  className="self-center cursor-pointer"
                  onClick={() => setIsDark(!isDark)}
               >
                  {isDark ? (
                     <MoonIcon className="w-8 h-8 text-white" />
                  ) : (
                     <SunIcon className="w-8 h-8 text-gray-600" />
                  )}
               </div>
               <Button>
                  <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                     Resume
                  </a>
               </Button>
            </div>
         </div>
      </header>
   );
};

export default Header;
