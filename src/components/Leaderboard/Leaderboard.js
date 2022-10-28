import Navbar from "../Nav/Navbar";
import "./leaderboard.css";
import Profile from "./Profile";

const Leaderboard = () => {
  const handleClick = (e) => {
    console.log(e.target.data);
  };
  return (
    <>
    <Navbar/>
    <section className=".container-xxl">
      <h1 className="leaderboard">Leaderboard</h1>
      <p className="brief">These users helped improve toolhub records in the last 30 days!</p>
      <Profile/>
    </section>
    </>
  );
};

export default Leaderboard;
