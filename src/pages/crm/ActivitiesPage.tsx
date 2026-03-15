import { mockActivities } from "../../data/mockData";
import { Phone, Mail, Calendar, FileText, CheckCircle, Circle, Clock, Plus } from "lucide-react";
import type { Activity } from "../../types";

const typeIcons: Record<string, React.ReactNode> = {
    call: <Phone size={14} className="text-info-500" />,
    email: <Mail size={14} className="text-coral-500" />,
    meeting: <Calendar size={14} className="text-warning-500" />,
    task: <CheckCircle size={14} className="text-success-500" />,
    note: <FileText size={14} className="text-slate-400" />,
};

const priorityColors: Record<string, string> = { urgent: "badge-danger", high: "badge-warning", medium: "badge-info", low: "badge-neutral" };

export function ActivitiesPage() {
    const upcoming = mockActivities.filter((a) => !a.completed);
    const completed = mockActivities.filter((a) => a.completed);

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Activity Tracking</h1>
                    <p className="page-subtitle">Log and track all client interactions</p>
                </div>
                <button className="btn-primary"><Plus size={16} /> Log Activity</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upcoming */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: "var(--color-heading)" }}>
                            <Clock size={14} className="text-warning-500" /> Upcoming ({upcoming.length})
                        </h3>
                    </div>
                    <div className="card-body space-y-3">
                        {upcoming.map((a) => <ActivityItem key={a.id} activity={a} />)}
                    </div>
                </div>

                {/* Completed */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: "var(--color-heading)" }}>
                            <CheckCircle size={14} className="text-success-500" /> Completed ({completed.length})
                        </h3>
                    </div>
                    <div className="card-body space-y-3">
                        {completed.map((a) => <ActivityItem key={a.id} activity={a} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ActivityItem({ activity }: { activity: Activity }) {
    return (
        <div className="flex items-start gap-3 p-3 rounded-lg transition-colors" style={{ background: "var(--color-surface-alt)" }}>
            <div className="mt-0.5">{activity.completed ? <CheckCircle size={14} className="text-success-500" /> : <Circle size={14} style={{ color: "var(--color-border)" }} />}</div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    {typeIcons[activity.type]}
                    <span className="text-sm font-medium" style={{ color: "var(--color-heading)" }}>{activity.title}</span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{activity.description}</p>
                {activity.contactName && <div className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>Contact: {activity.contactName}</div>}
            </div>
            <div className="shrink-0 text-right">
                <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{activity.dueDate}</div>
                <span className={`badge ${priorityColors[activity.priority]} mt-1`}>{activity.priority}</span>
            </div>
        </div>
    );
}
