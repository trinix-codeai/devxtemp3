import { mockContacts } from "../../data/mockData";
import { DataTable } from "../../components/ui/DataTable";
import { Plus, Mail, Phone, Tag, Filter } from "lucide-react";
import type { Contact } from "../../types";

const statusColors: Record<string, string> = { new: "badge-info", contacted: "badge-neutral", qualified: "badge-warning", proposal: "badge-coral", negotiation: "badge-warning", won: "badge-success", lost: "badge-danger" };

const columns = [
    {
        key: "name", label: "Contact", sortable: true, render: (r: Contact) => (
            <div className="flex items-center gap-3">
                <div className="avatar avatar-sm bg-brand">{r.initials}</div>
                <div>
                    <div className="font-medium text-sm" style={{ color: "var(--color-heading)" }}>{r.name}</div>
                    <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{r.email}</div>
                </div>
            </div>
        )
    },
    { key: "type", label: "Type", sortable: true, render: (r: Contact) => <span className="badge badge-neutral capitalize">{r.type}</span> },
    { key: "status", label: "Status", sortable: true, render: (r: Contact) => <span className={`badge ${statusColors[r.status]} capitalize`}>{r.status}</span> },
    { key: "value", label: "Lifetime Value", sortable: true, render: (r: Contact) => <span className="font-semibold">${r.value.toLocaleString()}</span> },
    {
        key: "tags", label: "Tags", render: (r: Contact) => (
            <div className="flex flex-wrap gap-1">{r.tags.slice(0, 2).map((t) => <span key={t} className="badge badge-neutral text-[10px]">{t}</span>)}</div>
        )
    },
    { key: "source", label: "Source", sortable: true },
    { key: "lastContact", label: "Last Contact", sortable: true },
    {
        key: "actions", label: "", render: (_r: Contact) => (
            <div className="flex items-center gap-1">
                <button className="btn-icon btn-sm"><Mail size={14} /></button>
                <button className="btn-icon btn-sm"><Phone size={14} /></button>
            </div>
        )
    },
];

export function ContactsPage() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Contact Management</h1>
                    <p className="page-subtitle">Unified database with 360° client view</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn-outline"><Filter size={14} /> Segments</button>
                    <button className="btn-outline"><Tag size={14} /> Tags</button>
                    <button className="btn-primary"><Plus size={16} /> Add Contact</button>
                </div>
            </div>

            <div className="flex gap-2 flex-wrap mb-2">
                {["All", "Leads", "Clients", "Partners"].map((f) => (
                    <button key={f} className={`btn-sm rounded-full ${f === "All" ? "bg-coral-500 text-white" : "btn-outline"}`}>{f}</button>
                ))}
            </div>

            <DataTable columns={columns} data={mockContacts} searchPlaceholder="Search contacts..." />
        </div>
    );
}
