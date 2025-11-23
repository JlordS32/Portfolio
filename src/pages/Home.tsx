// Components
import Landing from "../components/Landing";
import About from "../components/About";

const Home = () => {
   return (
      <div className="flex flex-col">
         <Landing />
         <About />
         <section className="skills">
            <div className="media-screen">
               
            </div>
         </section>
      </div>
   );
};

export default Home;
