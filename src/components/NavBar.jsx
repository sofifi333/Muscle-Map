import "./Components.css";

import logo from "../assets/arm.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="nav">
      <section>
        <img src={logo} />
      </section>
      <section class="header-links">
        <Link className="linkButton" to="/Home">
          Home
        </Link>
      </section>
    </nav>
  );
}
