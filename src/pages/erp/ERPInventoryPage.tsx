import { Boxes, AlertTriangle, CheckCircle, Clock, RefreshCw } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";

const inventoryItems = [
    { product: "Santorini Sunset Experience", total: 50, booked: 42, blocked: 2, status: "limited" as const },
    { product: "Kenya Big Five Safari", total: 30, booked: 27, blocked: 0, status: "limited" as const },
    { product: "Bali Wellness Retreat", total: 40, booked: 18, blocked: 0, status: "available" as const },
    { product: "Maldives Water Villa", total: 10, booked: 10, blocked: 0, status: "sold-out" as const },
    { product: "Tokyo Cultural Discovery", total: 100, booked: 52, blocked: 5, status: "available" as const },
    { product: "Provence Wine Tour", total: 60, booked: 34, blocked: 0, status: "available" as const },
    { product: "Nepal Everest Trek", total: 20, booked: 8, blocked: 0, status: "available" as const },
    { product: "Iceland Northern Lights", total: 25, booked: 22, blocked: 1, status: "limited" as const },
];

const statusBadge: Record<string, string> = { available: "badge-success", limited: "badge-warning", "sold-out": "badge-danger", blocked: "badge-neutral" };

export function ERPInventoryPage() {
    const totalSlots = inventoryItems.reduce((s, i) => s + i.total, 0);
    const bookedSlots = inventoryItems.reduce((s, i) => s + i.booked, 0);
    const lowStock = inventoryItems.filter((i) => i.status === "limited" || i.status === "sold-out").length;

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><Boxes size={22} className="text-coral-500" /> Inventory Management</h1>
                    <p className="page-subtitle">Real-time tracking with cross-channel sync</p>
                </div>
                <button className="btn-outline"><RefreshCw size={16} /> Sync All Channels</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Capacity" value={totalSlots.toString()} icon={<Boxes size={20} className="text-info-500" />} iconBg="bg-info-100" />
                <StatCard label="Booked" value={bookedSlots.toString()} icon={<CheckCircle size={20} className="text-success-500" />} iconBg="bg-success-100" />
                <StatCard label="Utilization" value={`${Math.round(bookedSlots / totalSlots * 100)}%`} icon={<Clock size={20} className="text-coral-500" />} iconBg="bg-coral-100" />
                <StatCard label="Low Stock Alerts" value={lowStock.toString()} icon={<AlertTriangle size={20} className="text-danger-500" />} iconBg="bg-danger-100" />
            </div>

            <div className="card">
                <div className="card-header"><h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>Inventory Status</h3></div>
                <div className="overflow-x-auto">
                    <table className="data-table">
                        <thead><tr><th>Product</th><th className="text-center">Total</th><th className="text-center">Booked</th><th className="text-center">Blocked</th><th className="text-center">Available</th><th className="text-center">Utilization</th><th>Status</th></tr></thead>
                        <tbody>
                            {inventoryItems.map((item) => {
                                const avail = item.total - item.booked - item.blocked;
                                const pct = Math.round(item.booked / item.total * 100);
                                return (
                                    <tr key={item.product}>
                                        <td className="font-medium" style={{ color: "var(--color-heading)" }}>{item.product}</td>
                                        <td className="text-center">{item.total}</td>
                                        <td className="text-center">{item.booked}</td>
                                        <td className="text-center">{item.blocked}</td>
                                        <td className="text-center font-semibold" style={{ color: avail <= 3 ? "var(--color-accent)" : "var(--color-text)" }}>{avail}</td>
                                        <td className="text-center">
                                            <div className="flex items-center gap-2 justify-center">
                                                <div className="progress-bar w-16"><div className={`progress-fill ${pct >= 90 ? "bg-danger-500" : pct >= 70 ? "bg-warning-500" : "bg-success-500"}`} style={{ width: `${pct}%` }} /></div>
                                                <span className="text-xs">{pct}%</span>
                                            </div>
                                        </td>
                                        <td><span className={`badge ${statusBadge[item.status]}`}>{item.status}</span></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
