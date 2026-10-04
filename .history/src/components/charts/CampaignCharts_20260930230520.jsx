import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const metrics = [
  { name: "New users", value: 17000 },
  { name: "KYC", value: 9500 },
  { name: "DAU", value: 4000 },
  { name: "X followers", value: 5900 },
];

const funnel = [
  { name: "Acquired", value: 17000 },
  { name: "KYC done", value: 9500 },
];

const colors = {
  bar: "#9000FF",
  funnel: ["#D299FF", "#9000FF"],
  grid: "rgba(210,153,255,0.16)",
  axis: "#8B8096",
};

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tip">
      <strong>{label}</strong>
      <span>{payload[0].value.toLocaleString()}</span>
    </div>
  );
}

export default function CampaignCharts() {
  return (
    <div className="chart-grid">
      <div className="chart-card">
        <h3>7-day outcomes</h3>
        <div className="chart-frame">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={metrics} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke={colors.grid} vertical={false} />
              <XAxis dataKey="name" stroke={colors.axis} tick={{ fill: colors.axis, fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis stroke={colors.axis} tick={{ fill: colors.axis, fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(144,0,255,0.08)" }} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {metrics.map((entry) => (
                  <Cell key={entry.name} fill={colors.bar} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-card">
        <h3>Acquisition → KYC</h3>
        <div className="chart-frame">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={funnel} layout="vertical" margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
              <CartesianGrid stroke={colors.grid} horizontal={false} />
              <XAxis type="number" stroke={colors.axis} tick={{ fill: colors.axis, fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="name" stroke={colors.axis} tick={{ fill: colors.axis, fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(144,0,255,0.08)" }} />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={28}>
                {funnel.map((entry, index) => (
                  <Cell key={entry.name} fill={colors.funnel[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="chart-note">~56% of acquired users completed KYC.</p>
      </div>
    </div>
  );
}