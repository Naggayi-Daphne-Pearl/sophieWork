import { useState, useEffect } from "react";
import Navbar from "../Nav/Navbar";
import "./leaderboard.css";
import leaderboardData from "./leaderboardData";
import Profile from "./Profile";

const Leaderboard = () => {
  const [profileData, setProfileData] = useState([]);

  const loadProfiles = async () => {
    await setProfileData(leaderboardData);
  };

  useEffect(() => {
    loadProfiles();
  }, []);

  const handleClick = (e) => {
    console.log(e.target.data);
  };

  return (
    <>
    <Navbar/>
    <section className="board">
      <h1 className="leaderboard">Leaderboard</h1>
      <div className="duration">
        <button onClick={handleClick} className="button" data="7">
          7 days
        </button>
        <button onClick={handleClick} className="button" data="30">
          30 days
        </button>
        <button onClick={handleClick} className="button" data="0">
          All-Time
        </button>
      </div>
      <div id="profile">
        {
          profileData.map((each)=>(
            <Profile key={each.id} img={each.img} fullName={each.fullName} score={each.score}></Profile>
          ))
        }
      </div>
    </section>
    </>
  );
};

export default Leaderboard;
