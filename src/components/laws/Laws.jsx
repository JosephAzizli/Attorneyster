import React from "react";

//CSS
import "./Laws.css";

//IMAGES
import pattern from "./pattern.svg";
import business from "./icons/business.svg";
import building from "./icons/building.svg";
import car from "./icons/car.svg";
import death from "./icons/death.svg";
import criminal from "./icons/criminal.svg";
import family from "./icons/family.svg";

const Laws = () => {
  return (
    <div className="laws">
      <div className="explore row">
        <div className="txt-section col-12 col-md-3 col-lg-5">
          <h1>
            Explore The perfect <br /> Our Practice Areas
          </h1>
          <img src={pattern} alt="" />
        </div>
        <p className="col-12 col-md-9 col-lg-7">
          We are a group of civil litigation/trial attorneys who focus on
          providing a justice based on the issues relating to insurance defense,
          insurance coverage, bad faith, insurance fraud and criminal
          litigation.
        </p>
      </div>
      <div className="cards-section row">
        <div className="d-flex card-main">
          <div className="card-top row gy-5 ">
            <div className="col-md-6 col-12 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Business Law</h5>
                  <p class="card-text">
                    Be aware of new developments, as laws and rules often change
                    based on the situation.
                  </p>
                  <div>
                    <img src={business} alt="" />
                    <a href="#" className="glass btn">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Construction Law</h5>
                  <p class="card-text">
                    Never judge, just listen and advise. Even if your client has
                    made a bad decision in the case.
                  </p>
                  <div>
                    <img src={building} alt="" />
                    <a href="#" className="glass btn">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Car Accident</h5>
                  <p class="card-text">
                    Being untruthful will get you nowhere and give you a
                    reputation of the dishonesty in law.
                  </p>
                  <div>
                    <img src={car} alt="" />
                    <a href="#" className="glass btn">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-bottom row gy-5 ">
            <div className="col-md-6 col-12 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Wrongful Death</h5>
                  <p class="card-text">
                    Keep yourself up-to-date on your area of law. Be aware of
                    new justice, as laws and rules.
                  </p>
                  <div>
                    <img src={death} alt="" />
                    <a href="#" className="glass btn">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Criminal Law</h5>
                  <p class="card-text">
                    Our attorneys are fully committed to providing you with the
                    support and attention that you deserve.
                  </p>
                  <div>
                    <img src={criminal} alt="" />
                    <a className="glass btn" href="#">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Family Law</h5>
                  <p class="card-text">
                    You may find yourself unable to work or complete
                    work-related responsibilities safely.
                  </p>
                  <div>
                    <img src={family} alt="" />
                    <a href="#" className="glass btn">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laws;
