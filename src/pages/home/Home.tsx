// Components
import Landing from "./section/Landing";
import About from "./section/About";
import Skills from "./section/Skills";
import WorkExperience from "./section/WorkExperience";
import Projects from "./section/Projects";

const Home = () => {
   return (
      <div className="flex flex-col">
         <Landing />
         <About />
         <Skills />
         <WorkExperience />
         <Projects />
      </div>
   );
};

export default Home;
