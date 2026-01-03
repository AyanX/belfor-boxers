import "./App.scss";
import { Suspense } from "react";
import React from "react";
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

import Loader from "./Components/Utils/Loader";
import useFetchData from "./Components/Utils/useData";

const About = React.lazy(() => import("./Components/About/About"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));
const Error = React.lazy(() => import("./Components/Error/Error"));

const Layout = () => {

  const {data,loading,academyData} = useFetchData()

  if(loading){
    return <Loader />
  }


  return (
    <div>
      <ScrollToTop>
        <NavBar />
        <main>
          <Outlet context={{data, academyData}} />
        </main>
        <Footer data={data} academyData={academyData} />
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
