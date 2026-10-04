const steps = ["Discover", "Complete", "Verify", "Reward"];

export default function Funnel() {
  return (
    <section className="section funnel" id="funnel">
      <div className="wrap">
        <p className="eyebrow">The path</p>
        <h2>Incentive attached to the outcome.</h2>
        <ol className="funnel-steps">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="funnel-note">
          ~56% of new users completed KYC. Acquisition became activation.
        </p>
      </div>
    </section>
  );
}