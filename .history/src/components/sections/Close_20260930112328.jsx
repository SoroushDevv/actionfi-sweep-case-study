import { socials, taggedProject } from "../../data/campaign";

export default function Close() {
  const hasTag = Boolean(taggedProject.name && taggedProject.handle);

  return (
    <section className="section close" id="close">
      <div className="wrap">
        <p className="eyebrow">Takeaway</p>
        <h2>Don’t tell us it’s different. Show the funnel.</h2>
        <p className="close-lede">
          Real users. Real usage. Real growth. SWEEP used one week to buy
          acquisition, verification, activity and distribution at the same time.
        </p>

        {hasTag ? (
          <aside className="tag-box">
            <p className="eyebrow">For the next project</p>
            <h3>
              {taggedProject.name}{" "}
              <a href={taggedProject.url || `https://x.com/${taggedProject.handle.replace("@", "")}`} target="_blank" rel="noreferrer">
                {taggedProject.handle}
              </a>
            </h3>
            <p>{taggedProject.reason}</p>
          </aside>
        ) : (
          <aside className="tag-box">
            <p className="eyebrow">For the next project</p>
            <h3>What should the next 10,000 users finish?</h3>
            <p>{taggedProject.reason}</p>
          </aside>
        )}

        <div className="close-actions">
          <a className="btn" href={socials.caseStudy} target="_blank" rel="noreferrer">
            Read the SWEEP case study
          </a>
          <a href={socials.actionModel} target="_blank" rel="noreferrer">
            @ActionModelAI
          </a>
          <a href={socials.sweep} target="_blank" rel="noreferrer">
            @SweepGlobal
          </a>
        </div>
      </div>
    </section>
  );
}