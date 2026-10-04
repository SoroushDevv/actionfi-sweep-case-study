import { comparison } from "../../data/campaign";

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