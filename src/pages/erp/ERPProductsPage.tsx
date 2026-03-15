import { mockProducts } from "../../data/mockData";
import { DataTable } from "../../components/ui/DataTable";
import { Plus, Upload, Package, Combine, Star } from "lucide-react";
import type { Product } from "../../types";

const statusColors: Record<string, string> = { active: "badge-success", draft: "badge-warning", archived: "badge-neutral" };
const typeColors: Record<string, string> = { tour: "badge-info", hotel: "badge-coral", transfer: "badge-neutral", activity: "badge-success", package: "badge-warning", flight: "badge-info" };

const columns = [
    {
        key: "name", label: "Product", sortable: true, render: (r: Product) => (
            <div><div className="font-medium" style={{ color: "var(--color-heading)" }}>{r.name}</div><div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{r.destination}</div></div>
        )
    },
    { key: "type", label: "Type", sortable: true, render: (r: Product) => <span className={`badge ${typeColors[r.type]} capitalize`}>{r.type}</span> },
    { key: "basePrice", label: "Price", sortable: true, render: (r: Product) => <span className="font-semibold">{r.currency === "USD" ? "$" : "€"}{r.basePrice.toLocaleString()}</span> },
    { key: "category", label: "Category", sortable: true },
    { key: "rating", label: "Rating", sortable: true, render: (r: Product) => <span className="flex items-center gap-1"><Star size={12} className="text-amber-400 fill-amber-400" />{r.rating}</span> },
    { key: "status", label: "Status", render: (r: Product) => <span className={`badge ${statusColors[r.status]}`}>{r.status}</span> },
];

export function ERPProductsPage() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><Package size={22} className="text-coral-500" /> Product Management</h1>
                    <p className="page-subtitle">Dynamic packaging and product catalog</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn-outline"><Combine size={16} /> Dynamic Package</button>
                    <button className="btn-outline"><Upload size={16} /> Bulk Upload</button>
                    <button className="btn-primary"><Plus size={16} /> Add Product</button>
                </div>
            </div>
            <DataTable columns={columns} data={mockProducts as unknown as Record<string, unknown>[]} searchPlaceholder="Search products..." />
        </div>
    );
}
