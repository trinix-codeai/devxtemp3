import { PieChart, GripVertical, Download, Plus, Eye } from "lucide-react";
import { useState } from "react";

const reportFields = ["Booking Date", "Client Name", "Destination", "Revenue", "Commission", "Status", "Source", "Agent", "Check-in Date", "Guests", "Product Type"];
const savedReports = [
    { name: "Monthly Revenue Summary", fields: 5, lastRun: "2026-03-01", format: "PDF" },
    { name: "Agent Commission Report", fields: 4, lastRun: "2026-02-28", format: "Excel" },
    { name: "Destination Performance Q1", fields: 6, lastRun: "2026-02-25", format: "PDF" },
    { name: "Supplier Spend Analysis", fields: 4, lastRun: "2026-02-20", format: "Excel" },
];

export function ReportBuilderPage() {
    const [selected, setSelected] = useState<string[]>(["Client Name", "Destination", "Revenue", "Status"]);

    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><PieChart size={22} className="text-coral-500" /> Report Builder</h1>
                    <p className="page-subtitle">Build custom reports with drag-and-drop fields</p>
                </div>
                <button className="btn-primary"><Plus size={16} /> New Report</button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Field Picker */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>Available Fields</h3>
                    </div>
                    <div className="card-body space-y-1">
                        {reportFields.map((f) => (
                            <div
                                key={f}
                                onClick={() => setSelected((s) => s.includes(f) ? s.filter((x) => x !== f) : [...s, f])}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${selected.includes(f) ? "bg-coral-50 border border-coral-200 text-coral-700 font-medium" : ""}`}
                                style={!selected.includes(f) ? { color: "var(--color-text)" } : undefined}
                                onMouseEnter={(e) => { if (!selected.includes(f)) e.currentTarget.style.background = "var(--color-surface-alt)"; }}
                                onMouseLeave={(e) => { if (!selected.includes(f)) e.currentTarget.style.background = "transparent"; }}
                            >
                                <GripVertical size={12} style={{ color: "var(--color-text-muted)" }} />
                                {f}
                                {selected.includes(f) && <span className="ml-auto text-coral-500 text-xs">✓</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preview */}
                <div className="lg:col-span-2 card">
                    <div className="card-header">
                        <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>Report Preview</h3>
                        <div className="flex gap-2">
                            <button className="btn-outline btn-sm"><Download size={14} /> PDF</button>
                            <button className="btn-outline btn-sm"><Download size={14} /> Excel</button>
                        </div>
                    </div>
                    <div className="card-body">
                        {selected.length === 0 ? (
                            <div className="text-center py-12" style={{ color: "var(--color-text-muted)" }}>
                                <PieChart size={40} className="mx-auto mb-3 opacity-30" />
                                <p className="text-sm">Select fields to preview your report</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="data-table">
                                    <thead><tr>{selected.map((f) => <th key={f}>{f}</th>)}</tr></thead>
                                    <tbody>
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <tr key={i}>{selected.map((f) => <td key={f} className="text-xs">Sample {f} {i + 1}</td>)}</tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Saved Reports */}
            <div className="card">
                <div className="card-header">
                    <h3 className="text-sm font-semibold" style={{ color: "var(--color-heading)" }}>Saved Reports</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="data-table">
                        <thead><tr><th>Report Name</th><th>Fields</th><th>Last Run</th><th>Format</th><th></th></tr></thead>
                        <tbody>
                            {savedReports.map((r) => (
                                <tr key={r.name}>
                                    <td className="font-medium" style={{ color: "var(--color-heading)" }}>{r.name}</td>
                                    <td>{r.fields} fields</td>
                                    <td>{r.lastRun}</td>
                                    <td><span className="badge badge-neutral">{r.format}</span></td>
                                    <td>
                                        <div className="flex gap-1">
                                            <button className="btn-icon btn-sm"><Eye size={14} /></button>
                                            <button className="btn-icon btn-sm"><Download size={14} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
