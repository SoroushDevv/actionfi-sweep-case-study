
import "../../styles/hero.css";

export default function Hero() {
  return (
    <section className="section hero reveal " id="top">
      <div className="hero-wrap">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">ActionFi × SWEEP case study</p>

            <h1>
              <span className="hero-title-primary ">
                Where  <img src="/logos/sweep/sweep-svg.svg" className="back-ground:red"/> Protocol Meets ActionFi.
              </span>
              <span className="hero-title-accent">
                Turning Campaign Incentives into Verified Users.
              </span>
            </h1>
            <p className="lede">
              A 7-day campaign that rewarded verified product actions — signup
              and KYC — instead of likes and follows.
            </p>

          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img
                src="/media/hero-pic.png"
                alt="SWEEP and ActionFi Partnership Scenario"
                className="hero-scene-img"
                onError={(e) => {
                  e.currentTarget.src = "/hero-pic-removebg.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
