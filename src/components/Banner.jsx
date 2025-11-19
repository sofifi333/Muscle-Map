// header of the homepage
// semantic -- nav is a div, for accessibility - semantic html tag
import "./Components.css";
import heria from "../assets/buds.jpg";

/* have this display on every page */

export default function Banner() {
  return (
    <div className="banner">
      <img className="banner-img" src={heria} alt="The Time is NOW" />
      <h1 className="banner-text">The Time is NOW!</h1>
    </div>
  );
}
