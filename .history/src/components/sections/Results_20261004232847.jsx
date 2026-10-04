import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  LabelList
} from 'recharts';

export default function VerifiedMetricsChart({ verifiedMetrics }) {
  return (
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
  );
}