import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import CardContainer from "./components/Dashboard/CardContainer";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className=".container-xxl">
      <Routes>
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/dashboard" element={<CardContainer/>} />
      </Routes>
    </div>
  );
}

export default App;
