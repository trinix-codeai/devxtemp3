import { mockDeals } from "../../data/mockData";
import type { Deal, LeadStatus } from "../../types";
import { DollarSign, Calendar, User, MoreHorizontal, Plus } from "lucide-react";

const stages: { key: LeadStatus; label: string; color: string }[] = [
    { key: "new", label: "New Leads", color: "bg-info-500" },
    { key: "contacted", label: "Contacted", color: "bg-slate-500" },
    { key: "qualified", label: "Qualified", color: "bg-warning-500" },
    { key: "proposal", label: "Proposal Sent", color: "bg-coral-500" },
    { key: "negotiation", label: "Negotiation", color: "bg-purple-500" },
    { key: "won", label: "Closed Won", color: "bg-success-500" },
    { key: "lost", label: "Closed Lost", color: "bg-danger-500" },
];

function DealCard({ deal }: { deal: Deal }) {
    return (
        <div className="kanban-card group">
            <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm font-medium leading-tight" style={{ color: "var(--color-heading)" }}>{deal.title}</h4>
                <button className="btn-icon p-1 opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={14} /></button>
            </div>
            <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: "var(--color-text-muted)" }}>
                <User size={12} />{deal.contactName}
            </div>
            <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1 font-semibold" style={{ color: "var(--color-heading)" }}>
                    <DollarSign size={12} />${deal.value.toLocaleString()}
                </span>
                <span className="flex items-center gap-1" style={{ color: "var(--color-text-muted)" }}>
                    <Calendar size={12} />{deal.expectedClose}
                </span>
            </div>
            <div className="mt-2">
                <div className="progress-bar"><div className={`progress-fill ${deal.probability >= 75 ? "bg-success-500" : deal.probability >= 40 ? "bg-warning-500" : "bg-info-500"}`} style={{ width: `${deal.probability}%` }} /></div>
                <div className="text-[10px] mt-1" style={{ color: "var(--color-text-muted)" }}>{deal.probability}% probability</div>
            </div>
        </div>
    );
}

export function CRMPipelinePage() {
    const totalValue = mockDeals.reduce((s, d) => s + d.value, 0);
    const weightedValue = mockDeals.reduce((s, d) => s + d.value * d.probability / 100, 0);

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Sales Pipeline</h1>
                    <p className="page-subtitle">{mockDeals.length} deals · ${totalValue.toLocaleString()} total · ${Math.round(weightedValue).toLocaleString()} weighted</p>
                </div>
                <button className="btn-primary"><Plus size={16} /> Add Deal</button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4">
                {stages.map((stage) => {
                    const stageDeals = mockDeals.filter((d) => d.stage === stage.key);
                    const stageValue = stageDeals.reduce((s, d) => s + d.value, 0);
                    return (
                        <div key={stage.key} className="kanban-column shrink-0">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${stage.color}`} />
                                    <span className="text-xs font-semibold" style={{ color: "var(--color-heading)" }}>{stage.label}</span>
                                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: "var(--color-border)", color: "var(--color-text-muted)" }}>{stageDeals.length}</span>
                                </div>
                                <span className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>${stageValue.toLocaleString()}</span>
                            </div>
                            <div className="space-y-2 min-h-[200px]">
                                {stageDeals.map((d) => <DealCard key={d.id} deal={d} />)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
