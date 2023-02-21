import React from "react";

import "./OpinionCard2.css";

import brackets from "./images/brackets.svg";

const OpinionCard = ({ sekil, ad, ish, rey }) => {
  return (
    <div className="opinionCard ">
      <div className="person">
        <img className="avatar" src={sekil} alt="" />
        <div>
          <h1>{ad}</h1>
          <p>{ish}</p>
        </div>
      </div>
      <div className="comment">
        <img src={brackets} alt="" />
        <p>{rey}</p>
      </div>
    </div>
  );
};

export default OpinionCard;
