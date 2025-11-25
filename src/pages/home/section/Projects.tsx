import Card from "../../../components/Card";
import DashboardApp from "../../../assets/img/pds.png";
import MagiPlant from "../../../assets/img/magiplant.png";
import CodeIcon from "../../../assets/icons/code.svg?react";
import GlobeIcon from "../../../assets/icons/globe.svg?react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type Project = {
   title: string;
   description: string;
   techStack: string[];
   imageUrl: string;
   src?: string;
   live?: string;
};

const Projects = () => {
   const projects: Project[] = [
      {
         title: "M365 Licence Dashboard & Report Generator",
         description:
            "A secure, standalone desktop application designed to streamline IT administrative tasks. Built to replace manual reporting processes, this tool interfaces directly with the Microsoft Graph API to fetch real-time Microsoft 365 license and user data.\n\n The application features a responsive dashboard that visualizes usage metrics and automates the generation of client-facing reports, reducing manual workload.",
         techStack: [
            "Python",
            "Plotly Dash",
            "Flask",
            "Pandas",
            "MS Graph API",
            "HTML/CSS",
            "Pywebview",
            "Fernet",
         ],
         imageUrl: DashboardApp,
         src: "https://github.com/JlordS32/Dashboard_App/tree/main",
      },
      {
         title: "Magiplant",
         description:
            "Originally conceived during a 36-hour game jam, Magi Plant is an ambitious genre-bending project that fuses Tower Defense strategy with Roguelike progression and Idle game mechanics. As the Team Lead for a group of three, I directed the technical vision and engineered the core systems in Unity.\n\n The gameplay centers on a fantasy living core mechanic: players utilise a Day/Night cycle to farm 'Sun' and 'Water' resources, strengthening their central tree and boosting passive generation rates before defending against infinite, procedurally escalating waves of enemies by night.\n\n Below is a demo submitted to gamejam, however the current progress of the game is far ahead!",
         techStack: [
            "Unity Engine",
            "C#",
            "Unity UI Toolkit",
            "A* Pathfinding",
            "2D Tilemaps",
         ],
         imageUrl: MagiPlant,
         src: "https://github.com/JlordS32/MagiPlant",
         live: "https://jlords32.itch.io/magiplant",
      },
      {
         title: "Audiophile website",
         description:
            "Originally conceived during a 36-hour game jam, Magi Plant is an ambitious genre-bending project that fuses Tower Defense strategy with Roguelike progression and Idle game mechanics. As the Team Lead for a group of three, I directed the technical vision and engineered the core systems in Unity.\n\n The gameplay centers on a fantasy living core mechanic: players utilise a Day/Night cycle to farm 'Sun' and 'Water' resources, strengthening their central tree and boosting passive generation rates before defending against infinite, procedurally escalating waves of enemies by night.\n\n Below is a demo submitted to gamejam, however the current progress of the game is far ahead!",
         techStack: [
            "Unity Engine",
            "C#",
            "Unity UI Toolkit",
            "A* Pathfinding",
            "2D Tilemaps",
         ],
         imageUrl: MagiPlant,
         src: "https://github.com/JlordS32/MagiPlant",
         live: "https://jlords32.itch.io/magiplant",
      },
   ];

   return (
      <section id="projects" className="project">
         <div className="media-screen">
            <div className="flex flex-col">
               <p className="section">Projects</p>
               <p className="text-center mt-6 mb-12">
                  A selection of personal and collaborative projects I've worked
                  on:
               </p>
               <div className="flex flex-col gap-10 justify-center">
                  {/* Project Cards go here */}
                  {projects.map((project, index) => {
                     const { title, description, techStack, imageUrl } =
                        project;

                     return (
                        <Card className="p-0" key={index}>
                           <div
                              className={`flex ${
                                 index % 2 === 0
                                    ? "flex-row"
                                    : "flex-row-reverse"
                              } gap-6`}
                           >
                              <div className="img-container flex align-center justify-center w-1/2 bg-gray-100 p-6">
                                 <div className="self-center">
                                    <Zoom>
                                       <img
                                          src={imageUrl}
                                          alt={title}
                                          className="bg-transparent w-full object-contain rounded-2xl shadow-lg"
                                       />
                                    </Zoom>
                                 </div>
                              </div>
                              <div className="w-1/2 p-6">
                                 <h3 className="text-xl font-semibold pb-6">
                                    {title}
                                 </h3>
                                 <p className="text-sm whitespace-pre-line">{description}</p>
                                 <div className="tech-stack pt-6 flex flex-wrap gap-2">
                                    {techStack.map((tech, techIndex) => (
                                       <span
                                          key={techIndex}
                                          className="text-xs bg-gray-200 px-3 py-1 rounded-full"
                                       >
                                          {tech}
                                       </span>
                                    ))}
                                 </div>
                                 {project.src && (
                                    <a
                                       href={project.src}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="inline-flex items-center mt-6 text-gray-400 hover:underline"
                                    >
                                       <CodeIcon className="w-6 h-6" />
                                    </a>
                                 )}
                                 {project.live && (
                                    <a
                                       href={project.live}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="inline-flex items-center mt-4 text-gray-400 hover:underline ml-4"
                                    >
                                       <GlobeIcon className="w-6 h-6" />
                                    </a>
                                 )}
                              </div>
                           </div>
                        </Card>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Projects;
