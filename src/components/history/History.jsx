import React from "react";

//CSS
import "./History.css";


//IMAGES
import pattern from './images/pattern.svg'
import themis from './images/themis.svg'

//ANT DESIGN PROGRESS BAR 
import { Progress } from "antd";

const History = () => {
  return (
    <div className="History" data-aos="fade-left">
      <div className="transparent row">
        <div className="left col-12 col-md-6 col-lg-4">
          <h1>We Are Top Lawyers And History</h1>
          <img src={pattern} alt="" />
          <div>
            <div>
              <p className="color">2000 – Establishment of the Company!</p>
              <p>
                The origins of lawyers and the first founders of law make their
                appearance in Ancient Greece and Rome.
              </p>
            </div>
            <div>
              <p className="color">2006 – Together we Build</p>
              <p>
                Lawyers in medieval times found themselves struggling to make a
                living as the legal profession collapsed in the western world.
              </p>
            </div>
            <div>
              <p className="color">2008 – Completed 10000 cases</p>
              <p>
                When did lawyers first start practicing in the United States?
                It’s important to understand that the history of attorneys.
              </p>
            </div>
            <div>
              <p className="color">2011 – We are Number One</p>
              <p>
                Eventually, the prejudices against lawyers started to fall away
                and the legal profession began to gain respect and power.
              </p>
            </div>
          </div>
        </div>
        <div className="middle col-12 col-md-6 col-lg-4">
          <img src={themis} alt="" />
        </div>
        <div className="right col-12 col-md-6 col-lg-4">
          <h1>We Are Specialised And Experienced</h1>
          <img src={pattern} alt="" />
          <div>
            <p>
              Keep yourself up-to-date on your area of law. Be aware of new
              developments, as laws and rules often change based on the
              situation and new cases are being decided every day.
            </p>

            <div className="progressbar">
              <div className="percent">
                <p>Divorce And Family Cases</p>
                <p>75%</p>
              </div>
              <Progress
                percent={75}
                showInfo={false}
                strokeColor="#D1B06B"
                status="active"
              />
              <div className="percent">
                <p>Property And Construction</p>
                <p>80%</p>
              </div>
              <Progress
                percent={80}
                showInfo={false}
                strokeColor="#D1B06B"
                status="active"
              />
              <div className="percent">
                <p>Banking And Finance</p>
                <p>75%</p>
              </div>
              <Progress
                percent={75}
                showInfo={false}
                strokeColor="#D1B06B"
                status="active"
              />
              <div className="percent">
                <p>Accident & Wrongful Death</p>
                <p>90%</p>
              </div>
              <Progress
                percent={90}
                showInfo={false}
                strokeColor="#D1B06B"
                status="active"
              />
            </div>
          </div>
          <a href="#" className="glass">Free Consulting</a>
        </div>
      </div>
    </div>
  );
};

export default History;
