import { FolderOpen, Upload, FileText, Image, File, Download, Search, Filter } from "lucide-react";

const documents = [
    { id: "doc1", name: "Aegean Hotels - Summer 2026 Contract", type: "contract", size: "2.4 MB", date: "2026-01-15", booking: "BK-2026-001", icon: <FileText size={16} className="text-info-500" /> },
    { id: "doc2", name: "INV-2026-001 - Emma Johnson", type: "invoice", size: "156 KB", date: "2026-01-20", booking: "BK-2026-001", icon: <FileText size={16} className="text-coral-500" /> },
    { id: "doc3", name: "Kenya Safari - Waiver Form (signed)", type: "waiver", size: "89 KB", date: "2026-02-18", booking: "BK-2026-003", icon: <FileText size={16} className="text-success-500" /> },
    { id: "doc4", name: "Bali Retreat - Group Photo Pack", type: "media", size: "15.8 MB", date: "2026-02-25", booking: "BK-2026-002", icon: <Image size={16} className="text-warning-500" /> },
    { id: "doc5", name: "Travel Insurance - Robert Williams", type: "insurance", size: "420 KB", date: "2026-02-01", booking: "BK-2026-002", icon: <File size={16} className="text-slate-400" /> },
    { id: "doc6", name: "Maldives Resort - Rate Card 2026", type: "rate-card", size: "1.1 MB", date: "2025-12-10", booking: undefined, icon: <FileText size={16} className="text-info-500" /> },
    { id: "doc7", name: "INV-2026-005 - Raj Patel (Overdue)", type: "invoice", size: "178 KB", date: "2025-11-01", booking: "BK-2026-006", icon: <FileText size={16} className="text-danger-500" /> },
];

const typeBadge: Record<string, string> = { contract: "badge-info", invoice: "badge-coral", waiver: "badge-success", media: "badge-warning", insurance: "badge-neutral", "rate-card": "badge-info" };

export function DocumentsPage() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><FolderOpen size={22} className="text-coral-500" /> Document Management</h1>
                    <p className="page-subtitle">{documents.length} documents in repository</p>
                </div>
                <button className="btn-primary"><Upload size={16} /> Upload Document</button>
            </div>

            <div className="card">
                <div className="px-5 py-3 flex items-center gap-3 border-b" style={{ borderColor: "var(--color-border)" }}>
                    <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 flex-1 max-w-xs" style={{ background: "var(--color-surface-alt)" }}>
                        <Search size={14} style={{ color: "var(--color-text-muted)" }} />
                        <input type="text" placeholder="Search documents..." className="bg-transparent border-none outline-none text-sm w-full" style={{ color: "var(--color-text)" }} />
                    </div>
                    <button className="btn-outline btn-sm"><Filter size={14} /> Filter</button>
                </div>
                <div className="divide-y" style={{ borderColor: "var(--color-border)" }}>
                    {documents.map((doc) => (
                        <div key={doc.id} className="px-5 py-3 flex items-center gap-4 transition-colors cursor-pointer" onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-surface-alt)")} onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--color-surface-alt)" }}>
                                {doc.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium truncate" style={{ color: "var(--color-heading)" }}>{doc.name}</div>
                                <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>{doc.size} · {doc.date} {doc.booking && `· ${doc.booking}`}</div>
                            </div>
                            <span className={`badge ${typeBadge[doc.type] || "badge-neutral"}`}>{doc.type}</span>
                            <button className="btn-icon btn-sm"><Download size={14} /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
