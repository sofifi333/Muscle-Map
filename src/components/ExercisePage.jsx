import "./Components.css";
import Biceps from "../assets/bicep-flex.png";
// title, image (left), scientific description (right), why exercise?, exercises (title),
// list of exercises (split per muscle group) - image, name, how to (either pop up gif, or link to other site)
// more exercises link

export default function ExercisePage() {
  return (
    <div className="exercisepage">
      <div>
        <img src="../assets/bicep-flex.png" width="300" height="300"></img>
      </div>
    </div>
  );
}
