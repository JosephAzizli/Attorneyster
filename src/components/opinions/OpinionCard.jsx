import React from "react";

import "./OpinionCard.css";

import brackets from "./images/brackets.svg";

const OpinionCard = ({ sekil, ad, ish, rey }) => {
  return (
    <div className="opinionCard ">
      <div className="comment">
        <img src={brackets} alt="" />
        <p>{rey}</p>
      </div>
      <div className="person">
        <img className="avatar" src={sekil} alt="" />
        <div>
          <h1>{ad}</h1>
          <p>{ish}</p>
        </div>
      </div>
    </div>
  );
};

export default OpinionCard;
