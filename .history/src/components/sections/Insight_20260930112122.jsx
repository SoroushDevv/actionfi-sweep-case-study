import { insightImage, quote } from "../../data/campaign";
import { useState } from "react";

export default function Insight() {
  const [hasImage, setHasImage] = useState(true);

  return (
    <section className="section insight" id="insight">
      <div className="wrap">
        <p className="eyebrow">Product insight</p>
        <h2>Quests don’t find bugs. Users do.</h2>
        <div className="insight-grid">
          <div>
            <p className="insight-body">
              Thousands of people walked the same SWEEP signup path. A login
              issue showed up. It was reported and fixed while the campaign was
              still running.
            </p>
            <p className="insight-body">
              That signal does not come from a follow task. It comes from
              verified product usage.
            </p>
          </div>
          {hasImage ? (
            <img
              src={insightImage}
              alt="SWEEP onboarding during the campaign"
              onError={() => setHasImage(false)}
            />
          ) : null}
        </div>
        <blockquote className="insight-quote">
          <p>{quote.text}</p>
          <cite>{quote.source}</cite>
        </blockquote>
      </div>
    </section>
  );
}