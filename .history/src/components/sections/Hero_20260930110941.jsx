import { campaign } from "../../data/campaign";

export default function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="wrap">
        <p className="eyebrow">ActionFi × SWEEP case study</p>
        <h1>
          Web3 paid for attention.
          <span> SWEEP paid for the next step.</span>
        </h1>
        <p className="lede">
          A 7-day campaign that rewarded verified product actions — signup and
          KYC — instead of likes and follows.
        </p>
        <div className="hero-metrics">
          <div>
            <strong>{campaign.users}</strong>
            <span>new users</span>
          </div>
          <div>
            <strong>{campaign.kyc}</strong>
            <span>KYC completions</span>
          </div>
          <div>
            <strong>{campaign.kycRate}</strong>
            <span>new users verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}