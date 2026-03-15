import { Plug, CheckCircle, XCircle, Clock, RefreshCw, ExternalLink } from "lucide-react";

interface Integration {
    name: string; category: string; status: "connected" | "disconnected" | "pending";
    description: string; lastSync?: string;
}

const integrations: Integration[] = [
    { name: "Amadeus GDS", category: "Distribution", status: "connected", description: "Global Distribution System for flights and hotels", lastSync: "2 min ago" },
    { name: "Sabre", category: "Distribution", status: "connected", description: "Air, hotel, car, and rail inventory", lastSync: "5 min ago" },
    { name: "Travelport", category: "Distribution", status: "pending", description: "Galileo and Apollo GDS systems", lastSync: undefined },
    { name: "Stripe", category: "Payments", status: "connected", description: "Online payment processing", lastSync: "1 min ago" },
    { name: "PayPal", category: "Payments", status: "connected", description: "Alternative payment method", lastSync: "3 min ago" },
    { name: "QuickBooks", category: "Accounting", status: "connected", description: "Accounting and bookkeeping sync", lastSync: "1 hour ago" },
    { name: "Xero", category: "Accounting", status: "disconnected", description: "Cloud-based accounting platform" },
    { name: "Booking.com", category: "OTA", status: "connected", description: "Channel integration for accommodation", lastSync: "10 min ago" },
    { name: "Mailchimp", category: "Marketing", status: "connected", description: "Email marketing automation", lastSync: "30 min ago" },
    { name: "Google Maps", category: "Services", status: "connected", description: "Maps and geolocation services", lastSync: "Always on" },
];

const statusIcon: Record<string, React.ReactNode> = {
    connected: <CheckCircle size={16} className="text-success-500" />,
    disconnected: <XCircle size={16} className="text-danger-500" />,
    pending: <Clock size={16} className="text-warning-500" />,
};

const statusBadge: Record<string, string> = { connected: "badge-success", disconnected: "badge-danger", pending: "badge-warning" };

export function IntegrationsPage() {
    const categories = [...new Set(integrations.map((i) => i.category))];

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><Plug size={22} className="text-coral-500" /> Integration Monitoring</h1>
                    <p className="page-subtitle">{integrations.filter((i) => i.status === "connected").length}/{integrations.length} integrations active</p>
                </div>
            </div>

            {categories.map((cat) => (
                <div key={cat}>
                    <h2 className="text-sm font-heading font-semibold mb-3" style={{ color: "var(--color-heading)" }}>{cat}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                        {integrations.filter((i) => i.category === cat).map((intg) => (
                            <div key={intg.name} className="card card-hover">
                                <div className="card-body">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {statusIcon[intg.status]}
                                            <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>{intg.name}</h3>
                                        </div>
                                        <span className={`badge ${statusBadge[intg.status]}`}>{intg.status}</span>
                                    </div>
                                    <p className="text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>{intg.description}</p>
                                    <div className="flex items-center justify-between">
                                        {intg.lastSync && <span className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>Last sync: {intg.lastSync}</span>}
                                        <div className="flex items-center gap-1 ml-auto">
                                            {intg.status === "connected" && <button className="btn-icon btn-sm"><RefreshCw size={12} /></button>}
                                            <button className="btn-icon btn-sm"><ExternalLink size={12} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
