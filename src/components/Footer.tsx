const Footer = () => {
   return (
      <div className="text-center py-8 text-sm">
         &copy; {new Date().getFullYear()} Developed by{" "}
         <span className="underline">Jaylou Rasonabe</span>. Credits to{" "}
         <span className="underline">Sagar Shah</span> for Design. All rights
         reserved.
      </div>
   );
};

export default Footer;
