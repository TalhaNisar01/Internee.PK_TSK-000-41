import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import CompanyPage from "./pages/CompanyPage";
import InternshipPage from "./pages/InternshipPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect, useState } from "react";
import InternshipsListPage from "./pages/InternshipsListPage";
import LoginPage from "./pages/LoginPage";
import GoogleForm from "./components/GoogleForm";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage screenWidth={screenWidth} />} />
          <Route
            path="/internship"
            element={<InternshipPage screenWidth={screenWidth} />}
          />
          <Route path="/internships/:id" element={<InternshipsListPage />} />
          <Route path="/internships/forms" element={<GoogleForm />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </>
    )
  );
  return (
    <>
      <Analytics />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
