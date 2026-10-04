import React from 'react';
import '../../styles/tasks.css';

const pipelineTasks = [
  {
    step: 'Stage 01',
    status: 'Verified',
    statusType: 'success',
    title: 'Account Onboarding',
    desc: 'Registration completed across Web3 endpoints without friction.',
    metricLabel: 'Throughput',
    metricVal: '17,000+ Users'
  },
  {
    step: 'Stage 02',
    status: 'Identity Cleared',
    statusType: 'pending',
    title: 'KYC Verification Gate',
    desc: 'Cryptographic identity check preventing duplicate farming.',
    metricLabel: 'Peak Conversion',
    metricVal: '55.8% (~9,500)',
    featured: true
  },
  {
    step: 'Stage 03',
    status: 'Verified',
    statusType: 'success',
    title: 'Protocol Engagement',
    desc: 'Users interact directly with core product modules and features.',
    metricLabel: 'Active Base',
    metricVal: '4,000 DAU'
  },
  {
    step: 'Stage 04',
    status: 'Settled',
    statusType: 'success',
    title: 'Automated Settlement',
    desc: 'Escrow unlocks rewards exclusively to validated milestone holders.',
    metricLabel: 'Capital Waste',
    metricVal: '0% Farmed'
  }
];

export default function Tasks() {
  return (
    <section className="section tasks-section reveal" id="tasks" data-brand="sweep">
      <div className="tasks-header">
        <p className="eyebrow">Verification Architecture</p>
        <h2>
          How Every Milestone <span>Is Cleared</span>
        </h2>
        <p className="lede">
          A four-stage verification protocol replacing passive social clicks with cryptographic outcome delivery.
        </p>
      </div>

      <div className="tasks-grid">
        {pipelineTasks.map((task, idx) => (
          <div 
            key={idx} 
            className={`pipeline-card ${task.featured ? 'featured' : ''}`}
          >
            <div className="pipeline-top">
              <span className="pipeline-step-badge">{task.step}</span>
              <span className={`pipeline-status-indicator ${task.statusType}`}>
                <span className="status-pulse" />
                {task.status}
              </span>
            </div>

            <div className="pipeline-content">
              <h3>{task.title}</h3>
              <p>{task.desc}</p>
            </div>

            <div className="pipeline-footer">
              <span className="pipeline-metric-label">{task.metricLabel}</span>
              <span className="pipeline-metric-value">{task.metricVal}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}