import { mockCampaigns } from "../../data/mockData";
import { StatCard } from "../../components/ui/StatCard";
import { Mail, Users, MousePointer, TrendingUp, Plus, MoreHorizontal, Eye } from "lucide-react";
import type { Campaign } from "../../types";

const statusColors: Record<string, string> = { draft: "badge-neutral", scheduled: "badge-info", active: "badge-success", completed: "badge-coral", paused: "badge-warning" };

export function MarketingPage() {
    const totalAudience = mockCampaigns.reduce((s, c) => s + c.audience, 0);
    const totalConverted = mockCampaigns.reduce((s, c) => s + c.converted, 0);
    const avgOpen = mockCampaigns.filter(c => c.sent > 0).reduce((s, c) => s + (c.opened / c.sent * 100), 0) / mockCampaigns.filter(c => c.sent > 0).length;

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Marketing Automation</h1>
                    <p className="page-subtitle">Campaign management and audience engagement</p>
                </div>
                <button className="btn-primary"><Plus size={16} /> New Campaign</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Audience" value={totalAudience.toLocaleString()} icon={<Users size={20} className="text-info-500" />} iconBg="bg-info-100" />
                <StatCard label="Avg Open Rate" value={`${avgOpen.toFixed(1)}%`} icon={<Mail size={20} className="text-coral-500" />} iconBg="bg-coral-100" />
                <StatCard label="Total Conversions" value={totalConverted.toString()} icon={<MousePointer size={20} className="text-success-500" />} iconBg="bg-success-100" />
                <StatCard label="ROI" value="340%" icon={<TrendingUp size={20} className="text-warning-500" />} iconBg="bg-warning-100" trend={{ value: 25, label: "vs last quarter" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockCampaigns.map((c) => (
                    <CampaignCard key={c.id} campaign={c} />
                ))}
            </div>
        </div>
    );
}

function CampaignCard({ campaign: c }: { campaign: Campaign }) {
    const openRate = c.sent > 0 ? (c.opened / c.sent * 100).toFixed(1) : "0";
    const clickRate = c.opened > 0 ? (c.clicked / c.opened * 100).toFixed(1) : "0";

    return (
        <div className="card card-hover">
            <div className="card-body">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>{c.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className={`badge ${statusColors[c.status]}`}>{c.status}</span>
                            <span className="badge badge-neutral capitalize">{c.type}</span>
                        </div>
                    </div>
                    <button className="btn-icon"><MoreHorizontal size={16} /></button>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="text-center p-2 rounded-lg" style={{ background: "var(--color-surface-alt)" }}>
                        <div className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>Audience</div>
                        <div className="text-sm font-bold" style={{ color: "var(--color-heading)" }}>{c.audience.toLocaleString()}</div>
                    </div>
                    <div className="text-center p-2 rounded-lg" style={{ background: "var(--color-surface-alt)" }}>
                        <div className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>Sent</div>
                        <div className="text-sm font-bold" style={{ color: "var(--color-heading)" }}>{c.sent.toLocaleString()}</div>
                    </div>
                    <div className="text-center p-2 rounded-lg" style={{ background: "var(--color-surface-alt)" }}>
                        <div className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>Open Rate</div>
                        <div className="text-sm font-bold" style={{ color: "var(--color-heading)" }}>{openRate}%</div>
                    </div>
                    <div className="text-center p-2 rounded-lg" style={{ background: "var(--color-surface-alt)" }}>
                        <div className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>Click Rate</div>
                        <div className="text-sm font-bold" style={{ color: "var(--color-heading)" }}>{clickRate}%</div>
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs" style={{ color: "var(--color-text-muted)" }}>
                    <span>Started: {c.startDate}</span>
                    <span>{c.converted} conversions</span>
                </div>
            </div>
        </div>
    );
}
