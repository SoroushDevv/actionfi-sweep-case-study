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
import '../../styles/results.css';

const verifiedMetrics = [
  { name: 'Total Users', count: 17000, fill: '#D299FF' },
  { name: 'KYC Verified', count: 9500, fill: '#9000FF' },
  { name: 'X / Twitter Follows', count: 5900, fill: '#6B00B6' },
  { name: 'Daily Active (DAU)', count: 4000, fill: '#49007A' }
];

export default function Results() {
  return (
    <section className="section usage-section reveal" id="usage" style={{ position: 'relative' }}>
      <FloatingWatermark brand="sweep" position="top-right" />

      <div className="wrap">
        <div className="usage-header">
          <p className="eyebrow">Verified Data</p>
          <h2>
            7-Day Campaign <span>Performance</span>
          </h2>
          <p className="lede">
            Official metrics from the SWEEP ActionFi execution. Zero vanity impressions, 100% verified progression.
          </p>
        </div>

        <div className="usage-chart-container">
          <div className="chart-meta-bar">
            <span className="text-gray-400">Audited Campaign Breakdown</span>
            <span className="badge">55.8% KYC Conversion Peak</span>
          </div>

          <div style={{ width: '100%', height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={verifiedMetrics} layout="vertical" margin={{ left: 40, right: 30, top: 10, bottom: 10 }}>
                <XAxis type="number" stroke="#664D75" tick={{ fill: '#D299FF', fontSize: 12 }} />
                <YAxis dataKey="name" type="category" stroke="#664D75" tick={{ fill: '#ffffff', fontSize: 12 }} width={130} />
                <Tooltip 
                  cursor={{ fill: 'rgba(144, 0, 255, 0.05)' }}
                  contentStyle={{ backgroundColor: '#1A052A', borderColor: '#2A103D', borderRadius: '8px' }}
                />
                <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                  {verifiedMetrics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="usage-stats-row">
          <div className="usage-stat-card">
            <strong>17,000+</strong>
            <span>Total Sign-ups</span>
          </div>
          <div className="usage-stat-card featured">
            <strong>9,500+</strong>
            <span>KYC Completions</span>
          </div>
          <div className="usage-stat-card">
            <strong>5,900+</strong>
            <span>Twitter Follows</span>
          </div>
          <div className="usage-stat-card">
            <strong>4,000+</strong>
            <span>Daily Active Users</span>
          </div>
        </div>
      </div>
    </section>
  );
}