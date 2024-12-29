import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "/components/Home";
import Issuedlist from "/components/Issuedlist";
import Navbar from "../components/Navbar";
import Printcheque from "/components/Printcheque";
import Report from "/components/Report";


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
    path: "/issuedlist",
    element: (
      <>
        <Navbar />
        <Issuedlist />
      </>
    ),
  },
  
  {
    path: "/printcheque",
    element: (
      <>
        <Navbar />
        <Printcheque />
      </>
    ),
  },
  {

    path:"report",
    element: (
      <>
        <Navbar />
        <Report />
      </>
    ),
  }
  
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
