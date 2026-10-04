import { campaign } from "../../data/campaign";

const bars = [
  { label: "New users", value: campaign.users, width: "100%" },
  { label: "KYC completions", value: campaign.kyc, width: "56%" },
  { label: "New-user-to-KYC", value: campaign.kycRate, width: "56%" },
  { label: "Reward pool", value: campaign.pool, width: "28%" },
];

export default function Results() {
  return (
    <section className="section results" id="results">
      <div className="wrap">
        <p className="eyebrow">Seven days</p>
        <h2>Measurable activation, not vanity metrics.</h2>
        <div className="bar-list">
          {bars.map((bar) => (
            <div key={bar.label} className="bar-row">
              <div className="bar-meta">
                <span>{bar.label}</span>
                <strong>{bar.value}</strong>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: bar.width }} />
              </div>
            </div>
          ))}
        </div>
        <div className="result-aside">
          <div>
            <strong>{campaign.dau}</strong>
            <span>daily active users</span>
          </div>
          <div>
            <strong>{campaign.followers}</strong>
            <span>new X followers</span>
          </div>
          <div>
            <strong>{campaign.duration}</strong>
            <span>campaign length</span>
          </div>
        </div>
      </div>
    </section>
  );
}