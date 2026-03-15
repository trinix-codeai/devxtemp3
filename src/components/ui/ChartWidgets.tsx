import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import type { ChartDataPoint } from "../../types";

const COLORS = ["#FF6F4A", "#0A2E4D", "#4B88CF", "#22C55E", "#F59E0B", "#8B5CF6"];

interface ChartCardProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    action?: React.ReactNode;
}

export function ChartCard({ title, subtitle, children, action }: ChartCardProps) {
    return (
        <div className="card">
            <div className="card-header">
                <div>
                    <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>{title}</h3>
                    {subtitle && <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{subtitle}</p>}
                </div>
                {action}
            </div>
            <div className="card-body">{children}</div>
        </div>
    );
}

export function AreaChartWidget({ data, height = 250 }: { data: ChartDataPoint[]; height?: number }) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF6F4A" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#FF6F4A" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="areaGrad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4B88CF" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#4B88CF" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--color-text-muted)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "var(--color-text-muted)" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", fontSize: "12px" }} />
                <Area type="monotone" dataKey="value" stroke="#FF6F4A" fill="url(#areaGrad)" strokeWidth={2} />
                {data[0]?.value2 !== undefined && <Area type="monotone" dataKey="value2" stroke="#4B88CF" fill="url(#areaGrad2)" strokeWidth={2} />}
            </AreaChart>
        </ResponsiveContainer>
    );
}

export function BarChartWidget({ data, height = 250 }: { data: ChartDataPoint[]; height?: number }) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--color-text-muted)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "var(--color-text-muted)" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", fontSize: "12px" }} />
                <Bar dataKey="value" fill="#FF6F4A" radius={[4, 4, 0, 0]} />
                {data[0]?.value2 !== undefined && <Bar dataKey="value2" fill="#4B88CF" radius={[4, 4, 0, 0]} />}
            </BarChart>
        </ResponsiveContainer>
    );
}

export function PieChartWidget({ data, height = 250 }: { data: ChartDataPoint[]; height?: number }) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                    {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", fontSize: "12px" }} />
            </PieChart>
        </ResponsiveContainer>
    );
}

export function LineChartWidget({ data, height = 250 }: { data: ChartDataPoint[]; height?: number }) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: "var(--color-text-muted)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "var(--color-text-muted)" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "8px", fontSize: "12px" }} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#FF6F4A" strokeWidth={2} dot={{ r: 3 }} name="This Period" />
                {data[0]?.value2 !== undefined && <Line type="monotone" dataKey="value2" stroke="#4B88CF" strokeWidth={2} dot={{ r: 3 }} name="Previous" />}
            </LineChart>
        </ResponsiveContainer>
    );
}
