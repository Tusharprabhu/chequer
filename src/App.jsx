import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "/components/Home";
import About from "/components/About";
import Navbar from "../components/Navbar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
