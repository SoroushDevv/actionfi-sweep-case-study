import { campaign } from "../../data/campaign";
import CampaignCharts from "../charts/CampaignCharts.jsx";
import Counter from "../ui/Counter.jsx";

export default function Results() {
  return (
    <section className="section results reveal" id="results">
      <div className="wrap">
        <p className="eyebrow">Seven days</p>
        <h2>Measurable activation, not vanity metrics.</h2>
        <CampaignCharts />
        <div className="result-aside">
          <div>
            <strong>
              <Counter value={4000} />
            </strong>
            <span>daily active users</span>
          </div>
          <div>
            <strong>
              <Counter value={5900} />
            </strong>
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