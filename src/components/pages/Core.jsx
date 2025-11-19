import { useEffect } from "react";
import "../Components.css";
import ExercisePage from "../ExercisePage";
import img from "../../assets/core.jpeg";

export default function Core() {
  useEffect(() => {
    // 2. The side effect: changing the browser title
    document.title = "CRAZY CORE";

    // 3. The empty dependency array: means this runs ONLY once
    //    after the component first renders (mounts).
  }, []);
  let muscleDescription =
    "The core is not just your 'six-pack'; it is a complex system of muscles that wrap around your entire midsection like a corset. It includes the Rectus Abdominis (the visible bumps on the front), the Obliques (sides), and the Transverse Abdominis (the deep layer underneath). While the Rectus Abdominis is responsible for flexing the spine (crunching), the deep core muscles act as stabilizers, protecting the spine and transferring force between your upper and lower body during almost every movement.";

  let whyExercise =
    "A strong core is the foundation of all athletic movement. If your core is weak, you lose power in your squats, deadlifts, and overhead presses because energy leaks out of your midsection. Training the deep core specifically improves your posture, reduces lower back pain, and creates a tighter waistline. Training the visible abs (hypertrophy) develops the 'blocky' six-pack look. Combining both ensures you are not only aesthetic but also injury-resilient and functionally strong.";

  return (
    <div>
      <ExercisePage
        // top and middle of page:
        muscleGroup={"Core & Abs"}
        muscleDescription={muscleDescription}
        whyExercise={whyExercise}
        img={img}
        // exercises grid:
        subsection1={"Visible Abs (Hypertrophy)"}
        subsection2={"Deep Core (Stability)"}
        // Section 1: Rectus Abdominis / Obliques (Building the blocks)
        exercise1_s1={"Cable Crunches"}
        exercise2_s1={"Hanging Leg Raises"}
        exercise3_s1={"Ab Wheel Rollout"}
        exercise4_s1={"Russian Twists (Weighted)"}
        // Section 2: Transverse Abdominis / Stabilizers (The inner belt)
        exercise1_s2={"Dead Bugs"}
        exercise2_s2={"Stomach Vacuums"}
        exercise3_s2={"Pallof Press"}
        exercise4_s2={"RKC Plank (High Tension)"}
        // links:
        // Visible Abs Links
        link1_s1={"https://www.youtube.com/watch?v=2fPEPcZzFm8"}
        link2_s1={"https://www.youtube.com/watch?v=Pr1ieGZ5atk"}
        link3_s1={"https://www.youtube.com/watch?v=EqrZz7xYF0E"}
        link4_s1={"https://www.youtube.com/watch?v=wkD8rjkodUI"}
        // Deep Core Links
        link1_s2={"https://www.youtube.com/watch?v=g_BYB0R-4vs"}
        link2_s2={"https://www.youtube.com/watch?v=iC9z0xG5Y40"}
        link3_s2={"https://www.youtube.com/watch?v=5_Mk1fP8U9g"}
        link4_s2={"https://www.youtube.com/watch?v=6LwwFM7x0Kc"}
      ></ExercisePage>
    </div>
  );
}
