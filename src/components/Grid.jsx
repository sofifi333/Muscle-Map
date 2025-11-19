import "./Components.css";
import { Link } from "react-router-dom";

export default function Grid() {
  return (
    <div className="outer-grid">
      <div className="grid-container">
        {/* <div className="grid-item">{/* <Exercises name={"Biceps"} /> </div> */}
        <Link className="linkButton" to="/chest">
          <div className="grid-item">Chest</div>
        </Link>

        <Link className="linkButton" to="/triceps">
          <div className="grid-item">Triceps</div>
        </Link>

        <Link className="linkButton" to="/shoulders">
          <div className="grid-item">Shoulders</div>
        </Link>

        <Link className="linkButton" to="/biceps">
          <div className="grid-item">Biceps</div>
        </Link>

        <Link className="linkButton" to="/back">
          <div className="grid-item">Back</div>
        </Link>

        <Link className="linkButton" to="/core">
          <div className="grid-item">Core</div>
        </Link>

        {/* row 3 - legs is by itself, needs to be centered specifically so I added center-item class */}
        <Link className="linkButton center-item" to="/legs">
          <div className="grid-item legs">Legs</div>
        </Link>
      </div>
    </div>
  );
}
