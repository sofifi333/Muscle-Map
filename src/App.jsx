import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Routes from "./components/Routes.jsx";
import { RouterProvider } from "react-router-dom";

// app is used as a layout for each route
// <> </> -- react fragment, if u wanna be DIFFERENT and not use a div
function App() {
  return (
    <>
      <NavBar />

      {/* This is where pages show up */}
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
