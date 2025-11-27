import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { cn } from "@/lib/utils";

// SVG
import GithubIcon from "../../../assets/icons/github.svg?react";
import LinkedInIcon from "../../../assets/icons/linkedin.svg?react";
import MapPinIcon from "../../../assets/icons/map-pin.svg?react";
import FrontendMentorIcon from "../../../assets/icons/frontend-mentor.svg?react";

// IMG
import ProfilePicture from "../../../assets/img/pfp.jpg";

const Landing = () => {
   return (
      <div className="md:h-[550px] flex flex-col-reverse justify-between items-center my-16 media-screen md:flex-row md:px-12 p-6">
         <div className="landing md:w-2/3">
            <h1 className="leading-4 mt-24 md:leading-24">Hi, I'm Jaylou 👋</h1>
            <p className="mt-4">
               I am a <strong>Computer Science (Honours) student at UTS</strong>
               , passionate about bridging the gap between complex theory and
               practical application. My focus lies in Software Engineering and
               Data Analytics, leveraging tools like React, TypeScript, and
               Docker to build robust solutions.
            </p>
            <div className="location mt-12">
               <div className="flex gap-2 ">
                  <MapPinIcon className="social" />
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
                     <GithubIcon className="social" />
                  </a>
               </div>
               <div className="social-link">
                  <a
                     href="https://www.linkedin.com/in/jlords32/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <LinkedInIcon className="social" />
                  </a>
               </div>
               <div className="social-link">
                  <a
                     href="https://www.frontendmentor.io/profile/JlordS32"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <FrontendMentorIcon className="social" />
                  </a>
               </div>
            </div>
         </div>
         <div className="profile-picture md:before:left-1/5 md:before:top-1/5 before:top-1/8 before:left-1/8">
            <ImageZoom
               zoomMargin={100}
               backdropClassName={cn(
                  '[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80'
               )}
            >
               <img
                  src={ProfilePicture}
                  alt="Profile Picture"
                  className="w-[280px] h-[280px] object-cover object-top"
               />
            </ImageZoom>
         </div>
      </div>
   );
};

export default Landing;
