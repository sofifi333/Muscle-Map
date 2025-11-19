import "../Components.css";
import { useEffect } from "react";
import ExercisePage from "../ExercisePage";
import img from "../../assets/triceps.jpg";

export default function Triceps() {
  // 1. Call useEffect
  useEffect(() => {
    // 2. The side effect: changing the browser title
    document.title = "KILLER Triceps";

    // 3. The empty dependency array: means this runs ONLY once
    //    after the component first renders (mounts).
  }, []);

  let muscleDescription =
    "The Triceps Brachii is a three-headed muscle located on the back of the upper arm. It consists of the Long Head (the largest part, on the inside), the Lateral Head (the outside 'horseshoe'), and the Medial Head (located underneath near the elbow). Together, they make up roughly two-thirds of your upper arm mass. Their primary function is the extension of the elbow joint (straightening the arm). The Long head also plays a unique role in shoulder extension because it crosses the shoulder joint.";

  let whyExercise =
    "If you want big arms, you need to prioritize your triceps, not your biceps. Since they occupy significantly more volume on the arm, growing them is the fastest way to stretch your t-shirt sleeves. Functionally, strong triceps are the limiting factor in almost all pushing movements. If you find yourself failing halfway up on a Bench Press or Overhead Press (the 'lockout' phase), weak triceps are usually the culprit. Strengthening them ensures a powerful lockout and healthier elbows.";

  return (
    <div>
      <ExercisePage
        // top and middle of page:
        muscleGroup={"Triceps"}
        muscleDescription={muscleDescription}
        whyExercise={whyExercise}
        img={img}
        // exercises grid:
        subsection1={"Long Head (Overhead / Stretch)"}
        subsection2={"Lateral & Medial Heads (Pushdowns)"}
        // Section 1: Long Head (Crucial for size)
        exercise1_s1={"EZ-Bar Skullcrushers"}
        exercise2_s1={"Overhead Dumbbell Extension (Seated)"}
        exercise3_s1={"Overhead Cable Extension (Rope)"}
        exercise4_s1={"JM Press (Hybrid)"}
        // Section 2: Lateral/Medial Heads (The Horseshoe & Lockout)
        exercise1_s2={"Tricep Rope Pushdowns"}
        exercise2_s2={"Close-Grip Bench Press"}
        exercise3_s2={"Tricep Dips (Upright Torso)"}
        exercise4_s2={"Single-Arm Cable Pushdown (Supinated)"}
        // links:
        // Long Head Links
        link1_s1={"https://www.youtube.com/watch?v=d_KZxkY_0cM"}
        link2_s1={"https://www.youtube.com/watch?v=YbX7Wd8jQ-Q"}
        link3_s1={"https://www.youtube.com/watch?v=ns-RGsbU8F8"}
        link4_s1={"https://www.youtube.com/watch?v=1k1kE4F6Wjo"}
        // Lateral/Medial Links
        link1_s2={"https://www.youtube.com/watch?v=vB5OHsJ3EME"}
        link2_s2={"https://www.youtube.com/watch?v=nwd5Mh5X_Ss"}
        link3_s2={"https://www.youtube.com/watch?v=2z8JmcrW-As"}
        link4_s2={"https://www.youtube.com/watch?v=CpdoCL3qUQA"}
      ></ExercisePage>
    </div>
  );
}
