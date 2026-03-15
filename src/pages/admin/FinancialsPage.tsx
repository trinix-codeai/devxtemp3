import { mockInvoices } from "../../data/mockData";
import { DataTable } from "../../components/ui/DataTable";
import { StatCard } from "../../components/ui/StatCard";
import { ChartCard, AreaChartWidget } from "../../components/ui/ChartWidgets";
import { DollarSign, CreditCard, AlertTriangle, CheckCircle, Download } from "lucide-react";
import type { Invoice } from "../../types";

const statusColors: Record<string, string> = {
    draft: "badge-neutral",
    sent: "badge-info",
    paid: "badge-success",
    overdue: "badge-danger",
    cancelled: "badge-neutral"
};

const revenueData = [
    { name: "Sep", value: 42000, value2: 38000 },
    { name: "Oct", value: 58000, value2: 52000 },
    { name: "Nov", value: 65000, value2: 45000 },
    { name: "Dec", value: 48000, value2: 55000 },
    { name: "Jan", value: 72000, value2: 62000 },
    { name: "Feb", value: 85000, value2: 68000 },
];

const columns = [
    { key: "number", label: "Invoice", sortable: true, render: (r: Invoice) => <span className="font-mono text-xs font-semibold">{r.number}</span> },
    { key: "clientName", label: "Client", sortable: true },
    { key: "amount", label: "Amount", sortable: true, render: (r: Invoice) => <span className="font-semibold">{r.currency === "USD" ? "$" : r.currency === "EUR" ? "€" : "£"}{r.amount.toLocaleString()}</span> },
    { key: "status", label: "Status", sortable: true, render: (r: Invoice) => <span className={`badge ${statusColors[r.status]}`}>{r.status}</span> },
    { key: "issueDate", label: "Issued", sortable: true },
    { key: "dueDate", label: "Due", sortable: true },
    { key: "actions", label: "", render: (_r: Invoice) => <button className="btn-icon btn-sm"><Download size={14} /></button> },
];

export function FinancialsPage() {
    const totalRev = mockInvoices.filter(i => i.status === "paid").reduce((s, i) => s + i.amount, 0);
    const outstanding = mockInvoices.filter(i => ["sent", "overdue"].includes(i.status)).reduce((s, i) => s + i.amount, 0);
    const overdue = mockInvoices.filter(i => i.status === "overdue").reduce((s, i) => s + i.amount, 0);

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Financial Reports</h1>
                    <p className="page-subtitle">Multi-currency financial overview</p>
                </div>
                <button className="btn-outline"><Download size={16} /> Export Report</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Paid" value={`$${totalRev.toLocaleString()}`} icon={<CheckCircle size={20} className="text-success-500" />} iconBg="bg-success-100" trend={{ value: 15, label: "vs last month" }} />
                <StatCard label="Outstanding" value={`$${outstanding.toLocaleString()}`} icon={<CreditCard size={20} className="text-info-500" />} iconBg="bg-info-100" />
                <StatCard label="Overdue" value={`$${overdue.toLocaleString()}`} icon={<AlertTriangle size={20} className="text-danger-500" />} iconBg="bg-danger-100" />
                <StatCard label="Net Margin" value="24.5%" icon={<DollarSign size={20} className="text-coral-500" />} iconBg="bg-coral-100" trend={{ value: 2, label: "vs last quarter" }} />
            </div>

            <ChartCard title="Revenue vs Expenses" subtitle="6-month trend">
                <AreaChartWidget data={revenueData} />
            </ChartCard>

            <DataTable
                columns={columns}
                data={mockInvoices}
                searchPlaceholder="Search invoices..."
            />
        </div>
    );
}