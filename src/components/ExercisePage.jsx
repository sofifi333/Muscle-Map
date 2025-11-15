import "./Components.css";
import Biceps from "../assets/bicep-flex.png";
// title, image (left), scientific description (right), why exercise?, exercises (title),
// list of exercises (split per muscle group) - image, name, how to (either pop up gif, or link to other site)
// more exercises link
// hard code this first, then make stuff with props

// use grid components to position stuff on the page

// lets start by making the first half of the page one grid
export default function ExercisePage() {
  return (
    <div className="exercise-page">
      <h1>Exercise Name Here!</h1>
      <div className="top-grid">
        <div className="muscle-img">
          <img src={Biceps} />
        </div>

        <div className="muscle-description">
          <h1>What Are Biceps Really?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            distinctio veniam dolorem sapiente eum harum eveniet quas. Officia
            dicta harum fugit blanditiis! Dolor, explicabo porro qui temporibus
            minus voluptatum tenetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error quos dolorem, debitis, sed nihil voluptates
            facilis consequatur alias quae sequi distinctio odit architecto
            magni! Quisquam, esse! Tempore eligendi vero omnis. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Earum, cumque. Vitae
            numquam debitis atque aperiam at maxime, quibusdam quasi magnam
            magni eum, pariatur adipisci odio totam ducimus omnis consequatur
            voluptatem?
          </p>
        </div>
      </div>
      <div className="why-exercise">
        <h1>
          <i>Why</i> Exercise?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          provident pariatur veniam sed quos delectus commodi ut totam libero,
          architecto voluptatibus quaerat aut autem, quae necessitatibus, cumque
          deserunt inventore aspernatur!
        </p>
      </div>
      <h1 id="exercises">Exercises</h1>
      <div className="exercises-grid">
        <div></div>
      </div>
    </div>
  );
}
// this is a test
