import "../Components.css";
import Banner from "../Banner.jsx";
import NavBar from "../NavBar.jsx";
import Grid from "../Grid.jsx";
import Footer from "../Footer.jsx";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Grid></Grid>
      <Footer></Footer>
    </div>
  );
}
