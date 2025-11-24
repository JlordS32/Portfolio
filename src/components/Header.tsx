import { Link } from "react-router";
import sunIcon from "../assets/icons/sun.svg";
import resumePdf from "../assets/jaylou_resume.pdf";
import Button from "./Button";

const Header = () => {
   return (
      <header className="flex justify-between items-center py-6 media-screen">
         <div className="logo">
            <Link to="/">
               <div className="text-4xl font-bold text-gray-950">
                  {"<JR />"}
               </div>
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
               <a href="#contact" className="nav-link">
                  Contact
               </a>
            </div>
            <div>
               <div className="divider mx-6 h-full border-l border-gray-300"></div>
            </div>
            <div className="others flex gap-x-6">
               <img src={sunIcon} alt="Dark Mode Toggle" />
               <Button>
                  <a 
                     href={resumePdf} 
                     target="_blank" 
                     rel="noopener noreferrer"
                  >
                     Resume
                  </a>
               </Button>
            </div>
         </div>
      </header>
   );
};

export default Header;
