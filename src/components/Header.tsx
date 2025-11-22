import { Link } from "react-router";
import sunIcon from "../assets/icons/sun.svg";
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
               <Link to="/about" className="nav-link">
                  About
               </Link>
               <Link to="/work" className="nav-link">
                  Work
               </Link>
               <Link to="/contact" className="nav-link">
                  Contact
               </Link>
            </div>
            <div>
               <div className="divider mx-6 h-full border-l border-gray-300"></div>
            </div>
            <div className="others flex gap-x-6">
               <img src={sunIcon} alt="Dark Mode Toggle" />
               <Button text="Resume" />
            </div>
         </div>
      </header>
   );
};

export default Header;
