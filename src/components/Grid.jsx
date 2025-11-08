import "./Components.css/";
import Exercises from "./Exercises";

export default function Grid() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <Exercises name={"Biceps"} />
      </div>
      <div className="grid-item chest">
        <p>Chest</p>
      </div>

      <div className="grid-item">Legs</div>

      <div className="grid-item">Back</div>
      <div className="grid-item">Triceps</div>
      <div className="grid-item">Core</div>
      {/* <div className="grid-item"></div> */}
      <div className="grit-item shoulders">Shoulders</div>
      {/* <div className="grid-item"></div> */}
    </div>
  );
}
