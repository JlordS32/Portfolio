import Card from "../../../components/Card";
import DashboardApp from "../../../assets/img/pds.png";
import CodeIcon from "../../../assets/icons/code.svg?react";

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
            "A secure, standalone desktop application designed to streamline IT administrative tasks. Built to replace manual reporting processes, this tool interfaces directly with the Microsoft Graph API to fetch real-time Microsoft 365 license and user data. The application features a responsive dashboard that visualizes usage metrics and automates the generation of client-facing reports, reducing manual workload by approximately 90%.",
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
                              <div className="img-container w-1/2 bg-gray-100 p-6">
                                 <img
                                    src={imageUrl}
                                    alt={title}
                                    className="bg-white rounded-2xl object-cover h-full"
                                 />
                              </div>
                              <div className="w-1/2 p-6">
                                 <h3 className="text-xl font-semibold pb-6">
                                    {title}
                                 </h3>
                                 <p className="text-sm">{description}</p>
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
                                       className="inline-flex items-center mt-4 text-gray-600 hover:underline ml-4"
                                    >
                                       Live Demo
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
