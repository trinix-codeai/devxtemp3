import { mockBookings } from "../../data/mockData";
import { DataTable } from "../../components/ui/DataTable";
import { BookOpen, Plus, Eye } from "lucide-react";
import type { Booking } from "../../types";

const statusColors: Record<string, string> = { inquiry: "badge-neutral", pending: "badge-warning", confirmed: "badge-success", "in-progress": "badge-info", completed: "badge-success", cancelled: "badge-danger" };

const columns = [
    { key: "reference", label: "Ref", sortable: true, render: (r: Booking) => <span className="font-mono text-xs font-semibold">{r.reference}</span> },
    { key: "clientName", label: "Client", sortable: true },
    { key: "destination", label: "Destination", sortable: true },
    { key: "checkIn", label: "Check-in", sortable: true },
    { key: "guests", label: "Pax" },
    { key: "totalAmount", label: "Amount", sortable: true, render: (r: Booking) => <span className="font-semibold">{r.currency === "USD" ? "$" : r.currency === "EUR" ? "€" : "£"}{r.totalAmount.toLocaleString()}</span> },
    { key: "source", label: "Source", render: (r: Booking) => <span className="badge badge-neutral">{r.source}</span> },
    { key: "status", label: "Status", sortable: true, render: (r: Booking) => <span className={`badge ${statusColors[r.status]}`}>{r.status}</span> },
    { key: "actions", label: "", render: (_r: Booking) => <button className="btn-icon btn-sm"><Eye size={14} /></button> },
];

export function ERPBookingsPage() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><BookOpen size={22} className="text-coral-500" /> Booking Engine</h1>
                    <p className="page-subtitle">Unified multi-source booking management</p>
                </div>
                <button className="btn-primary"><Plus size={16} /> New Booking</button>
            </div>
            <DataTable columns={columns} data={mockBookings} searchPlaceholder="Search bookings..." />
        </div>
    );
}
