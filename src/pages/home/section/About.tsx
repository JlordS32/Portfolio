// IMG
import Picture from "../../../assets/img/pfp_1.jpg";

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
                        I’d describe myself as a 'progressive thinker', which is
                        just a fancy way of saying I care as much about the
                        journey of learning as I do about the final result. For
                        me, technology has always been a bit magical, mostly
                        because I didn't grow up surrounded by it.
                        <br /><br/>
                        I grew up in a remote village where the internet was
                        barely a thing. While everyone else seemed to have the
                        latest smartphones, I was still rocking a brick phone,
                        setting high scores in Snake and Space Invaders. That
                        changed the day my mom brought home a bright pink ASUS
                        laptop. Opening that laptop for the first time felt like
                        unlocking a door to a bigger world, and even though I
                        didn't know how to code yet, I was hooked.
                        <br /><br/>
                        My path to becoming a software engineer wasn't exactly a
                        straight line, though. By high school, I was the
                        unofficial 'IT guy' for my classmates, but my actual
                        attempts at coding (HTML and CSS in Year 8) were a
                        struggle. I actually walked away from that class
                        thinking tech wasn't for me.
                        <br /><br/>
                        It wasn't until a few years later, during a course at
                        TAFE, that I decided to give it another shot. That’s
                        when I discovered Python. Unlike my first attempt, this
                        time the logic just clicked. Writing that first
                        print("Hello World") gave me the exact same rush of
                        excitement I felt opening that pink laptop as a kid.
                        That was the moment I knew I had to stop guessing and
                        start pursuing Computer Science for real.
                        <br /><br/>
                        Nowadays, I focus on bridging the gap between complex
                        code and how people actually use it. Whether I’m
                        debugging a messy system or building a new app from
                        scratch, I’m driven by a simple desire to build things
                        that matter and work smoothly.
                        <br /><br/>
                        I’m always up for a chat about tech, how far we’ve come
                        since the brick phone days, or just to swap stories. My
                        inbox is always open! 😉
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
