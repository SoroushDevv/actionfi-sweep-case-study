import React from 'react';
import FloatingWatermark from '../ui/FloatingWatermark.jsx';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList
} from 'recharts';
import '../../styles/comparison.css';
// import SectionGuide from '../ui/SectionGuide.jsx';
const diffData = [
  { name: 'Traditional Spend Waste', percentage: 78, fill: '#6B00B6' },
  { name: 'ActionFi Effective Spend', percentage: 94, fill: '#9000FF' },
  { name: 'Sybil Resistance Index', percentage: 89, fill: '#D299FF' }
];

export default function Comparison() {
  return (
    <section className="section diff-section reveal" id="difference" style={{ position: 'relative' }} data-brand="actionfi">
      {/* <SectionGuide 
  type="action"
  tag="Escrow Rule"
  text="Zero upfront waste. We only pay once the proof is on-chain!"
  position="top-right"
/> */}
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
        <ResponsiveContainer width="100%" height={260}>
      <BarChart
        data={diffData}
        layout="vertical"
        margin={{ left: 10, right: 55, top: 12, bottom: 12 }}
      >
        <XAxis
          type="number"
          domain={[0, 100]}
          hide
        />
        <YAxis
          dataKey="name"
          type="category"
          stroke="transparent"
          tick={{ fill: '#ffffff', fontSize: 13, fontWeight: 600 }}
          width={130}
          axisLine={false}
          tickLine={false}
        />

        <Bar
          dataKey="percentage"
          radius={[0, 8, 8, 0]}
          barSize={22}
          background={{ fill: 'rgba(144, 0, 255, 0.08)', radius: [0, 8, 8, 0] }}
        >
          {diffData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}

          {/* درصدها با فونت بولد و پوزیشن دقیق در سمت راست میله */}
          <LabelList
            dataKey="percentage"
            position="right"
            formatter={(val) => `${val}%`}
            fill="#D299FF"
            fontSize={13}
            fontWeight={800}
            offset={12}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}