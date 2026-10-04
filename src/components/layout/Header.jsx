import React from 'react';
import '../../styles/header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-bg-glow" />

      <div className="header-inner">
        <div className="framer-1kr9e98">
          <div className="framer-i5dli9" data-framer-name="title" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <h3 className="framer-text framer-styles-preset-fhx7a2" data-styles-preset="zY0eoAuMi" dir="auto" style={{ textAlign: "center", color: "rgb(255, 255, 255)" }}>
              ActionFi
            </h3>
          </div>
          <div className="framer-k5a9wr" data-framer-name="title" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <h3 className="framer-text framer-styles-preset-fhx7a2" data-styles-preset="zY0eoAuMi" dir="auto" style={{ textAlign: "center", color: "rgb(210, 153, 255)" }}>
              vs
            </h3>
          </div>
          <div className="framer-1p7fqs1">
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }} data-framer-background-image-wrapper="true">
              <img 
                decoding="auto" 
                width="751" 
                height="112" 
                src="https://framerusercontent.com/images/lAl1AwiHO71oMdKgiiHs06sfo.svg?width=751&height=112" 
                alt="SWEEP" 
                style={{ display: "block", width: "100%", height: "100%", objectPosition: "center", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>

        <div className="header-actions">

          <a 
            href="https://calendly.com/kibah-actionmodel/30min" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-partner-call"
          >
            <span className="btn-pulse-dot" />
            Book a Partner Call
          </a>
        </div>
      </div>
    </header>
  );
}