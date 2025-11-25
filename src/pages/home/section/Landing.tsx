// SVG
import Github from "../../../assets/icons/github.svg";
import LinkedIn from "../../../assets/icons/linkedin.svg";
import MapPin from "../../../assets/icons/map-pin.svg";

// IMG
import ProfilePicture from "../../../assets/img/pfp.jpg";

const Landing = () => {
   return (
      <div className="h-[550px] flex flex-row justify-between items-center my-14 media-screen">
         <div className="landing w-2/3">
            <h1 className="leading-24">Hi, I'm Jaylou 👋</h1>
            <p className="mt-4">
               I am a <strong>Computer Science (Honours) student at UTS</strong>, passionate
               about bridging the gap between complex theory and practical
               application. My focus lies in Software Engineering and Data
               Analytics, leveraging tools like React, TypeScript, and Docker to
               build robust solutions.
            </p>
            <div className="location mt-12">
               <div className="flex gap-2 ">
                  <img src={MapPin} alt="Location Icon" />
                  <span>Sydney, NSW</span>
               </div>
            </div>
            <div className="icons flex flex-row gap-4 mt-4">
               <div className="social-link">
                  <a
                     href="https://github.com/jlords32"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={Github} alt="GitHub Icon" />
                  </a>
               </div>
               <div className="social-link">
                  <a
                     href="https://www.linkedin.com/in/jlords32/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={LinkedIn} alt="LinkedIn Icon" />
                  </a>
               </div>
            </div>
         </div>
         <div className="profile-picture bg-white before:left-1/5 before:top-1/5">
            <img
               src={ProfilePicture}
               alt="Profile Picture"
               className="w-[280px] h-[280px] object-cover object-top"
            />
         </div>
      </div>
   );
};

export default Landing;
