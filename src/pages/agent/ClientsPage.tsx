import { mockContacts } from "../../data/mockData";
import { DataTable } from "../../components/ui/DataTable";
import { Plus, Mail, Phone } from "lucide-react";
import type { Contact } from "../../types";

const statusColors: Record<string, string> = { new: "badge-info", contacted: "badge-neutral", qualified: "badge-warning", proposal: "badge-coral", negotiation: "badge-warning", won: "badge-success", lost: "badge-danger" };

const columns = [
    {
        key: "name", label: "Client", sortable: true,
        render: (r: Contact) => (
            <div className="flex items-center gap-3">
                <div className="avatar avatar-sm bg-brand">{r.initials}</div>
                <div>
                    <div className="font-medium text-sm" style={{ color: "var(--color-heading)" }}>{r.name}</div>
                    <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{r.company || r.email}</div>
                </div>
            </div>
        ),
    },
    { key: "type", label: "Type", sortable: true, render: (r: Contact) => <span className="badge badge-neutral capitalize">{r.type}</span> },
    { key: "status", label: "Status", sortable: true, render: (r: Contact) => <span className={`badge ${statusColors[r.status]} capitalize`}>{r.status}</span> },
    { key: "value", label: "Value", sortable: true, render: (r: Contact) => <span className="font-semibold">${r.value.toLocaleString()}</span> },
    { key: "source", label: "Source", sortable: true },
    { key: "lastContact", label: "Last Contact", sortable: true },
    {
        key: "actions", label: "",
        render: (_r: Contact) => (
            <div className="flex items-center gap-1">
                <button className="btn-icon btn-sm"><Mail size={14} /></button>
                <button className="btn-icon btn-sm"><Phone size={14} /></button>
            </div>
        ),
    },
];

export function ClientsPage() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Clients & Contacts</h1>
                    <p className="page-subtitle">{mockContacts.length} contacts in your database</p>
                </div>
                <button className="btn-primary"><Plus size={16} /> Add Contact</button>
            </div>

            <DataTable
                columns={columns}
                data={mockContacts as unknown as Record<string, unknown>[]}
                searchPlaceholder="Search clients..."
            />
        </div>
    );
}
