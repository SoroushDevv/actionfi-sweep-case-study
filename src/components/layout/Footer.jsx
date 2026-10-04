import React from 'react';
import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo-text">ActionFi × SWEEP</span>
            <span className="footer-tagline">Verifiable User Acquisition for Web3 Protocols</span>
          </div>

          <div className="footer-links">
            <a 
              href="https://twitter.com/ActionModelAI" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-link"
            >
              @ActionModelAI
            </a>
            <a 
              href="https://twitter.com/SweepGlobal" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-link"
            >
              @SweepGlobal
            </a>
            <a 
              href="https://actionmodel.ai" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-link"
            >
              Protocol Docs
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Official campaign study data verified from SWEEP protocol milestones.</span>
          <span>ActionModel Competition Submission • 2026</span>
        </div>
      </div>
    </footer>
  );
}