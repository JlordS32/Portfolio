import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// PAGES
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

// COMPONENTS
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

// STYLES
import "./index.css";

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
      children: [{ index: true, Component: Home }],
   },
   { path: "*", Component: NotFound },
]);

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
