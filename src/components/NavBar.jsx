import "./Components.css";

import logo from "../assets/arm.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <section>
        <img src={logo} />
      </section>
      <section className="header-links">
        <Link className="linkButton" to="/home">
          Home
        </Link>
      </section>
    </nav>
  );
}
