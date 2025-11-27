const Footer = () => {
   return (
      <div className="text-center py-8 text-sm absolute left-0 bottom-0 w-full">
         &copy; {new Date().getFullYear()} Developed by{" "}
         <span className="underline">
            <a
               href="https://www.linkedin.com/in/jlords32/"
            >
               Jaylou Rasonabe
            </a>
         </span>
         . Credits to{" "}
         <span className="underline">
            <a href="https://www.figma.com/@shahsagarm">Sagar Shah</a>
         </span>{" "}
         for Design. All rights reserved.
      </div>
   );
};

export default Footer;
