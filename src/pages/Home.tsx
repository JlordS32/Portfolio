import ProfilePicture from "../assets/img/pfp.jpg";

// SVG
import Github from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";

const Home = () => {
   return (
      <div className="h-[550px] flex flex-row justify-between items-center">
         <div className="landing w-2/3">
            <h1>Hi, I'm Jaylou 👋</h1>
            <p className="mt-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
               animi rem ea doloribus, accusantium adipisci! Similique harum
               aperiam, iure ut tenetur provident consequatur hic iste
               reprehenderit laudantium, veritatis assumenda tempora, voluptatum
               dolore fugiat. Similique molestiae amet id quo doloremque quia
               suscipit delectus nisi vel! Eveniet inventore quidem dolor.
               Distinctio, ducimus!
            </p>
            <div className="icons flex flex-row gap-4 mt-4">
               <div className="social-link">
                  <a
                     href="https://github.com/jlords32"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={Github} alt="GitHub Icon" />
                  </a>
               </div>
               <div className="social-link">
                  <a
                     href="https://www.linkedin.com/in/jlords32/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <img src={LinkedIn} alt="LinkedIn Icon" />
                  </a>
               </div>
            </div>
         </div>
         <div className="profile-picture">
            <img
               src={ProfilePicture}
               alt="Profile Picture"
               className="w-[280px] h-[280px] object-cover object-top"
            />
         </div>
      </div>
   );
};

export default Home;
