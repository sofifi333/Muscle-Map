// components/Routes.jsx
import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";

import Home from "./pages/Home.jsx";
import Biceps from "./pages/Biceps.jsx";
import Triceps from "./pages/Triceps.jsx";
import Back from "./pages/Back.jsx";
import Chest from "./pages/Chest.jsx";
import Core from "./pages/Core.jsx";
import Legs from "./pages/Legs.jsx";
import Shoulders from "./pages/Shoulders.jsx";

// This is the router CONFIG, not a React component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is your layout (NavBar + Outlet + Footer)
    children: [
      { index: true, element: <Home /> }, // default route "/"
      { path: "home", element: <Home /> },
      { path: "biceps", element: <Biceps /> },
      { path: "triceps", element: <Triceps /> },
      { path: "back", element: <Back /> },
      { path: "chest", element: <Chest /> },
      { path: "core", element: <Core /> },
      { path: "legs", element: <Legs /> },
      { path: "shoulders", element: <Shoulders /> },
    ],
  },
]);

export default router;
