import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar.js/NavBar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import { Suspense } from "react";
import Loader from "./Components/Utils/Loader";
import React from "react";
const About = React.lazy(() => import("./Components/About/About"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));
const Error = React.lazy(() => import("./Components/Error/Error"));

const Layout = () => {
  return (
    <div>
      <ScrollToTop>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ScrollToTop>
    </div>
  );
};

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<Suspense fallback={<Loader />}><About /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<Loader />}><Contact /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<Loader />}><Error /></Suspense>} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}
