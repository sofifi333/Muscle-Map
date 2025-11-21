import "../Components.css";
import { useEffect } from "react";
import ExercisePage from "../ExercisePage";
import img from "../../assets/chicken.jpg";

export default function Legs() {
  // 1. Call useEffect
  useEffect(() => {
    // 2. The side effect: changing the browser title
    document.title = "NO CHICKEN LEGS";

    // 3. The empty dependency array: means this runs ONLY once
    //    after the component first renders (mounts).
  }, []);

  let muscleDescription =
    "The legs house the largest and strongest muscles in the human body. They are primarily divided into two opposing groups: The Quadriceps (front of the thigh), responsible for extending the knee; and the Posterior Chain, which includes the Hamstrings (back of the thigh) and the Gluteus Maximus (the buttocks). The Hamstrings flex the knee and extend the hips, while the Glutes are the primary powerhouse for hip extension. This complex system supports the entire weight of the body and generates the most power in athletics.";

  let whyExercise =
    "Skipping leg day is the cardinal sin of lifting. Training legs releases the highest amount of anabolic hormones (like testosterone and HGH) because of the sheer volume of muscle tissue involved, which helps your *entire* body grow. Functionally, strong legs are essential for mobility, speed, and jumping power. Aesthetically, big quads and developed glutes complete the physique; without them, you look like a lightbulb—heavy on top, tiny on the bottom.";

  return (
    <div>
      <ExercisePage
        // top and middle of page:
        muscleGroup={"Legs"}
        muscleDescription={muscleDescription}
        whyExercise={whyExercise}
        img={img}
        // exercises grid:
        subsection1={"Quads (Knee Dominant)"}
        subsection2={"Hamstrings & Glutes (Hip Dominant)"}
        // Section 1: The Quads (The Tear Drop)
        exercise1_s1={"Barbell Back Squat (High Bar)"}
        exercise2_s1={"Leg Press"}
        exercise3_s1={"Bulgarian Split Squats"}
        exercise4_s1={"Leg Extensions"}
        // Section 2: The Posterior Chain (The Power)
        exercise1_s2={"Romanian Deadlift (RDL)"}
        exercise2_s2={"Seated Leg Curls"}
        exercise3_s2={"Barbell Hip Thrusts"}
        exercise4_s2={"Standing Calf Raises"}
        // links:
        // Quad Links
        link1_s1={"https://www.youtube.com/watch?v=ultWZbUMPL8"}
        link2_s1={"https://www.youtube.com/watch?v=IZxyjW7MPJQ"}
        link3_s1={"https://www.youtube.com/watch?v=2C-uNgKwPLE"}
        link4_s1={"https://www.youtube.com/watch?v=ljO4jkwv8wQ"}
        // Posterior Links
        link1_s2={"https://www.youtube.com/watch?v=JCXUYuzwNrM"}
        link2_s2={"https://www.youtube.com/watch?v=OrxowZ45774"}
        link3_s2={"https://www.youtube.com/watch?v=SEDQd1n0cvg"}
        link4_s2={"https://www.youtube.com/watch?v=-mMV3Qlry5c"}
      ></ExercisePage>
    </div>
  );
}
