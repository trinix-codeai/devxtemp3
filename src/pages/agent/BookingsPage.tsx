import { mockBookings } from "../../data/mockData";
import { DataTable } from "../../components/ui/DataTable";
import { Plus, Eye, Download } from "lucide-react";
import type { Booking } from "../../types";

const statusColors: Record<string, string> = { inquiry: "badge-neutral", pending: "badge-warning", confirmed: "badge-success", "in-progress": "badge-info", completed: "badge-success", cancelled: "badge-danger" };

const columns = [
    { key: "reference", label: "Reference", sortable: true, render: (r: Booking) => <span className="font-mono text-xs font-semibold" style={{ color: "var(--color-heading)" }}>{r.reference}</span> },
    { key: "clientName", label: "Client", sortable: true, render: (r: Booking) => <span className="font-medium">{r.clientName}</span> },
    { key: "destination", label: "Destination", sortable: true },
    { key: "checkIn", label: "Check-in", sortable: true },
    { key: "guests", label: "Guests", sortable: true },
    { key: "totalAmount", label: "Amount", sortable: true, render: (r: Booking) => <span className="font-semibold">{r.currency === "USD" ? "$" : r.currency === "EUR" ? "€" : "£"}{r.totalAmount.toLocaleString()}</span> },
    { key: "status", label: "Status", sortable: true, render: (r: Booking) => <span className={`badge ${statusColors[r.status]}`}>{r.status}</span> },
    {
        key: "actions", label: "", render: (_r: Booking) => (
            <div className="flex items-center gap-1">
                <button className="btn-icon btn-sm"><Eye size={14} /></button>
                <button className="btn-icon btn-sm"><Download size={14} /></button>
            </div>
        )
    },
];

export function BookingsPage() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Bookings</h1>
                    <p className="page-subtitle">{mockBookings.length} bookings total</p>
                </div>
                <button className="btn-primary"><Plus size={16} /> New Booking</button>
            </div>

            <DataTable
                columns={columns}
                data={mockBookings as unknown as Record<string, unknown>[]}
                searchPlaceholder="Search bookings..."
            />
        </div>
    );
}
