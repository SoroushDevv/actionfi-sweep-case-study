// import { campaign } from "../../data/campaign";
// import Counter from "../ui/Counter.jsx";

// export default function Hero() {
//   return (
//     <section className="section hero reveal" id="top">
//       <div className="wrap">
//         <p className="eyebrow">ActionFi × SWEEP case study</p>
//         <h1>
//           Web3 paid for attention.
//           <span> SWEEP paid for the next step.</span>
//         </h1>
//         <p className="lede">
//           A 7-day campaign that rewarded verified product actions — signup and
//           KYC — instead of likes and follows.
//         </p>
//         <div className="hero-metrics">
//           <div>
//             <strong>
//               <Counter value={17000} />
//             </strong>
//             <span>new users</span>
//           </div>
//           <div>
//             <strong>
//               <Counter value={9500} />
//             </strong>
//             <span>KYC completions</span>
//           </div>
//           <div>
//             <strong>
//               <Counter value={56} suffix="%" />
//             </strong>
//             <span>new users verified</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
  import React from 'react';
import { heroContent } from '../../data/campaign';
import '../../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-grid">
        
        {/* ستون چپ: تایپوگرافی، متون و متریک‌ها */}
        <div className="hero-text-col">
          <div className="hero-badge-wrap">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">
              {heroContent.badge}
            </span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-white">{heroContent.titlePart1}</span>
            <span className="hero-title-gradient">{heroContent.titlePart2}</span>
          </h1>

          <p className="hero-desc">
            {heroContent.description}
          </p>

          <div className="hero-metrics-grid">
            {heroContent.metrics.map((item, index) => (
              <div 
                key={index} 
                className={`hero-metric-card ${item.highlight ? 'highlight' : ''}`}
              >
                <div className="hero-metric-value">{item.value}</div>
                <div className="hero-metric-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ستون راست: کارت‌های معلق لوگو با انیمیشن روان */}
        <div className="hero-visual-col">
          <div className="hero-visual-wrap">
            
            <div className="hero-glow" />

            {/* کارت بالایی: Sweep Global */}
            <div className="floating-card floating-card-top">
              <div className="logo-box">
                <img 
                  src="/logos/sweep/logo-mark.png" 
                  alt="Sweep Global Mark" 
                />
              </div>
              <div>
                <div className="logo-badge-title">Protocol</div>
                <div className="logo-title">Sweep Global</div>
              </div>
            </div>

            {/* خط رابط عمودی */}
            <div className="vertical-connector" />

            {/* کارت پایینی: Action Model */}
            <div className="floating-card floating-card-bottom">
              <div className="logo-box">
                <img 
                  src="/logos/sweep/logo-horizontal.png" 
                  alt="Action Model Protocol" 
                />
              </div>
              <div>
                <div className="logo-badge-title">Infrastructure</div>
                <div className="logo-title">Action Model</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}