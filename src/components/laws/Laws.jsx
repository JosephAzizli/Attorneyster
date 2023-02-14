import React from "react";
import "./Laws.css";
import LawCard from "./LawCard";

import pattern from "./pattern.svg";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const Laws = () => {
  return (
    <div className="laws">
      <div className="explore row">
        <div className="left col-12 col-md-3 col-lg-5">
          <h1>Explore The perfect</h1>
          <h1>Our Practice Areas</h1>
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
        <d className="d-flex card-main">
          <div className="card-top row gy-5 ">
            <div className="col-md-4 col-12">
              <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          <div className="card-bottom">
          <div className="col-md-4 col-12">
              <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* {
            cardInfo.map(card => (
              <LawCard title = {card.title} body = {card.body} image = {card.image} />
            ))
          } */}
        </d>
      </div>
    </div>
  );
};

export default Laws;
