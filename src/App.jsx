// import { createBrowserRouter, RouterProvider } from "react-router";
// import ReactDOM from "react-dom/client";
// import Home from "./components/pages/Home.jsx";
// import Biceps from "./components/pages/Biceps.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Routes from "./components/Routes.jsx";

// App is the entire app -> used as a component in main.jsx (uses this as a router)
/*
1.) Banner.jsx (Navbar Or Banner Hot guy flexing) <- (how to make navbar/banner google)
2.) Grid.jsx (CSS GRID <-- 3x3 grid that scales with site Grid 1x1) <- data 
3.) WorkoutDetails.JSX <-- Props that give it data when clicked. 

*/
// <> </> -- react fragment, if u wanna be DIFFERENT and not use a div
function App() {
  return (
    <>
      <Routes>
        <NavBar></NavBar>
        <Footer></Footer>
      </Routes>
    </>
  );
}

export default App; // App.jsx is acting as a component -- the component is a whole page (in this case) - we import it
// into main.jsx -- where the app is actually rendered
