import { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link  style={{ textDecoration: "none" }}className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link  style={{ textDecoration: "none" }} to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/leaderboard"  style={{ textDecoration: "none" }}>Leaderboard</Link>
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
