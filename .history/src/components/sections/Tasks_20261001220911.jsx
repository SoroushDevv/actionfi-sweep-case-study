import React from 'react';
import InfiniteSpiral from '../ui/InfiniteSpiral.jsx';
import '../../styles/tasks.css';

const spiralItems = [
  { src: '/logos/sweep/logo-mark.png', alt: 'SWEEP Identity' },
  { src: '/logos/sweep/logo.jpg', alt: 'SWEEP Platform' },
  { src: '/logos/sweep/logo-horizontal.png', alt: 'Action Model Badge' },
  { src: '/logos/sweep/logo-mark.jpg', alt: 'KYC Verified Stage' },
  { src: '/logos/sweep/logo-mark.png', alt: 'On-chain Event' },
  { src: '/logos/sweep/logo.jpg', alt: 'Protocol Reward' },
  { src: '/logos/sweep/logo-horizontal.png', alt: 'SWEEP ActionFi' }
];

export default function Tasks() {
  return (
    <section className="tasks-section" id="tasks">
      <div className="tasks-header">
        <p className="eyebrow">Action Verification Flow</p>
        <h2>
          Continuous <span>Execution Pipeline</span>
        </h2>
        <p className="lede">
          Every user milestone passes through cryptographic verification before reaching protocol rewards.
        </p>
      </div>

      <div className="spiral-stage-outer">
        <div className="spiral-wrapper">
          <div className="spiral-glow" />
          <InfiniteSpiral
            items={spiralItems}
            animationMode="auto"
            speed={0.55}
            radius={180}
            cardWidth={110}
            cardHeight={110}
            verticalSpacing={60}
            perspective={1000}
            cardRadius={12}
            centerScale={1.2}
            edgeBlur={4}
            cardsPerTurn={7}
            pauseOnHover
            direction="up"
            rotation={0}
            cardTilt={0}
            edgeFade={0.3}
            imageFit="contain"
            grayscale={0}
          />
        </div>
      </div>
    </section>
  );
}