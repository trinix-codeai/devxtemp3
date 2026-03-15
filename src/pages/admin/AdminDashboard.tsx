import { DollarSign, Users, BookOpen, TrendingUp, Globe, Activity, ArrowRight, AlertTriangle } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";
import { ChartCard, AreaChartWidget, BarChartWidget, PieChartWidget } from "../../components/ui/ChartWidgets";
import { revenueByMonth, bookingsByDestination, bookingsBySource, teamPerformance } from "../../data/mockData";

const stats = [
    { label: "Total Revenue", value: "$485K", trend: { value: 18, label: "vs last quarter" }, icon: <DollarSign size={20} className="text-coral-500" />, iconBg: "bg-coral-100" },
    { label: "Active Bookings", value: "234", trend: { value: 12, label: "vs last month" }, icon: <BookOpen size={20} className="text-info-500" />, iconBg: "bg-info-100" },
    { label: "Team Members", value: "12", trend: { value: 2, label: "new this quarter" }, icon: <Users size={20} className="text-success-500" />, iconBg: "bg-success-100" },
    { label: "Conversion Rate", value: "28%", trend: { value: 4, label: "vs last quarter" }, icon: <TrendingUp size={20} className="text-warning-500" />, iconBg: "bg-warning-100" },
    { label: "Destinations", value: "42", trend: { value: 6, label: "new this quarter" }, icon: <Globe size={20} className="text-brand" />, iconBg: "bg-ocean-100" },
    { label: "Uptime", value: "99.9%", icon: <Activity size={20} className="text-success-500" />, iconBg: "bg-success-100" },
];

export function AdminDashboard() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Admin Dashboard</h1>
                    <p className="page-subtitle">Company-wide overview and performance metrics</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {stats.map((s) => <StatCard key={s.label} {...s} />)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2"><ChartCard title="Revenue Trend" subtitle="Current vs previous period"><AreaChartWidget data={revenueByMonth} /></ChartCard></div>
                <ChartCard title="Bookings by Source"><PieChartWidget data={bookingsBySource} /></ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartCard title="Destination Performance" subtitle="Bookings per destination"><BarChartWidget data={bookingsByDestination} /></ChartCard>
                <ChartCard title="Team Performance" subtitle="Deals vs conversion rate"><BarChartWidget data={teamPerformance} /></ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>Top Agents</h3>
                        <a href="/admin/team" className="text-xs text-coral-500 flex items-center gap-1 hover:underline">View all <ArrowRight size={12} /></a>
                    </div>
                    <div className="card-body space-y-3">
                        {[{ name: "Sarah Mitchell", deals: 42, revenue: "$145K", pct: 32 }, { name: "Tom Harris", deals: 35, revenue: "$118K", pct: 28 }, { name: "Amy Lee", deals: 38, revenue: "$126K", pct: 30 }].map((a, i) => (
                            <div key={a.name} className="flex items-center gap-3">
                                <span className="text-xs font-bold w-5 text-center" style={{ color: "var(--color-text-muted)" }}>#{i + 1}</span>
                                <div className="avatar avatar-sm bg-brand">{a.name.split(" ").map((n) => n[0]).join("")}</div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium" style={{ color: "var(--color-heading)" }}>{a.name}</div>
                                    <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{a.deals} deals · {a.pct}% conversion</div>
                                </div>
                                <span className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>{a.revenue}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>System Alerts</h3>
                    </div>
                    <div className="card-body space-y-3">
                        {[{ msg: "Payment gateway timeout detected (2 occurrences)", level: "warning" }, { msg: "Database backup completed successfully", level: "success" }, { msg: "API rate limit approaching for Amadeus GDS", level: "danger" }].map((a, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "var(--color-surface-alt)" }}>
                                <AlertTriangle size={16} className={a.level === "danger" ? "text-danger-500" : a.level === "warning" ? "text-warning-500" : "text-success-500"} />
                                <span className="text-sm" style={{ color: "var(--color-text)" }}>{a.msg}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
