import React from "react";

// CSS
import "./Cases.css";

//IMAGES
import pattern1 from "./images/pattern1.svg";
import pattern2 from "./images/pattern2.svg";
import logo1 from "./images/logos/logo1.svg";
import logo2 from "./images/logos/logo2.svg";
import logo3 from "./images/logos/logo3.svg";
import logo4 from "./images/logos/logo4.svg";
import logo5 from "./images/logos/logo5.svg";
import img1 from "./images/clients.svg";
import img2 from "./images/succsfulcases.svg";
import img3 from "./images/casesserved.svg";


const Cases = () => {
  return (
    <div  data-aos="zoom-out-down"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <section className="Cases">
        <h1>
          Fighting to get what <br /> you deserve
        </h1>
        <div className="pattern">
          <img src={pattern1} alt="" />
        </div>
        <div className="casetxt">
          <p>
            Our board-certified family law attorneys work to achieve a fair and
            timely resolution of the legal issues in your case.
          </p>
        </div>
        <div className="caseBadges row">
          <img  data-aos="zoom-out-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="col-12 col-md-6 col-lg-4" src={img1} alt="" />
          <img  data-aos="zoom-out-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="col-12 col-md-6 col-lg-4" src={img2} alt="" />
          <img  data-aos="zoom-out-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="col-12 col-md-6 col-lg-4" src={img3} alt="" />
        </div>
      </section>
      <section>
        <div className="meet"  data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img src={pattern2} alt="" />
          <h1>Meet the Partners</h1>
          <img src={pattern2} alt="" />
        </div>
        <div className="partners row"  data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img className="col-12 col-lg-2 col-md-4" src={logo1} alt="" />
          <img className="col-12 col-lg-2 col-md-4" src={logo2} alt="" />
          <img className="col-12 col-lg-2 col-md-4" src={logo3} alt="" />
          <img className="col-12 col-lg-2 col-md-4" src={logo4} alt="" />
          <img className="col-12 col-lg-2 col-md-4" src={logo5} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Cases;
