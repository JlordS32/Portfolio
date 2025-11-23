import Card from "../../../components/Card";

// Images
import PDSLogo from "../../../assets/pds-logo.png";

const WorkExperience = () => {
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
                  <Card>
                     <div className="flex flex-row gap-x-12">
                        <div className="company-logo">
                           <img src={PDSLogo} alt="PDS Logo" className="w-32" />
                        </div>
                        <div className="flex flex-col w-[55%]">
                           <h3 className="text-xl font-semibold pb-6">
                              IT Support Technician
                           </h3>
                           <ul className="list-disc text-sm text-wrap">
                              <li>
                                 Delivered technical support for 30+ client
                                 environments, resolving hardware, software, and
                                 network issues.
                              </li>
                              <li>
                                 Managed client servers, automated tasks, and
                                 optimized IT processes to enhance efficiency.
                              </li>
                              <li>
                                 Led on-site deployments and troubleshooting for
                                 new systems, networks, and infrastructure
                                 rollouts.
                              </li>
                              <li>
                                 Built and deployed custom client software as
                                 part of internal projects.
                              </li>
                              <li>
                                 Produced a hardware/IT lifecycle forecast
                                 report for a client to guide upgrades and
                                 budgeting.
                              </li>
                           </ul>
                        </div>
                        <div className="text-sm grow text-end">
                           Jan 2023 - Present
                        </div>
                     </div>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WorkExperience;
