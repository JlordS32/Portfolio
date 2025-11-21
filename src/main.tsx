import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// PAGES
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

// STYLES
import "./index.css";

const router = createBrowserRouter([
   { path: "/", element: <Home /> },
   { path: "*", element: <NotFound /> },
]);

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
