import { mockInvoices, mockCommissions } from "../../data/mockData";
import { StatCard } from "../../components/ui/StatCard";
import { ChartCard, AreaChartWidget } from "../../components/ui/ChartWidgets";
import { DataTable } from "../../components/ui/DataTable";
import { DollarSign, CreditCard, TrendingUp, AlertTriangle, Download } from "lucide-react";
import type { Invoice } from "../../types";

const statusColors: Record<string, string> = { draft: "badge-neutral", sent: "badge-info", paid: "badge-success", overdue: "badge-danger", cancelled: "badge-neutral" };

const cashFlowData = [
    { name: "Sep", value: 42000, value2: 35000 }, { name: "Oct", value: 58000, value2: 48000 },
    { name: "Nov", value: 65000, value2: 52000 }, { name: "Dec", value: 48000, value2: 42000 },
    { name: "Jan", value: 72000, value2: 61000 }, { name: "Feb", value: 85000, value2: 72000 },
];

const columns = [
    { key: "number", label: "Invoice #", sortable: true, render: (r: Invoice) => <span className="font-mono text-xs">{r.number}</span> },
    { key: "clientName", label: "Client", sortable: true },
    { key: "amount", label: "Amount", sortable: true, render: (r: Invoice) => <span className="font-semibold">{r.currency === "USD" ? "$" : r.currency === "EUR" ? "€" : "£"}{r.amount.toLocaleString()}</span> },
    { key: "status", label: "Status", sortable: true, render: (r: Invoice) => <span className={`badge ${statusColors[r.status]}`}>{r.status}</span> },
    { key: "dueDate", label: "Due Date", sortable: true },
    { key: "actions", label: "", render: (_r: Invoice) => <button className="btn-icon btn-sm"><Download size={14} /></button> },
];

export function ERPFinancePage() {
    const totalRev = mockInvoices.filter(i => i.status === "paid").reduce((s, i) => s + i.amount, 0);
    const outstanding = mockInvoices.filter(i => ["sent", "overdue"].includes(i.status)).reduce((s, i) => s + i.amount, 0);
    const commPending = mockCommissions.filter(c => c.status !== "paid").reduce((s, c) => s + c.commissionAmount, 0);

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><CreditCard size={22} className="text-coral-500" /> Financial Management</h1>
                    <p className="page-subtitle">Invoicing, payments, commissions, and margin analysis</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn-outline"><Download size={16} /> Export</button>
                    <button className="btn-primary"><DollarSign size={16} /> New Invoice</button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Collected" value={`$${totalRev.toLocaleString()}`} icon={<DollarSign size={20} className="text-success-500" />} iconBg="bg-success-100" trend={{ value: 15, label: "vs last month" }} />
                <StatCard label="Outstanding" value={`$${outstanding.toLocaleString()}`} icon={<CreditCard size={20} className="text-info-500" />} iconBg="bg-info-100" />
                <StatCard label="Commissions Due" value={`$${commPending.toLocaleString()}`} icon={<AlertTriangle size={20} className="text-warning-500" />} iconBg="bg-warning-100" />
                <StatCard label="Net Margin" value="24.5%" icon={<TrendingUp size={20} className="text-coral-500" />} iconBg="bg-coral-100" />
            </div>

            <ChartCard title="Cash Flow" subtitle="Revenue vs expenses"><AreaChartWidget data={cashFlowData} /></ChartCard>
            <DataTable columns={columns} data={mockInvoices as unknown as Record<string, unknown>[]} searchPlaceholder="Search invoices..." />
        </div>
    );
}
