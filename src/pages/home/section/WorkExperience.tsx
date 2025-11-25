import Card from "../../../components/Card";

// Images
import PDSLogo from "../../../assets/pds-logo.png";

type WorkExperienceType = {
   companyName: string;
   companyLogo: string;
   companyUrl: string;
   position: string;
   responsibilities: string[];
   start: Date;
   end?: Date;
};

const WorkExperience = () => {
   const experiences: WorkExperienceType[] = [
      {
         companyName: "Pacific Data Solutions",
         companyLogo: PDSLogo,
         companyUrl: "https://pacificdata.solutions/",
         position: "IT Support Technician",
         responsibilities: [
            "Delivered technical support for 30+ client environments, resolving hardware, software, and network issues.",
            "Managed client servers, automated tasks, and optimized IT processes to enhance efficiency.",
            "Led on-site deployments and troubleshooting for new systems, networks, and infrastructure rollouts.",
            "Built and deployed custom client software as part of internal projects.",
            "Produced a hardware/IT lifecycle forecast report for a client to guide upgrades and budgeting.",
         ],
         start: new Date("2023-01-01"),
         end: undefined,
      },
   ];

   return (
      <section id="work" className="work bg-gray-100">
         <div className="media-screen ">
            <div className="flex flex-col">
               <p className="section">Work Experience</p>
               <p className="text-center mt-6 mb-12">
                  Here is a quick summary of my work experience:
               </p>
               <div className="flex flex-col gap-10 justify-center">
                  {/* Experience Cards go here */}
                  {experiences.map((exp, index) => {
                     const {
                        companyName,
                        companyLogo,
                        companyUrl,
                        position,
                        responsibilities,
                        start,
                        end,
                     } = exp;
                     return (
                        <Card className="p-6" key={index}>
                           <div className="flex flex-row gap-x-12">
                              <div className="company-logo">
                                 <a
                                    href={companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    <img
                                       src={companyLogo}
                                       alt={`${companyName} Logo`}
                                       className="w-32 cursor-pointer"
                                    />
                                 </a>
                              </div>
                              <div className="flex flex-col w-[55%]">
                                 <h3 className="text-xl font-semibold pb-6">
                                    {position}
                                 </h3>
                                 <ul className="list-disc text-sm text-wrap">
                                    {responsibilities.map((item, idx) => (
                                       <li key={idx}>{item}</li>
                                    ))}
                                 </ul>
                              </div>
                              <div className="text-sm grow text-end">
                                 {`${start.toLocaleString("default", {
                                    month: "short",
                                    year: "numeric",
                                 })} - ${
                                    end
                                       ? end.toLocaleString("default", {
                                            month: "short",
                                            year: "numeric",
                                         })
                                       : "Present"
                                 }`}
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

export default WorkExperience;
