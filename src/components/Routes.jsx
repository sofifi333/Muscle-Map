import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import Biceps from "./pages/Biceps.jsx";

function Routes() {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/Home",
      Component: Home,
    },
    {
      path: "/Biceps",
      Component: Biceps,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
