import { Link } from "react-router";
import { useEffect, useState } from "react";

// Components
import resumePdf from "../assets/jaylou_resume.pdf";
import Button from "./Button";

// SVGs
import SunIcon from "../assets/icons/sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import MenuIcon from "../assets/icons/menu.svg?react";
// You might want to import a CloseIcon here, or just reuse MenuIcon/Text

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false); // 1. New State for menu
   const [isDark, setIsDark] = useState<boolean>(() => {
      const savedMode = localStorage.getItem("isDark");
      if (savedMode != null) return savedMode === "true";
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return true;
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

   // Helper to close menu when a link is clicked
   const closeMenu = () => setIsMenuOpen(false);

   return (
      <header className="flex justify-between items-center p-4 media-screen relative">
         <div className="logo z-50"> {/* z-50 ensures logo stays visible */}
            <Link to="/" onClick={closeMenu}>
               <span className="text-4xl font-bold text-gray-950 dark:text-white">
                  {"<JR />"}
               </span>
            </Link>
         </div>

         {/* Desktop */}
         <div className="nav hidden md:flex">
            <div className="links flex items-center justify-center gap-6 font-medium">
               {["About", "Work", "Projects", "Contact"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                     {item}
                  </a>
               ))}
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

         {/* Mobile */}
         <div 
            className="flex md:hidden cursor-pointer z-50" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
            {isMenuOpen ? (
               <span className="text-3xl font-bold text-gray-950 dark:text-white">✕</span>
            ) : (
               <MenuIcon className="text-gray-950 dark:text-white" />
            )}
         </div>

         {isMenuOpen && (
            <div className="fixed inset-0 z-40 bg-white dark:bg-gray-950 flex flex-col items-center justify-center gap-8 md:hidden transition-all">
               <div className="flex flex-col items-center gap-6 text-2xl font-medium">
                  {["About", "Work", "Projects", "Contact"].map((item) => (
                     <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`} 
                        className="nav-link text-gray-900 dark:text-white"
                        onClick={closeMenu}
                     >
                        {item}
                     </a>
                  ))}
               </div>
               
               <div className="w-16 h-px bg-gray-300 my-2"></div>

               <div className="flex flex-col items-center gap-6">
                  <div
                     className="cursor-pointer flex items-center gap-2"
                     onClick={() => setIsDark(!isDark)}
                  >
                     {isDark ? (
                        <>
                           <MoonIcon className="w-8 h-8 text-white" />
                           <span className="text-white">Dark Mode</span>
                        </>
                     ) : (
                        <>
                           <SunIcon className="w-8 h-8 text-gray-600" />
                           <span className="text-gray-900">Light Mode</span>
                        </>
                     )}
                  </div>
                  <Button onClick={closeMenu}>
                     <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                        Resume
                     </a>
                  </Button>
               </div>
            </div>
         )}
      </header>
   );
};

export default Header;