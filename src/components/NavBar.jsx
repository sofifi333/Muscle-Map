import "./Components.css";
import Button from "./Button.jsx";
import logo from "../assets/arm.png";

export default function NavBar() {
  return (
    <nav class="nav">
      <section>
        <img src={logo} />
      </section>
      <section class="header-links">
        <button>
          <p>Home</p>
        </button>

        <p>Exercises</p>
        <p>About</p>
      </section>
    </nav>
  );
}
