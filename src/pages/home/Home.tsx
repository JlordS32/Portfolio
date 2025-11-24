// Components
import Landing from "./section/Landing";
import About from "./section/About";
import Skills from "./section/Skills";
import WorkExperience from "./section/WorkExperience";
import Projects from "./section/Projects";
import Contact from "./section/Contact";

const Home = () => {
   return (
      <div className="flex flex-col">
         <Landing />
         <About />
         <Skills />
         <WorkExperience />
         <Projects />
         <Contact />
      </div>
   );
};

export default Home;
