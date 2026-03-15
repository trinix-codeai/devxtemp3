import { mockCommissions } from "../../data/mockData";
import { DataTable } from "../../components/ui/DataTable";
import { StatCard } from "../../components/ui/StatCard";
import { ChartCard, BarChartWidget } from "../../components/ui/ChartWidgets";
import { DollarSign, CheckCircle, Clock, TrendingUp } from "lucide-react";
import type { Commission } from "../../types";

const statusColors: Record<string, string> = { pending: "badge-warning", approved: "badge-info", paid: "badge-success" };

const monthlyCommissions = [
    { name: "Sep", value: 3200 }, { name: "Oct", value: 4500 }, { name: "Nov", value: 3800 },
    { name: "Dec", value: 6750 }, { name: "Jan", value: 5700 }, { name: "Feb", value: 850 },
];

const columns = [
    { key: "bookingRef", label: "Booking", sortable: true, render: (r: Commission) => <span className="font-mono text-xs">{r.bookingRef}</span> },
    { key: "clientName", label: "Client", sortable: true },
    { key: "bookingAmount", label: "Booking Amount", sortable: true, render: (r: Commission) => <span>${r.bookingAmount.toLocaleString()}</span> },
    { key: "commissionRate", label: "Rate", sortable: true, render: (r: Commission) => <span>{r.commissionRate}%</span> },
    { key: "commissionAmount", label: "Commission", sortable: true, render: (r: Commission) => <span className="font-semibold text-success-600">${r.commissionAmount.toLocaleString()}</span> },
    { key: "status", label: "Status", sortable: true, render: (r: Commission) => <span className={`badge ${statusColors[r.status]}`}>{r.status}</span> },
    { key: "date", label: "Date", sortable: true },
];

export function CommissionsPage() {
    const total = mockCommissions.reduce((s, c) => s + c.commissionAmount, 0);
    const paid = mockCommissions.filter((c) => c.status === "paid").reduce((s, c) => s + c.commissionAmount, 0);
    const pending = mockCommissions.filter((c) => c.status !== "paid").reduce((s, c) => s + c.commissionAmount, 0);

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Commission Tracker</h1>
                    <p className="page-subtitle">Track your earnings across all bookings</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Commission" value={`$${total.toLocaleString()}`} icon={<DollarSign size={20} className="text-coral-500" />} iconBg="bg-coral-100" trend={{ value: 12, label: "vs last month" }} />
                <StatCard label="Paid" value={`$${paid.toLocaleString()}`} icon={<CheckCircle size={20} className="text-success-500" />} iconBg="bg-success-100" />
                <StatCard label="Pending" value={`$${pending.toLocaleString()}`} icon={<Clock size={20} className="text-warning-500" />} iconBg="bg-warning-100" />
                <StatCard label="Avg Rate" value="12%" icon={<TrendingUp size={20} className="text-info-500" />} iconBg="bg-info-100" />
            </div>

            <ChartCard title="Monthly Commissions" subtitle="Earnings over the past 6 months">
                <BarChartWidget data={monthlyCommissions} />
            </ChartCard>

            <DataTable columns={columns} data={mockCommissions} searchPlaceholder="Search commissions..." />
        </div>
    );
}
