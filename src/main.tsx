import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import Home from "./pages/Home.tsx";

// STYLES
import "./index.css";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
