import React from "react";

// Import logo SVGs as React components
const logos = import.meta.glob("../../../assets/icons/logos/*.svg", {
   eager: true,
   query: "?react",
});

const Skills = () => {
   return (
      <section id="skills">
         <div className="media-screen">
            <div className="flex flex-col">
               <p className="section">Skills</p>
               <p className="text-center mt-6 mb-12 w-2/3 self-center md:w-full">
                  The skills, tools and technology I'm proficient at:
               </p>
               <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                  {Object.entries(logos).map((entry) => {
                     const [path, module] = entry;
                     const IconComponent = (
                        module as {
                           default: React.FC<React.SVGProps<SVGSVGElement>>;
                        }
                     ).default;
                     const fileName = path;

                     return (
                        <div key={fileName} className="icon-wrapper w-16 fill-black dark:fill-white">
                           <IconComponent className="icon w-16 h-16" />
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Skills;
