import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';
import '../../styles/results.css';

const retentionData = [
  { day: 'Day 1', actionFi: 100, quests: 100 },
  { day: 'Day 7', actionFi: 62, quests: 24 },
  { day: 'Day 14', actionFi: 48, quests: 9 },
  { day: 'Day 21', actionFi: 41, quests: 4 },
  { day: 'Day 30', actionFi: 38, quests: 2 }
];

export default function Results() {
  return (
    <section className="section usage-section reveal" id="usage">
      <div className="wrap">
        <div className="usage-header">
          <p className="eyebrow">Sustainable Growth</p>
          <h2>
            Why Real Product <span>Usage Matters</span>
          </h2>
          <p className="lede">
            Followers churn out within hours. Users who complete onboarding and KYC retain capital and interaction long after rewards close.
          </p>
        </div>

        <div className="usage-chart-container">
          <div className="usage-legend">
            <div className="legend-item">
              <span className="legend-dot legend-actionfi" />
              <span className="text-white font-medium">ActionFi Cohort Retention (%)</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot legend-quest" />
              <span className="text-gray-400">Social Quest Cohort Retention (%)</span>
            </div>
          </div>

          <div style={{ width: '100%', height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={retentionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorActionFi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9000FF" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#9000FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" stroke="#664D75" tick={{ fill: '#D299FF', fontSize: 12 }} />
                <YAxis stroke="#664D75" tick={{ fill: '#ffffff', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A052A', borderColor: '#2A103D', borderRadius: '8px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="actionFi" 
                  stroke="#9000FF" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorActionFi)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="quests" 
                  stroke="#555566" 
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  fill="transparent" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="usage-stats-row">
          <div className="usage-stat-card">
            <strong>19×</strong>
            <span>Higher Day-30 protocol retention</span>
          </div>
          <div className="usage-stat-card">
            <strong>0%</strong>
            <span>Bounty spent on unverified clickbots</span>
          </div>
          <div className="usage-stat-card">
            <strong>4,000+</strong>
            <span>Active post-campaign participants</span>
          </div>
        </div>
      </div>
    </section>
  );
}