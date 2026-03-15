import { Search, ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";
import { useState, useMemo } from "react";

interface Column<T> {
    key: string;
    label: string;
    sortable?: boolean;
    render?: (row: T) => React.ReactNode;
    className?: string;
}

interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    pageSize?: number;
    searchable?: boolean;
    searchPlaceholder?: string;
    onRowClick?: (row: T) => void;
    actions?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataTable<T extends Record<string, any>>({
    columns,
    data,
    pageSize = 10,
    searchable = true,
    searchPlaceholder = "Search...",
    onRowClick,
    actions,
}: DataTableProps<T>) {
    const [search, setSearch] = useState("");
    const [sortKey, setSortKey] = useState<string | null>(null);
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
    const [page, setPage] = useState(0);

    const filtered = useMemo(() => {
        let result = [...data];
        if (search) {
            const q = search.toLowerCase();
            result = result.filter((row) =>
                Object.values(row).some((v) => String(v).toLowerCase().includes(q))
            );
        }
        if (sortKey) {
            result.sort((a, b) => {
                const av = a[sortKey], bv = b[sortKey];
                const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true });
                return sortDir === "asc" ? cmp : -cmp;
            });
        }
        return result;
    }, [data, search, sortKey, sortDir]);

    const totalPages = Math.ceil(filtered.length / pageSize);
    const paged = filtered.slice(page * pageSize, (page + 1) * pageSize);

    function handleSort(key: string) {
        if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
        else { setSortKey(key); setSortDir("asc"); }
    }

    return (
        <div className="card">
            {(searchable || actions) && (
                <div className="px-5 py-3 flex items-center gap-3 border-b" style={{ borderColor: "var(--color-border)" }}>
                    {searchable && (
                        <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 flex-1 max-w-xs" style={{ background: "var(--color-surface-alt)" }}>
                            <Search size={14} style={{ color: "var(--color-text-muted)" }} />
                            <input
                                type="text"
                                placeholder={searchPlaceholder}
                                value={search}
                                onChange={(e) => { setSearch(e.target.value); setPage(0); }}
                                className="bg-transparent border-none outline-none text-sm w-full"
                                style={{ color: "var(--color-text)" }}
                            />
                        </div>
                    )}
                    <div className="ml-auto flex items-center gap-2">{actions}</div>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="data-table">
                    <thead>
                        <tr>
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className={`${col.sortable ? "cursor-pointer select-none" : ""} ${col.className ?? ""}`}
                                    onClick={() => col.sortable && handleSort(col.key)}
                                >
                                    <span className="flex items-center gap-1">
                                        {col.label}
                                        {col.sortable && <ArrowUpDown size={12} className="opacity-40" />}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paged.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-8" style={{ color: "var(--color-text-muted)" }}>
                                    No results found
                                </td>
                            </tr>
                        ) : (
                            paged.map((row, i) => (
                                <tr
                                    key={i}
                                    className={onRowClick ? "cursor-pointer" : ""}
                                    onClick={() => onRowClick?.(row)}
                                >
                                    {columns.map((col) => (
                                        <td key={col.key} className={col.className}>
                                            {col.render ? col.render(row) : String(row[col.key] ?? "")}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="px-5 py-3 flex items-center justify-between border-t text-xs" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                    <span>Showing {page * pageSize + 1}–{Math.min((page + 1) * pageSize, filtered.length)} of {filtered.length}</span>
                    <div className="flex items-center gap-1">
                        <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} className="btn-icon btn-sm disabled:opacity-30">
                            <ChevronLeft size={14} />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`btn-sm rounded-md min-w-[28px] ${i === page ? "bg-coral-500 text-white" : "btn-ghost"}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1} className="btn-icon btn-sm disabled:opacity-30">
                            <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
