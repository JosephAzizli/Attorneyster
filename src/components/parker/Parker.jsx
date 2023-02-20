import React from "react";

//CSS
import "./Parker.css";

//IMAGES
import statue from "./images/statue.svg";
import hammer from "./images/hammer.svg";
import pattern from "./images/pattern.svg";
import notebook from "./images/notebook.svg";
import peter from "./images/peter.svg";
import exp from "./images/35.svg";

const Parker = () => {
  return (
    <div className="parker"  >
      <div className="row" data-aos="fade-right"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine">
        <img
          className="statue col-12 col-md-5 col-lg-6"
          src={statue}
          alt="statue"
        />
        <div className="text col-12 col-md-7 col-lg-6">
          <h1>Welcome to Attorney Law - Lawyer & Law Firm Company</h1>
          <img src={pattern} alt="" />
          <p>
            Although we are located in Brooklyn, our maritime lawyers are proud
            to help the injured throughout the nation, including workers who
            were working in foreign waters at the time of the incident go up
            against the largest offshore companies and win.
          </p>
        </div>
      </div>
      <div className="row" data-aos="fade-left"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine">
        <img className="hammer col-12 col-md-5 col-lg-6" src={hammer} alt="" />
        <div className="peter col-12 col-md-7 col-lg-6">
          <div>
            <img src={peter} alt="" />
            <h1>Peter Parker</h1>
          </div>
          <div className="badges row">
            <div className="success col-12 col-md-6">
              <img src={notebook} alt="" />
            </div>
            <div className="exp col-12 col-md-6">
              <img src={exp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parker;
