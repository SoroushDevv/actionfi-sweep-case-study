import React from 'react';
import FloatingWatermark from '../ui/FloatingWatermark.jsx';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell 
} from 'recharts';
import '../../styles/comparison.css';

const diffData = [
  { name: 'Traditional Spend Waste', percentage: 78, fill: '#6B00B6' },
  { name: 'ActionFi Effective Spend', percentage: 94, fill: '#9000FF' },
  { name: 'Sybil Resistance Index', percentage: 89, fill: '#D299FF' }
];

export default function Comparison() {
  return (
    <section className="section diff-section reveal" id="difference" style={{ position: 'relative' }} data-brand="actionfi">
      <SectionGuide 
  type="action"
  tag="Escrow Rule"
  text="Zero upfront waste. We only pay once the proof is on-chain!"
  position="top-right"
/>
      <FloatingWatermark brand="actionfi" position="top-right" />

      <div className="wrap">
        <div className="diff-header">
          <p className="eyebrow">Architectural Shift</p>
          <h2>
            What Made <span>ActionFi Different</span>
          </h2>
          <p className="lede">
            Traditional bounty platforms monetize clicks. ActionFi unlocks incentives solely upon verified, on-chain execution.
          </p>
        </div>

        <div className="diff-grid">
          <div className="diff-cards">
            <div className="diff-card">
              <div className="diff-card-title">Pre-funded Milestone Escrow</div>
              <div className="diff-card-desc">
                Budget is locked in escrow and only distributed when cryptographic proofs confirm step completion.
              </div>
            </div>

            <div className="diff-card active">
              <div className="diff-card-title">Sybil-Proof Pipeline</div>
              <div className="diff-card-desc">
                By enforcing KYC and downstream actions, bot farms and disposable wallets are filtered out before payout.
              </div>
            </div>

            <div className="diff-card">
              <div className="diff-card-title">Direct CAC Predictability</div>
              <div className="diff-card-desc">
                Every single dollar corresponds to a verified protocol entrant rather than vanity impressions.
              </div>
            </div>
          </div>

          <div className="diff-chart-box">
            <div className="chart-caption">Capital Efficiency Allocation (%)</div>
            <ResponsiveContainer width="100%" height="88%">
              <BarChart data={diffData} layout="vertical" margin={{ left: 20, right: 20, top: 10, bottom: 10 }}>
                <XAxis type="number" stroke="#664D75" tick={{ fill: '#D299FF', fontSize: 12 }} domain={[0, 100]} />
                <YAxis dataKey="name" type="category" stroke="#664D75" tick={{ fill: '#ffffff', fontSize: 11 }} width={120} />
                <Tooltip 
                  cursor={{ fill: 'rgba(144, 0, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#1A052A', borderColor: '#2A103D', borderRadius: '8px' }}
                />
                <Bar dataKey="percentage" radius={[0, 6, 6, 0]}>
                  {diffData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}