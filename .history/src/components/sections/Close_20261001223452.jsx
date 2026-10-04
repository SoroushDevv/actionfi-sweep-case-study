import React from 'react';
import FloatingWatermark from '../ui/FloatingWatermark.jsx';
import '../../styles/close.css';

export default function Close() {
  return (
    <section  className="section benefit-section reveal" id="blueprint" style={{ position: 'relative' }} data-brand="actionfi">
      <FloatingWatermark brand="actionfi" position="top-left" />

      <div className="wrap">
        <div className="benefit-header">
          <p className="eyebrow">Playbook For Protocols</p>
          <h2>
            How Other Protocols <span>Benefit From ActionFi</span>
          </h2>
          <p className="lede">
            Whether launching an L2, DEX, or DeFi vault, align marketing incentives directly with liquidity, transactions, and verifiable identity.
          </p>
        </div>

        <div className="benefit-steps-grid">
          <div className="benefit-step-card">
            <span className="benefit-step-num">Phase 01</span>
            <h3>Define Target Operations</h3>
            <p>
              Replace vague follow quests with precise parameters: deposit $50, perform 2 swaps, or clear KYC before rewards unlock.
            </p>
          </div>

          <div className="benefit-step-card">
            <span className="benefit-step-num">Phase 02</span>
            <h3>Deploy Smart Escrows</h3>
            <p>
              Marketing capital remains inside permissionless escrows, resolving settlement only through validated cryptographic execution.
            </p>
          </div>

          <div className="benefit-step-card">
            <span className="benefit-step-num">Phase 03</span>
            <h3>Acquire Retained Capital</h3>
            <p>
              Achieve predictable acquisition cost with users who already understand and utilize the on-chain infrastructure.
            </p>
          </div>
        </div>

        <div className="benefit-cta-box">
          <h3>Ready to Deploy an ActionFi Funnel?</h3>
          <p>
            If your protocol is currently budgeting for top-of-funnel clicks, see how your conversion rates compare on ActionFi.
          </p>
          <a
            href="https://twitter.com/intent/tweet?text=Examining%20the%20ActionFi%20blueprint%20by%20%40ActionModelAI%20for%20our%20protocol%20onboarding."
            target="_blank"
            rel="noreferrer"
            className="benefit-cta-btn"
          >
            Start Campaign Architecture on X
          </a>
        </div>
      </div>
    </section>
  );
}