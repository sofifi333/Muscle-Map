import "./Components.css/";
import { Link } from "react-router-dom";

export default function Grid() {
  return (
    <div className="grid-container">
      {/* <div className="grid-item">{/* <Exercises name={"Biceps"} /> </div> */}
      <div className="grid-item">Chest</div>
      <div className="grid-item">Triceps</div>
      <div className="grid-item">Shoulders</div>
      <Link className="linkButton" to="/Biceps">
        <div className="grid-item">Biceps </div>
      </Link>

      <div className="grid-item">Back</div>
      <div className="grid-item">Core</div>
      <div className="grid-item legs">Legs</div>
    </div>
  );
}
