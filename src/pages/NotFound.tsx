import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
   const navigate = useNavigate();

   return (
      <div className="text-center min-h-[82vh] flex justify-center align-center">
         <div className="self-center">
            <h1>404 - Page Not Found {":("}</h1>
            <p className="pt-6">Oops! We couldn't find that page.</p>

            <Button className="btn mt-12" onClick={() => navigate(-1)}>
               Go Back
            </Button>
         </div>
      </div>
   );
};

export default NotFound;
