// Components
import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => {
   return (
      <div className="flex flex-col">
         <Landing />
         <About />
         <Skills />
      </div>
   );
};

export default Home;
