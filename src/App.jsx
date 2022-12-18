import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import bgTop from "./images/bg-top.svg";
import bgBottom from "./images/bg-bottom.svg";
function App() {
  const [pricingTime, setPricingTime] = useState(false);
  const Switcher = useRef(null);
  useEffect(() => {
    Switcher.current.classList.add(`start-${pricingTime}`);
    Switcher.current.classList.remove(`start-${!pricingTime}`);
  }, [pricingTime]);
  return (
    <>
      <img src={bgTop} className="bg-top" alt="decor top" />
      <img src={bgBottom} className="bg-bottom" alt="decor bottom" />
      <div className="container">
        <h1>Our Pricing</h1>
        <div className="monthly__annaully">
          <p>Annaully</p>
          <div
            className="switcher"
            ref={Switcher}
            onClick={(e) => setPricingTime((prev) => !prev)}
          >
            <div className="thumb"></div>
          </div>
          <p>Monthly</p>
        </div>
        <div className="pricing-cards__container">
          <div className="pricing-cards__container__card">
            <div className="header">
            <h3 className="pricing-cards__container__card-title">Basic</h3>
            <h2 className="pricing-cards__container__card-price">
              <span>$</span> {pricingTime ? "199.99": "19.99"} 
            </h2>
            </div>
            <ul className="pricing-cards__container__card-list">
              <li className="pricing-cards__container__card-list-item">
                500 GB Storage
              </li>
              <li className="pricing-cards__container__card-list-item">
                2 Users Allowed
              </li>
              <li className="pricing-cards__container__card-list-item">
                Send up to 3 GB
              </li>
            </ul>
            <button className="pricing-cards__container__card-button">LEARN MORE</button>
          </div>
          <div className="pricing-cards__container__card">
            <div className="header">
            <h3 className="pricing-cards__container__card-title">Professional</h3>
            <h2 className="pricing-cards__container__card-price">
              <span>$</span> {pricingTime ? "249.99": "24.99"} 
            </h2>
            </div>
            <ul className="pricing-cards__container__card-list">
              <li className="pricing-cards__container__card-list-item">
                1 TB Storage
              </li>
              <li className="pricing-cards__container__card-list-item">
               5 Users Allowed
              </li>
              <li className="pricing-cards__container__card-list-item">
                Send up to 10 GB
              </li>
            </ul>
            <button className="pricing-cards__container__card-button">LEARN MORE</button>
          </div>
          <div className="pricing-cards__container__card">
            <div className="header">
            <h3 className="pricing-cards__container__card-title">Master</h3>
            <h2 className="pricing-cards__container__card-price">
              <span>$</span> {pricingTime ? "399.99": "39.99"} 
            </h2>
            </div>
            <ul className="pricing-cards__container__card-list">
              <li className="pricing-cards__container__card-list-item">
                1 TB Storage
              </li>
              <li className="pricing-cards__container__card-list-item">
                10 Users Allowed
              </li>
              <li className="pricing-cards__container__card-list-item">
                Send up to 20 GB
              </li>
            </ul>
            <button className="pricing-cards__container__card-button">LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
