import React from "react";
import FloatingWatermark from "../ui/FloatingWatermark.jsx";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList
} from 'recharts';
import "../../styles/results.css";
// import SectionGuide from "../ui/SectionGuide.jsx";


const verifiedMetrics = [
  { name: "Total Users", count: 17000, fill: "#D299FF" },
  { name: "KYC Verified", count: 9500, fill: "#9000FF" },
  { name: "X / Twitter Follows", count: 5900, fill: "#6B00B6" },
  { name: "Daily Active (DAU)", count: 4000, fill: "#49007A" },
];

export default function Results() {
  return (
    <section
      className="section usage-section reveal"
      id="usage"
      style={{ position: "relative" }}
      data-brand="sweep"
    >
      {/* <SectionGuide
        type="sweep"
        tag="Milestone"
        text="9,500+ users passed KYC in just 7 days of campaign run."
        position="top-right"
      /> */}
      <FloatingWatermark brand="sweep" position="top-left" />

      <div className="wrap">
        <div className="usage-header">
          <p className="eyebrow">Verified Data</p>
          <h2>
            7-Day Campaign <span>Performance</span>
          </h2>
          <p className="lede">
            Official metrics from the SWEEP ActionFi execution. Zero vanity
            impressions, 100% verified progression.
          </p>
        </div>

        <div className="usage-chart-container">
          <div className="chart-meta-bar">
            <span className="text-gray-400">Audited Campaign Breakdown</span>
            <span className="badge">55.8% KYC Conversion Peak</span>
          </div>

          <div style={{ width: "100%", height: 320 }}>
     <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={verifiedMetrics}
        layout="vertical"
        margin={{ left: 20, right: 65, top: 10, bottom: 10 }}
      >
        <XAxis
          type="number"
          stroke="#664D75"
          tick={{ fill: "#D299FF", fontSize: 12 }}
          axisLine={{ stroke: 'rgba(144, 0, 255, 0.2)' }}
          tickLine={false}
        />
        <YAxis
          dataKey="name"
          type="category"
          stroke="#664D75"
          tick={{ fill: "#ffffff", fontSize: 12, fontWeight: 600 }}
          width={130}
          axisLine={false}
          tickLine={false}
        />

        <Bar dataKey="count" radius={[0, 8, 8, 0]} barSize={26}>
          {verifiedMetrics.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}

          {/* نمایش مستقیم و شارپ اعداد در انتهای هر میله به جای Tooltip */}
          <LabelList
            dataKey="count"
            position="right"
            formatter={(value) => Number(value).toLocaleString()}
            fill="#D299FF"
            fontSize={12}
            fontWeight={800}
            offset={10}
          />
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
