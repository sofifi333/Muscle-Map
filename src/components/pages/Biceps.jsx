import "../Components.css";
import ExercisePage from "../ExercisePage";
import img from "../../assets/bicep-flex.png";
export default function Biceps() {
  let muscleDescription =
    "The biceps brachii, commonly known as the biceps, is a large, two-headed muscle located on the front of the upper arm between the shoulder and the elbow. Its primary function is to flex the elbow (pull the forearm toward the shoulder, as in a bicep curl) and supinate the forearm (rotate the forearm outward, turning the palm up). The muscle is composed of a long head and a short head, which originate at different points on the shoulder blade but join together to form a single muscle belly before inserting near the elbow. This dual structure allows the biceps to contribute to movements at both the shoulder and the elbow joints.";
  let whyExercise =
    "Training your biceps is important because they are the main muscles responsible for bending your elbow (like when you lift a glass or do a bicep curl) and turning your palm upward (supination). Strengthening them not only makes everyday tasks that involve pulling and lifting easier but also improves elbow and shoulder stability, which helps prevent injuries. Additionally, exercising your biceps ensures a balanced development of your arm muscles, complementing the work done by your triceps on the back of your arm. Plus you'll look jacked!";
  return (
    <div>
      <ExercisePage
        // top and middle of page:
        muscleGroup={"Biceps"}
        muscleDescription={muscleDescription}
        whyExercise={whyExercise}
        img={img}
        // exercises grid:
        subsection1={"Long-Head"}
        subsection2={"Short-Head"}
        exercise1_s1={"Incline Dumbell Curl"}
        exercise1_s2={"Preacher Curl (with bar)"}
        exercise2_s1={"Neutral Grip Pull-Ups (s.o calisthenics)"}
        exercise2_s2={"Hammer Curl"}
        exercise3_s1={"Behind-The-Back Cable Curl"}
        exercise3_s2={"Spider Curl"}
        exercise4_s1={"Zottman Curl"}
        exercise4_s2={"Concentration Curl"}
        // links:
        link1_s1={"https://www.youtube.com/watch?v=5s_jsf7yahg"}
        link1_s2={"https://www.youtube.com/watch?v=SDFZBaJcTsU"}
        link2_s1={"https://www.youtube.com/watch?v=cd_38C6LuvY"}
        link2_s2={"https://www.youtube.com/watch?v=CFBZ4jN1CMI"}
        link3_s1={"https://www.youtube.com/watch?v=Df0GjCkUh90"}
        link3_s2={"https://www.youtube.com/watch?v=-4RNtxT0LwM"}
        link4_s1={"https://www.youtube.com/watch?v=D7bMA4WEKMI"}
        link4_s2={"https://www.youtube.com/watch?v=BE3SKKhMiX0"}
      ></ExercisePage>
    </div>
  );
}
