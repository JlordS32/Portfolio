import { useState } from "react";
import Button from "../../../components/Button";
import CheckMarkIcon from "../../../assets/icons/checkmark.svg?react";
import CopyIcon from "../../../assets/icons/copy.svg?react";
import EmailIcon from "../../../assets/icons/mail.svg?react";
import PhoneIcon from "../../../assets/icons/phone.svg?react";
import GithubIcon from "../../../assets/icons/github.svg?react";
import LinkedInIcon from "../../../assets/icons/linkedin.svg?react";

const Contact = () => {
   const [copiedId, setCopiedId] = useState<string | null>(null);

   const handleCopy = async (textToCopy: string, id: string) => {
      try {
         await navigator.clipboard.writeText(textToCopy);

         setCopiedId(id);
         setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
         console.error("Failed to copy text: ", err);
      }
   };

   return (
      <section id="contact">
         <div className="media-screen">
            <div className="flex flex-col">
               <p className="section">Contact Me</p>
               <p className="text-lg text-center mt-6 mb-12 text-wrap w-1/2 mx-auto">
                  What’s next? Feel free to reach out to me if you're looking
                  for a developer, have a query, or simply want to connect.
               </p>
               <div className="flex flex-col gap-6 mb-12">
                  {/* --- EMAIL SECTION --- */}
                  <div className="flex flex-row items-center justify-center gap-4">
                     <div>
                        <EmailIcon className="inline-block w-8 h-8 mr-2 text-gray-400" />
                     </div>
                     <div className="text-3xl">jlordsty128@gmail.com</div>
                     <Button
                        onClick={() =>
                           handleCopy("jlordsty128@gmail.com", "email")
                        }
                     >
                        {copiedId === "email" ? (
                           <>
                              <CheckMarkIcon className="inline-block w-4 h-4 mr-2" />
                              Copied!
                           </>
                        ) : (
                           <>
                              <CopyIcon className="inline-block w-4 h-4 mr-2" />
                              Copy
                           </>
                        )}
                     </Button>
                  </div>

                  {/* --- PHONE SECTION --- */}
                  <div className="flex flex-row items-center justify-center gap-4">
                     <div>
                        <PhoneIcon className="inline-block w-8 h-8 mr-2 text-gray-400" />
                     </div>
                     <div className="text-3xl">+61449977526</div>
                     <Button
                        onClick={() => handleCopy("+61449977526", "phone")}
                     >
                        {copiedId === "phone" ? (
                           <>
                              <CheckMarkIcon className="inline-block w-4 h-4 mr-2" />
                              Copied!
                           </>
                        ) : (
                           <>
                              <CopyIcon className="inline-block w-4 h-4 mr-2" />
                              Copy
                           </>
                        )}
                     </Button>
                  </div>
               </div>
               <div className="mx-auto">
                  <p>You may also find me on these platforms:</p>
                  <div className="icons flex flex-row align-center justify-center gap-4 mt-4">
                     <div className="social-link">
                        <a
                           href="https://github.com/jlords32"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <GithubIcon className="text-black"/>
                        </a>
                     </div>
                     <div className="social-link">
                        <a
                           href="https://www.linkedin.com/in/jlords32/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <LinkedInIcon className="text-black" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
