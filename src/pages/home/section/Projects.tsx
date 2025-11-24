import Card from "../../../components/Card";
import PDSLogo from "../../../assets/pds-logo.png";

type Project = {
   title: string;
   description: string;
   techStack: string[];
   imageUrl: string;
};

const Projects = () => {
   const projects: Project[] = [
      {
         title: "Project Title",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nam aliquid nihil vero quam molestiae quia atque similique deleniti ab, obcaecati illo pariatur? Cum, esse?",
         techStack: ["Tech1", "Tech2"],
         imageUrl: PDSLogo
      },
      {
         title: "Project Title",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nam aliquid nihil vero quam molestiae quia atque similique deleniti ab, obcaecati illo pariatur? Cum, esse?",
         techStack: ["Tech1", "Tech2"],
         imageUrl: PDSLogo
      },
      {
         title: "Project Title",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nam aliquid nihil vero quam molestiae quia atque similique deleniti ab, obcaecati illo pariatur? Cum, esse?",
         techStack: ["Tech1", "Tech2"],
         imageUrl: PDSLogo
      },
   ];

   return (
      <section className="project">
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
                           <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-6`}>
                              <div className="img-container w-1/2 bg-gray-300 p-6">
                                 <img src={imageUrl} alt={title} className="bg-white rounded-2xl"/>
                              </div>
                              <div className="w-1/2 p-6">
                                 <h3 className="text-xl font-semibold pb-6">
                                    {title}
                                 </h3>
                                 <p>{description}</p>
                                 <div className="tech-stack pt-6 flex flex-wrap gap-4">
                                    {techStack.map((tech, techIndex) => (
                                       <span
                                          key={techIndex}
                                          className="section"
                                       >
                                          {tech}
                                       </span>
                                    ))}
                                 </div>
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
