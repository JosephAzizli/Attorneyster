import React from "react";

import Intro from "../components/intro/Intro";
import Navbar from "../components/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <>
        <Navbar />
        <Intro />
      </>
    </div>
  );
};

export default Home;
