import "../Components.css";
import { useEffect } from "react";
import ExercisePage from "../ExercisePage";
import img from "../../assets/shoulder.jpg";

export default function Shoulders() {
  // 1. Call useEffect
  useEffect(() => {
    // 2. The side effect: changing the browser title
    document.title = "Shoulders - The ULTIMATE Pump";

    // 3. The empty dependency array: means this runs ONLY once
    //    after the component first renders (mounts).
  }, []);

  let muscleDescription =
    "The Deltoids (shoulders) are a large, triangular muscle group that caps the shoulder joint. They are divided into three distinct heads: the Anterior Delt (Front), the Lateral Delt (Side), and the Posterior Delt (Rear). The Anterior delt handles lifting arms forward and pressing overhead. The Lateral delt lifts the arm out to the side (abduction) and is the primary driver of shoulder width. The Posterior delt pulls the arm backward and is often neglected, leading to hunched posture.";

  let whyExercise =
    "Broad shoulders are the defining characteristic of the 'V-Taper' physique. Widening your shoulders effectively makes your waist look smaller by creating a more dramatic ratio. Beyond aesthetics, the shoulder is the most mobile joint in the body, making it highly susceptible to injury. Strengthening all three heads evenly—especially the rear delts—stabilizes the joint and protects the rotator cuff during bench pressing and daily overhead activities.";

  return (
    <div>
      <ExercisePage
        // top and middle of page:
        muscleGroup={"Shoulders"}
        muscleDescription={muscleDescription}
        whyExercise={whyExercise}
        img={img}
        // exercises grid:
        subsection1={"Compound Pressing (Front Focus)"}
        subsection2={"Isolation (Side & Rear Width)"}
        // Section 1: Heavy Overheads (Mass Builders)
        exercise1_s1={"Standing Overhead Barbell Press (OHP)"}
        exercise2_s1={"Seated Dumbbell Shoulder Press"}
        exercise3_s1={"Arnold Press"}
        exercise4_s1={"Landmine Press"}
        // Section 2: The "Cap" & Rear (Detail Work)
        exercise1_s2={"Dumbbell Lateral Raises"}
        exercise2_s2={"Egyptian (Cable) Lateral Raises"}
        exercise3_s2={"Reverse Pec Deck (Rear Delts)"}
        exercise4_s2={"Bent-Over Dumbbell Reverse Fly"}
        // links:
        // Pressing Links
        link1_s1={"https://www.youtube.com/watch?v=QAQ64hK4Xxs"}
        link2_s1={"https://www.youtube.com/watch?v=HzIiNhHhhtA"}
        link3_s1={"https://www.youtube.com/watch?v=6Z15_WdXmjw"}
        link4_s1={"https://www.youtube.com/watch?v=KjGvqbqvVGw"}
        // Isolation Links
        link1_s2={"https://www.youtube.com/watch?v=3VcKaXpzqRo"}
        link2_s2={"https://www.youtube.com/watch?v=W1SD96lrudY"}
        link3_s2={"https://www.youtube.com/watch?v=2tGjNqS8OQk"}
        link4_s2={"https://www.youtube.com/watch?v=ttvfGg9d76c"}
      ></ExercisePage>
    </div>
  );
}
