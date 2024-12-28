import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "/components/Home";
import Issuedlist from "/components/Issuedlist";
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
    path: "/issuedlist",
    element: (
      <>
        <Navbar />
        <Issuedlist />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
