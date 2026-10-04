import React from 'react';
import { campaign } from "../../data/campaign";
import Counter from "../ui/Counter.jsx";
import '../../styles/hero.css';

export default function Hero() {
  return (
    <section className="section hero reveal " id="top">
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

          <div className="hero-metrics-container">
  <div className="metrics-hud-header">
    <div className="hud-title-wrap">
      <span className="hud-live-pulse" />
      <span className="hud-title">Campaign Verified Outcomes</span>
    </div>
    <span className="hud-tag">7-Day Run</span>
  </div>

  <div className="hero-metrics-grid">
    <div className="hero-metric-cell">
      <strong className="hero-metric-val">
        <Counter value={17000} />
      </strong>
      <span className="hero-metric-sub">
        <span className="metric-check-icon">✓</span>
        new users
      </span>
    </div>

    <div className="hero-metric-cell featured">
      <strong className="hero-metric-val">
        <Counter value={9500} />
      </strong>
      <span className="hero-metric-sub">
        <span className="metric-check-icon">✓</span>
        KYC completions
      </span>
    </div>

    <div className="hero-metric-cell">
      <strong className="hero-metric-val">
        <Counter value={56} suffix="%" />
      </strong>
      <span className="hero-metric-sub">
        <span className="metric-check-icon">✓</span>
        conversion peak
      </span>
    </div>
  </div>
</div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img 
                src="/media/hero-pic.png" 
                alt="SWEEP and ActionFi Partnership Scenario" 
                className="hero-scene-img"
                onError={(e) => {
                  e.currentTarget.src = "/hero-pic.jpg";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}