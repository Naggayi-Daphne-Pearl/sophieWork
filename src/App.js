import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import CardContainer from "./components/Dashboard/CardContainer";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Home from "./components/Home/HomePage";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Nav/Navbar"


// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className=".container-xxl">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <Navbar/>
      <Routes>
        <Route exact path="/leaderboard" element={<Leaderboard />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<CardContainer />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
