import { X, Bell, CreditCard, AlertTriangle, MessageSquare, Settings } from "lucide-react";
import { useAppSelector, useAppDispatch } from "../../hooks/useStore";
import { closeNotifications } from "../../store/uiSlice";
import { mockNotifications } from "../../data/mockData";

const typeIcons: Record<string, React.ReactNode> = {
    booking: <Bell size={16} className="text-info-500" />,
    payment: <CreditCard size={16} className="text-success-500" />,
    alert: <AlertTriangle size={16} className="text-warning-500" />,
    message: <MessageSquare size={16} className="text-coral-500" />,
    system: <Settings size={16} className="text-slate-400" />,
};

export function NotificationPanel() {
    const dispatch = useAppDispatch();
    const { notificationsOpen } = useAppSelector((s) => s.ui);

    if (!notificationsOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/30 z-40" onClick={() => dispatch(closeNotifications())} />
            <div
                className="fixed right-0 top-0 h-full w-full max-w-sm z-50 shadow-soft-xl animate-slide-right flex flex-col"
                style={{ background: "var(--color-surface)" }}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--color-border)" }}>
                    <h2 className="font-heading font-bold text-base" style={{ color: "var(--color-heading)" }}>Notifications</h2>
                    <button onClick={() => dispatch(closeNotifications())} className="btn-icon">
                        <X size={18} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {mockNotifications.map((n) => (
                        <div
                            key={n.id}
                            className={`px-5 py-3 border-b flex items-start gap-3 transition-colors cursor-pointer ${!n.read ? "" : "opacity-60"}`}
                            style={{ borderColor: "var(--color-border)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-surface-alt)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                            <div className="mt-0.5 shrink-0">
                                {typeIcons[n.type] || <Bell size={16} />}
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="text-sm font-medium" style={{ color: "var(--color-heading)" }}>{n.title}</div>
                                <div className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{n.description}</div>
                                <div className="text-[10px] mt-1" style={{ color: "var(--color-text-muted)" }}>{n.time}</div>
                            </div>
                            {!n.read && <div className="w-2 h-2 rounded-full bg-coral-500 mt-1.5 shrink-0" />}
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                    <button className="btn-ghost w-full text-sm text-coral-500">Mark all as read</button>
                </div>
            </div>
        </>
    );
}
