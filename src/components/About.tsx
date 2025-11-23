// IMG
import Picture from "../assets/img/pfp_1.jpg";

const About = () => {
   return (
      <section id="about" className="bg-gray-100">
         <div className="media-screen">
            <div className="flex flex-col">
               <p className="section">About me</p>
               <div className="mt-14 flex flex-row gap-x-14">
                  <div>
                     <div className="profile-picture bg-white w-[280px] before:top-1/6 before:right-1/5">
                        <img
                           src={Picture}
                           alt="Selfie"
                           className="object-cover object-top"
                        />
                     </div>
                  </div>
                  <div className="ml-12">
                     <h4 className="leading-25">
                        Curious about me? Here you have it.
                     </h4>
                     <p>
                        I'm a passionate and aspiring tech enthusiast with a
                        strong desire to learn and grow in the field of
                        technology. My journey began with a fascination for
                        computers and software, which
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
