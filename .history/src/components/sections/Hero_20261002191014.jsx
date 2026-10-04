import React from 'react';
import { campaign } from "../../data/campaign";
import Counter from "../ui/Counter.jsx";
import '../../styles/hero.css';

export default function Hero() {
  return (
    <section className="section hero reveal bg-white" id="top">
      <div className="hero-wrap">
        <div className="hero-grid">
          
          <div className="hero-content">
            <p className="eyebrow">ActionFi × SWEEP case study</p>
            
            <h1>
              <span className="hero-title-primary">Web3 paid for attention.</span>
              <span className="hero-title-accent">SWEEP paid for the next step.</span>
            </h1>

            <p className="lede">
              A 7-day campaign that rewarded verified product actions — signup and
              KYC — instead of likes and follows.
            </p>

            <div className="hero-metrics">
              <div>
                <strong>
                  <Counter value={17000} />
                </strong>
                <span>new users</span>
              </div>

              <div>
                <strong className="highlight">
                  <Counter value={9500} />
                </strong>
                <span>KYC completions</span>
              </div>

              <div>
                <strong>
                  <Counter value={56} suffix="%" />
                </strong>
                <span>new users verified</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img 
                src="/media/hero-pic.jpg" 
                alt="SWEEP and ActionFi Partnership Scenario" 
                className="hero-scene-img"
                onError={(e) => {
                  e.currentTarget.src = "/hero-pic.jpg";
                }}
              />
              <div className="hero-visual-badge">
                <span className="badge-dot" />
                <span className="badge-text">Agreement In Motion</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}