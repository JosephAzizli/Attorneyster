import React from "react";


import Intro from "../components/intro/Intro";
import Navbar from "../components/navbar/Navbar";
import History from "../components/history/History";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <>
        <Navbar />
        <Intro />
        <History/>
      </>
    </div>
  );
};

export default Home;
