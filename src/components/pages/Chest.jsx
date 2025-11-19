import "../Components.css";
import ExercisePage from "../ExercisePage";
import React, { useEffect } from "react";
import img from "../../assets/chest2.png";

export default function Chest() {
  // 1. Call useEffect
  useEffect(() => {
    // 2. The side effect: changing the browser title
    document.title = "Chest - The ULTIMATE Pump";

    // 3. The empty dependency array: means this runs ONLY once
    //    after the component first renders (mounts).
  }, []);
  let muscleDescription =
    "The pectoralis major, commonly known as the chest, is a thick, fan-shaped muscle situated on the anterior of the human chest. It makes up the bulk of the chest muscles and lies under the breast. It consists of two main heads: the clavicular head (upper chest) and the sternocostal head (middle and lower chest). Its primary functions include flexion, adduction (bringing the arms toward the centerline), and internal rotation of the humerus. Beneath this lies the smaller pectoralis minor, which aids in stabilizing the shoulder blade.";

  let whyExercise =
    "A well-developed chest is often considered the centerpiece of a strong physique. Beyond aesthetics, strengthening your pecs is crucial for any pushing movement, from opening heavy doors to performing push-ups. Strong chest muscles contribute significantly to upper body power and shoulder stability. Furthermore, training the upper back and chest in a balanced manner helps correct posture (preventing rounded shoulders) and improves functional strength for daily lifting and carrying tasks.";

  return (
    <div>
      <ExercisePage
        // top and middle of page:
        muscleGroup={"Chest"}
        muscleDescription={muscleDescription}
        whyExercise={whyExercise}
        img={img}
        // exercises grid:
        subsection1={"Upper Chest"}
        subsection2={"Middle & Lower Chest"}
        // Section 1: Upper Chest (Clavicular Head focus)
        exercise1_s1={"Incline Dumbbell Press"}
        exercise2_s1={"Incline Barbell Bench Press"}
        exercise3_s1={"Upper Chest Machine Press"}
        exercise4_s1={"Low-to-High Cable Fly"}
        // Section 2: Middle/Lower Chest (Sternal Head focus)
        exercise1_s2={"Weighted Dips"}
        exercise2_s2={"High-to-Low Cable Fly"}
        exercise3_s2={"Decline Pushups / Press"}
        exercise4_s2={"Cable Crossovers (Jackhammer)"}
        // links:
        // Upper Chest Links
        link1_s1={"https://www.youtube.com/watch?v=XgwXopZadqs"}
        link2_s1={"https://www.youtube.com/watch?v=ExbGHEtzMio"}
        link3_s1={"https://www.youtube.com/watch?v=_Ql9jG1F518"}
        link4_s1={"https://www.youtube.com/watch?v=OKJdmGVKTLc"}
        // Lower Chest Links
        link1_s2={"https://www.youtube.com/watch?v=E7ZuFDpIBL8"}
        link2_s2={"https://www.youtube.com/watch?v=P9rhNK5Gmps"}
        link3_s2={"https://www.youtube.com/watch?v=vdv6sO1Tc6g"}
        link4_s2={"https://www.youtube.com/watch?v=MqHqYpbQ19g"}
      ></ExercisePage>
    </div>
  );
}
