import { logos, socials } from "../../data/campaign";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="brand">
          <img src={logos.actionHorizontal} alt="Action Model" className="logo-am" />
        </a>
        <nav className="header-nav">
          <a href={socials.actionModel} target="_blank" rel="noreferrer">
            @ActionModelAI
          </a>
          <a href={socials.sweep} target="_blank" rel="noreferrer">
            @SweepGlobal
          </a>
          <img src={logos.sweep} alt="SWEEP" className="logo-sweep" />
        </nav>
      </div>
    </header>
  );
}