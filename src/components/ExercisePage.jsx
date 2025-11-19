import "./Components.css";

export default function ExercisePage({
  muscleGroup,
  muscleDescription,
  whyExercise,
  img,
  subsection1,
  subsection2,
  exercise1_s1,
  exercise1_s2,
  exercise2_s1,
  exercise2_s2,
  exercise3_s1,
  exercise3_s2,
  exercise4_s1,
  exercise4_s2,
  link1_s1,
  link1_s2,
  link2_s1,
  link2_s2,
  link3_s1,
  link3_s2,
  link4_s1,
  link4_s2,
}) {
  return (
    <div className="exercise-page">
      <h1>{muscleGroup}</h1>

      <div className="top-grid">
        <div className="muscle-img">
          <img src={img} alt={`${muscleGroup} muscle diagram`} />
        </div>

        <div className="muscle-description">
          <h1>What Are {muscleGroup} Really?</h1>
          <p>{muscleDescription}</p>
        </div>
      </div>

      <div className="why-exercise">
        <h1>
          <i>Why</i> Exercise?
        </h1>
        <p>{whyExercise}</p>
      </div>

      <h1 id="exercises">Exercises</h1>

      <div className="exercise-grid-section">
        <div className="exercises-grid">
          <h2 className="sub-group1">{subsection1}</h2>
          <h2 className="sub-group2">{subsection2}</h2>

          {/* --- Row 1 --- */}
          <div className="subgroup1-items">
            <p>
              <b>{exercise1_s1}</b>
            </p>
            <img src="" alt="" />
            <a href={link1_s1} target="_blank" rel="noopener noreferrer">
              <p>how to do this exercise</p>
            </a>
          </div>

          <div className="subgroup2-items">
            <p>
              <b>{exercise1_s2}</b>
            </p>
            <img src="" alt="" />
            <a href={link1_s2} target="_blank" rel="noopener noreferrer">
              <p>how to do this exercise</p>
            </a>
          </div>

          {/* --- Row 2 --- */}
          <div className="subgroup1-items">
            <p>
              <b>{exercise2_s1}</b>
            </p>
            <img src="" alt="" />
            <a href={link2_s1} target="_blank" rel="noopener noreferrer">
              <p>how to do this exercise</p>
            </a>
          </div>

          <div className="subgroup2-items">
            <p>
              <b>{exercise2_s2}</b>
            </p>
            <img src="" alt="" />
            <a href={link2_s2} target="_blank" rel="noopener noreferrer">
              <p>how to do this exercise</p>
            </a>
          </div>

          {/* --- Row 3 --- */}
          <div className="subgroup1-items">
            <p>
              <b>{exercise3_s1}</b>
            </p>
            <img src="" alt="" />
            <a href={link3_s1} target="_blank" rel="noopener noreferrer">
              <p>how to do this exercise</p>
            </a>
          </div>

          <div className="subgroup2-items">
            <p>
              <b>{exercise3_s2}</b>
            </p>
            <img src="" alt="" />
            <a href={link3_s2} target="_blank" rel="noopener noreferrer">
              <p>how to do this exercise</p>
            </a>
          </div>

          {/* --- Row 4 --- */}
          <div className="subgroup1-items">
            <p>
              <b>{exercise4_s1}</b>
            </p>
            <img src="" alt="" />
            <a href={link4_s1} target="_blank" rel="noopener noreferrer">
              <p>how to do this exercise</p>
            </a>
          </div>

          <div className="subgroup2-items">
            <p>
              <b>{exercise4_s2}</b>
            </p>
            <img src="" alt="" />
            <a href={link4_s2} target="_blank" rel="noopener noreferrer">
              <p>how to do this exercise</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
