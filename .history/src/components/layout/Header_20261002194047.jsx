import React from 'react';
import { logos, socials } from "../../data/campaign";
import '../../styles/header.css';

export default function Header() {
  return (
    <header className="site-header">
      {/* بک‌گراند نوری تصویر auth-bg */}
      <div className="header-bg-glow" />

      <div className="header-inner">
        <a href="#top" className="brand">
          <img src={logos.actionHorizontal} alt="Action Model" className="logo-am" />
          <span className="brand-separator">/</span>
          <span className="brand-tag">Case Study</span>
        </a>

        <nav className="header-nav">
          <a 
            href={socials.actionModel} 
            target="_blank" 
            rel="noreferrer" 
            className="nav-link"
          >
            @ActionModelAI
          </a>

          <a 
            href={socials.sweep} 
            target="_blank" 
            rel="noreferrer" 
            className="nav-link"
          >
            @SweepGlobal
          </a>

          <div className="sweep-partner-badge">
            <span className="sweep-partner-label">Verified</span>
            <img src={logos.sweep} alt="SWEEP" className="logo-sweep" />
          </div>
        </nav>
      </div>
    </header>
  );
}