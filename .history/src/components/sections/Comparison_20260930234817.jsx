import { comparison } from "../../data/campaign";

  export const campaignMetrics = {
  totalUsers: "17,000+",
  kycUsers: "9,500+",
  conversionRate: "~56%",
  twitterFollows: "5,900+",
  dau: "4,000+"
};

export const heroContent = {
  badge: "ActionFi Case Study",
  titlePart1: "Web3 paid for attention.",
  titlePart2: "SWEEP paid for the next step.",
  description: "How Sweep Global turned top-of-funnel noise into 9,500+ verified users in 7 days by incentivizing execution over impressions.",
  metrics: [
    { label: "Total Users", value: "17,000+" },
    { label: "KYC Verified", value: "9,500+", highlight: true },
    { label: "Conversion", value: "~56%" }
  ]
};

export default function Comparison() {



  return (
    <section className="section comparison reveal" id="compare">
      <div className="wrap">
        <p className="eyebrow">The difference</p>
        <h2>What the campaign actually buys</h2>
        <div className="compare-grid">
          <article className="compare-col is-quest">
            <h3>Traditional quests</h3>
            <ul>
              {comparison.map((row) => (
                <li key={row.quest}>{row.quest}</li>
              ))}
            </ul>
          </article>
          <article className="compare-col is-action">
            <h3>ActionFi × SWEEP</h3>
            <ul>
              {comparison.map((row) => (
                <li key={row.actionfi}>{row.actionfi}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}