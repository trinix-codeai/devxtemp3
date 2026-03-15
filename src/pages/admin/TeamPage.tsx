import { ChartCard, BarChartWidget } from "../../components/ui/ChartWidgets";
import { teamPerformance } from "../../data/mockData";
import { Award, Clock, TrendingUp, Star } from "lucide-react";

const agents = [
    { name: "Sarah Mitchell", initials: "SM", deals: 42, revenue: 145200, conversion: 32, avgResponse: "2.1h", satisfaction: 4.8, status: "online" },
    { name: "Tom Harris", initials: "TH", deals: 35, revenue: 118000, conversion: 28, avgResponse: "3.2h", satisfaction: 4.5, status: "online" },
    { name: "Amy Lee", initials: "AL", deals: 38, revenue: 126000, conversion: 30, avgResponse: "1.8h", satisfaction: 4.9, status: "away" },
    { name: "Chris Baker", initials: "CB", deals: 28, revenue: 92000, conversion: 22, avgResponse: "4.1h", satisfaction: 4.3, status: "offline" },
    { name: "Diana Kim", initials: "DK", deals: 31, revenue: 104000, conversion: 25, avgResponse: "2.5h", satisfaction: 4.6, status: "online" },
];

const statusColors: Record<string, string> = { online: "bg-success-500", away: "bg-warning-500", offline: "bg-slate-300" };

export function TeamPage() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Team Performance</h1>
                    <p className="page-subtitle">{agents.length} team members tracked</p>
                </div>
            </div>

            <ChartCard title="Team Comparison" subtitle="Deals closed vs conversion rate"><BarChartWidget data={teamPerformance} /></ChartCard>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {agents.map((a, i) => (
                    <div key={a.name} className="card card-hover">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="relative">
                                    <div className="avatar avatar-lg bg-brand">{a.initials}</div>
                                    <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 ${statusColors[a.status]}`} style={{ borderColor: "var(--card-bg)" }} />
                                </div>
                                <div>
                                    <div className="font-semibold" style={{ color: "var(--color-heading)" }}>{a.name}</div>
                                    <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>Rank #{i + 1}</div>
                                </div>
                                {i === 0 && <Award size={20} className="text-amber-400 ml-auto" />}
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-2 rounded-lg text-center" style={{ background: "var(--color-surface-alt)" }}>
                                    <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>Deals</div>
                                    <div className="font-heading font-bold" style={{ color: "var(--color-heading)" }}>{a.deals}</div>
                                </div>
                                <div className="p-2 rounded-lg text-center" style={{ background: "var(--color-surface-alt)" }}>
                                    <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>Revenue</div>
                                    <div className="font-heading font-bold" style={{ color: "var(--color-heading)" }}>${(a.revenue / 1000).toFixed(0)}K</div>
                                </div>
                                <div className="p-2 rounded-lg text-center" style={{ background: "var(--color-surface-alt)" }}>
                                    <div className="text-xs flex items-center justify-center gap-1" style={{ color: "var(--color-text-muted)" }}><TrendingUp size={10} />Conv.</div>
                                    <div className="font-heading font-bold" style={{ color: "var(--color-heading)" }}>{a.conversion}%</div>
                                </div>
                                <div className="p-2 rounded-lg text-center" style={{ background: "var(--color-surface-alt)" }}>
                                    <div className="text-xs flex items-center justify-center gap-1" style={{ color: "var(--color-text-muted)" }}><Star size={10} />Rating</div>
                                    <div className="font-heading font-bold" style={{ color: "var(--color-heading)" }}>{a.satisfaction}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-3 text-xs" style={{ color: "var(--color-text-muted)" }}>
                                <Clock size={12} /> Avg response: {a.avgResponse}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
