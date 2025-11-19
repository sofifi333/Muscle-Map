import "../Components.css";
import { useEffect } from "react";
import ExercisePage from "../ExercisePage";
import img from "../../assets/back.jpg";

export default function Back() {
  // 1. Call useEffect
  useEffect(() => {
    // 2. The side effect: changing the browser title
    document.title = "You Got Your BACK";

    // 3. The empty dependency array: means this runs ONLY once
    //    after the component first renders (mounts).
  }, []);

  let muscleDescription =
    "The back is the largest and most complex muscle group in the upper body. It is primarily composed of the Latissimus Dorsi ('Lats'), which give the back its width, and the Trapezius (Traps), Rhomboids, and Erector Spinae, which provide thickness and spinal support. Because the back muscles originate from the spine and hips and insert into the arm and shoulder blade, they are responsible for all pulling motions—pulling things down toward you (vertical) and pulling things in toward your body (horizontal).";

  let whyExercise =
    "Training the back is the ultimate antidote to the 'office posture' caused by sitting at a computer. Strong back muscles pull the shoulders rearward, opening up the chest and fixing rounded shoulders. Aesthetically, developing the Lats creates the coveted 'V-Taper,' which makes the waist look smaller by comparison. Functionally, a strong back protects the spine during heavy lifting (like squats and deadlifts) and allows you to dominate in any sport that involves climbing, rowing, or wrestling.";

  return (
    <div>
      <ExercisePage
        // top and middle of page:
        muscleGroup={"Back"}
        muscleDescription={muscleDescription}
        whyExercise={whyExercise}
        img={img}
        // exercises grid:
        subsection1={"Width (Vertical Pulls)"}
        subsection2={"Thickness (Horizontal Rows)"}
        // Section 1: Lats focus (The V-Taper)
        exercise1_s1={"Weighted Pull-Ups"}
        exercise2_s1={"Wide-Grip Lat Pulldowns"}
        exercise3_s1={"Single-Arm Iliac Pulldown"}
        exercise4_s1={"Straight-Arm Lat Pulldown"}
        // Section 2: Upper Back/Traps/Rhomboids focus (The Density)
        exercise1_s2={"Barbell Bent-Over Row"}
        exercise2_s2={"Chest-Supported T-Bar Row"}
        exercise3_s2={"Seated Cable Row (Neutral Grip)"}
        exercise4_s2={"Face Pulls"}
        // links:
        // Width Links
        link1_s1={"https://www.youtube.com/watch?v=eGo4IYlbE5g"}
        link2_s1={"https://www.youtube.com/watch?v=CAwf7n6Luuc"}
        link3_s1={"https://www.youtube.com/watch?v=uWKXm03T1-4"}
        link4_s1={"https://www.youtube.com/watch?v=GkO1sUoZfTU"}
        // Thickness Links
        link1_s2={"https://www.youtube.com/watch?v=9efgcGun-Lw"}
        link2_s2={"https://www.youtube.com/watch?v=j3Igk5nyZE4"}
        link3_s2={"https://www.youtube.com/watch?v=GZbfZ033f74"}
        link4_s2={"https://www.youtube.com/watch?v=rep-wV1GqEW"}
      ></ExercisePage>
    </div>
  );
}
