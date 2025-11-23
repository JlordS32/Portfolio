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
         <section id="work" className="work bg-gray-100">
            <div className="media-screen ">
               <div className="flex flex-col">
                  <p className="section">Work Experience</p>
                  <div></div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Home;
