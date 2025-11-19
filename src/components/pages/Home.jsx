import "../Components.css";
import Banner from "../Banner.jsx";
import Grid from "../Grid.jsx";
import React, { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    // 2. The side effect: changing the browser title
    document.title = "WE START NOW!";
    // 3. The empty dependency array: means this runs ONLY once
    //    after the component first renders (mounts).
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Grid></Grid>
    </div>
  );
}
