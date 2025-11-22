import Landing from "../components/Landing";

// IMG
import Picture from "../assets/img/pfp_1.jpg";

const Home = () => {
   return (
      <div className="flex flex-col">
         <Landing />
         <section className="bg-gray-100 py-30">
            <div className="media-screen">
               <div className="flex flex-col">
                  <h4 className="text-center">About me</h4>
                  <div className="mt-8">
                     <div className="flex flex-row w-full">
                        <div className="profile-picture bg-white">
                           <img
                              src={Picture}
                              alt="Selfie"
                              className="w-[280px] h-[280px] object-cover object-top"
                           />
                        </div>
                        {/* <p>
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit. Vero maiores voluptatem dolor quod commodi nisi
                           ullam in enim dolorem. Assumenda distinctio deleniti
                           illo, soluta cupiditate ratione quidem vero fugiat ex
                           vitae, suscipit sequi aliquam qui sunt aut voluptate
                           sapiente neque alias dolor quos nisi molestiae
                           dolorum. Amet molestias magnam quod, atque voluptas
                           eaque, molestiae consectetur fugit aliquam vel ipsa
                           nesciunt iste odio totam nam quia voluptatibus.
                           Assumenda iste ipsa ipsam repudiandae, inventore
                           doloribus reiciendis vitae nam aliquam consequuntur
                           eius ipsum ducimus voluptates fugit necessitatibus
                           quo laboriosam iusto quasi! Optio saepe alias culpa
                           distinctio ex modi necessitatibus maxime itaque sunt
                           ratione?
                        </p> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Home;
