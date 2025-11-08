import "./App.css"; // uses css file for styling
// import Box from "./components/Box.jsx"; // import Box fn from box.jsx
import Banner from "./components/Banner.jsx";
import NavBar from "./components/NavBar.jsx";
import Grid from "./components/Grid.jsx";

// App is the entire app -> used as a component in main.jsx (uses this as a router)
/*
1.) Banner.jsx (Navbar Or Banner Hot guy flexing) <- (how to make navbar/banner google)
2.) Grid.jsx (CSS GRID <-- 3x3 grid that scales with site Grid 1x1) <- data 
3.) WorkoutDetails.JSX <-- Props that give it data when clicked. 

*/
// <> </> -- react fragment, if u wanna be DIFFERENT and not use a div
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Grid></Grid>
    </div>
  );
}

export default App; // App.jsx is acting as a component -- the component is a whole page (in this case) - we import it
// into main.jsx -- where the app is actually rendered
