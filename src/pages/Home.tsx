// Components
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home = () => {
   return (
      <div className="flex flex-col">
         <Landing />
         <About />
         <Skills />
         <WorkExperience />  
      </div>
   );
};

export default Home;
