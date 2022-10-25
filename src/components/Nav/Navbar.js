import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [state, setState] = useState(false);

  const handleState = () => {
    setState(!state);
  };

  return (
    <nav className=".container-fluid">
      <h3>Toolhub Records</h3>
      <div>
        <ul id="nav-list" className={state ? "#nav-list active" : "#nav-list"}>
          <li>
            <a className="active" href="/#">
              Home
            </a>
          </li>
          <li>
            <a href="/#">Dashboard</a>
          </li>
          <li>
            <a href="/#">Leaderboard</a>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={handleState}>
        <i id="bar" className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
