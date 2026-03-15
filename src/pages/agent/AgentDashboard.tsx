import { Users, BookOpen, DollarSign, Target, TrendingUp, Clock, Plus, ArrowRight } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";
import { ChartCard, AreaChartWidget, PieChartWidget } from "../../components/ui/ChartWidgets";
import { revenueByMonth, bookingsBySource, mockBookings, mockDeals, mockActivities } from "../../data/mockData";

const stats = [
    { label: "Active Leads", value: "24", trend: { value: 12, label: "vs last month" }, icon: <Target size={20} className="text-info-500" />, iconBg: "bg-info-100" },
    { label: "Bookings", value: "56", trend: { value: 8, label: "vs last month" }, icon: <BookOpen size={20} className="text-success-500" />, iconBg: "bg-success-100" },
    { label: "Revenue", value: "$145,200", trend: { value: 15, label: "vs last month" }, icon: <DollarSign size={20} className="text-coral-500" />, iconBg: "bg-coral-100" },
    { label: "Commission", value: "$14,520", trend: { value: 10, label: "vs last month" }, icon: <TrendingUp size={20} className="text-warning-500" />, iconBg: "bg-warning-100" },
    { label: "Conversion Rate", value: "32%", trend: { value: 5, label: "vs last month" }, icon: <Users size={20} className="text-brand" />, iconBg: "bg-ocean-100" },
    { label: "Pending Tasks", value: "8", trend: { value: -3, label: "vs last week" }, icon: <Clock size={20} className="text-slate-500" />, iconBg: "bg-slate-100" },
];

const stageColors: Record<string, string> = { new: "badge-info", contacted: "badge-neutral", qualified: "badge-warning", proposal: "badge-coral", negotiation: "badge-warning", won: "badge-success", lost: "badge-danger" };
const bookingStatusColors: Record<string, string> = { inquiry: "badge-neutral", pending: "badge-warning", confirmed: "badge-success", "in-progress": "badge-info", completed: "badge-success", cancelled: "badge-danger" };

export function AgentDashboard() {
    const recentBookings = mockBookings.slice(0, 5);
    const upcomingActivities = mockActivities.filter((a) => !a.completed).slice(0, 4);
    const pipelineSummary = mockDeals.reduce((acc, d) => { acc[d.stage] = (acc[d.stage] || 0) + 1; return acc; }, {} as Record<string, number>);

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Agent Dashboard</h1>
                    <p className="page-subtitle">Welcome back, Sarah. Here's your sales overview.</p>
                </div>
                <button className="btn-primary">
                    <Plus size={16} /> New Booking
                </button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {stats.map((s) => <StatCard key={s.label} {...s} />)}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <ChartCard title="Revenue Trend" subtitle="Current vs previous period">
                        <AreaChartWidget data={revenueByMonth} />
                    </ChartCard>
                </div>
                <ChartCard title="Bookings by Source" subtitle="Distribution this quarter">
                    <PieChartWidget data={bookingsBySource} />
                </ChartCard>
            </div>

            {/* Pipeline Summary + Tasks */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pipeline Summary */}
                <div className="card lg:col-span-1">
                    <div className="card-header">
                        <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>Pipeline Summary</h3>
                        <a href="/agent/pipeline" className="text-xs text-coral-500 flex items-center gap-1 hover:underline">
                            View all <ArrowRight size={12} />
                        </a>
                    </div>
                    <div className="card-body space-y-3">
                        {Object.entries(pipelineSummary).map(([stage, count]) => (
                            <div key={stage} className="flex items-center justify-between">
                                <span className={`badge ${stageColors[stage] || "badge-neutral"} capitalize`}>{stage}</span>
                                <span className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>{count} deals</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Bookings */}
                <div className="card lg:col-span-2">
                    <div className="card-header">
                        <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>Recent Bookings</h3>
                        <a href="/agent/bookings" className="text-xs text-coral-500 flex items-center gap-1 hover:underline">
                            View all <ArrowRight size={12} />
                        </a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Reference</th>
                                    <th>Client</th>
                                    <th>Destination</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentBookings.map((b) => (
                                    <tr key={b.id}>
                                        <td className="font-mono text-xs">{b.reference}</td>
                                        <td className="font-medium">{b.clientName}</td>
                                        <td>{b.destination}</td>
                                        <td className="font-semibold">{b.currency === "USD" ? "$" : b.currency === "EUR" ? "€" : "£"}{b.totalAmount.toLocaleString()}</td>
                                        <td><span className={`badge ${bookingStatusColors[b.status]}`}>{b.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Upcoming Activities */}
            <div className="card">
                <div className="card-header">
                    <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>Upcoming Activities</h3>
                </div>
                <div className="card-body">
                    <div className="space-y-3">
                        {upcomingActivities.map((a) => (
                            <div key={a.id} className="flex items-center gap-4 p-3 rounded-lg" style={{ background: "var(--color-surface-alt)" }}>
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${a.priority === "urgent" ? "bg-danger-100 text-danger-600" : a.priority === "high" ? "bg-warning-100 text-warning-600" : "bg-info-100 text-info-600"}`}>
                                    {a.type[0].toUpperCase()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium" style={{ color: "var(--color-heading)" }}>{a.title}</div>
                                    <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{a.description}</div>
                                </div>
                                <div className="text-xs shrink-0" style={{ color: "var(--color-text-muted)" }}>{a.dueDate}</div>
                                <span className={`badge ${a.priority === "urgent" ? "badge-danger" : a.priority === "high" ? "badge-warning" : "badge-info"}`}>
                                    {a.priority}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
