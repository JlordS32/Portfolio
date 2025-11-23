// Components
import Landing from "../components/Landing";
import About from "../components/About";

const Home = () => {
   return (
      <div className="flex flex-col">
         <Landing />
         <About />
      </div>
   );
};

export default Home;
