import React from 'react';
import InfiniteSpiral from '../ui/InfiniteSpiral.jsx';
import '../../styles/tasks.css';

const taskCards = [
  {
    type: 'KYC Verification',
    target: 'Identity Gate',
    status: 'Verified',
    reward: 'Unlocked',
    tag: '56% Peak'
  },
  {
    type: 'Account Signup',
    target: 'SWEEP Platform',
    status: '17,000+ Completed',
    reward: 'Active',
    tag: 'Onboarding'
  },
  {
    type: 'Cryptographic Proof',
    target: 'Smart Escrow',
    status: 'Settled',
    reward: 'Automated',
    tag: 'Protocol'
  },
  {
    type: 'Active Retention',
    target: '4,000 DAU',
    status: 'In-App Active',
    reward: 'Compounded',
    tag: 'Retention'
  },
  {
    type: 'Social Handshake',
    target: '@SweepGlobal',
    status: '5,900 Follows',
    reward: 'Confirmed',
    tag: 'Network'
  },
  {
    type: 'Sybil Defense',
    target: 'Anti-Bot Filter',
    status: '0% Farmed',
    reward: 'Protected',
    tag: 'Security'
  }
];

export default function Tasks() {
  const spiralElements = taskCards.map((task, i) => (
    <div key={i} className="task-spiral-card">
      <div className="task-card-header">
        <span className="task-card-tag">{task.tag}</span>
        <span className="task-status-dot" />
      </div>
      <div className="task-card-title">{task.type}</div>
      <div className="task-card-target">{task.target}</div>
      <div className="task-card-footer">
        <span className="task-card-status">{task.status}</span>
      </div>
    </div>
  ));

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
            items={spiralElements}
            animationMode="auto"
            speed={0.45}
            radius={200}
            cardWidth={160}
            cardHeight={130}
            verticalSpacing={75}
            perspective={1000}
            cardRadius={14}
            centerScale={1.2}
            edgeBlur={4}
            cardsPerTurn={6}
            pauseOnHover
            direction="up"
            rotation={0}
            cardTilt={0}
            edgeFade={0.3}
          />
        </div>
      </div>
    </section>
  );
}