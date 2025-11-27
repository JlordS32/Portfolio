import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// PAGES
import Home from "./pages/home/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

// COMPONENTS
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

// STYLES
import "./index.css";

// TODO: Link supabase to dynamically update skills, projects, and work experience section.
// TODO: Add a login page to update the content through a dashboard.
// BUG: Some elements are overflowing when screen width goes down (before mobile).

// LAYOUT
const RootLayout = () => {
   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

// ROUTING CONFIG
const router = createBrowserRouter([
   {
      path: "/",
      Component: RootLayout,
      children: [
         { index: true, Component: Home },
         { path: "*", Component: NotFound },
      ],
   },
]);

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
