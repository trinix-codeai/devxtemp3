import { mockSuppliers } from "../../data/mockData";
import { DataTable } from "../../components/ui/DataTable";
import { Plus, Star, FileText, Mail } from "lucide-react";
import type { Supplier } from "../../types";

const columns = [
    {
        key: "name", label: "Vendor", sortable: true, render: (r: Supplier) => (
            <div><div className="font-medium" style={{ color: "var(--color-heading)" }}>{r.name}</div><div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{r.type} · {r.location}</div></div>
        )
    },
    { key: "contactPerson", label: "Contact" },
    { key: "rating", label: "Rating", sortable: true, render: (r: Supplier) => <span className="flex items-center gap-1"><Star size={12} className="text-amber-400 fill-amber-400" />{r.rating}</span> },
    { key: "contractStatus", label: "Contract", render: (r: Supplier) => <span className={`badge ${r.contractStatus === "active" ? "badge-success" : r.contractStatus === "pending" ? "badge-warning" : "badge-danger"}`}>{r.contractStatus}</span> },
    { key: "totalOrders", label: "Orders", sortable: true },
    { key: "totalSpend", label: "Total Spend", sortable: true, render: (r: Supplier) => <span className="font-semibold">${r.totalSpend.toLocaleString()}</span> },
    {
        key: "actions", label: "", render: (_r: Supplier) => (
            <div className="flex items-center gap-1">
                <button className="btn-icon btn-sm"><FileText size={14} /></button>
                <button className="btn-icon btn-sm"><Mail size={14} /></button>
            </div>
        )
    },
];

export function ERPSuppliersPage() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Supplier Management</h1>
                    <p className="page-subtitle">Contracts, purchase orders, and vendor ratings</p>
                </div>
                <button className="btn-primary"><Plus size={16} /> Add Vendor</button>
            </div>
            <DataTable columns={columns} data={mockSuppliers} searchPlaceholder="Search vendors..." />
        </div>
    );
}
