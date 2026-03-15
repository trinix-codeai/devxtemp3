import { Bell, Menu, Moon, Search, Sun, ChevronDown } from "lucide-react";
import { useAppSelector, useAppDispatch } from "../../hooks/useStore";
import { toggleMobileSidebar, toggleNotifications, toggleDarkMode } from "../../store/uiSlice";
import { setRole } from "../../store/authSlice";
import { useState, useRef, useEffect } from "react";
import { mockNotifications } from "../../data/mockData";
import type { UserRole } from "../../types";

const roleLabels: Record<UserRole, string> = {
    agent: "Travel Agent",
    operator: "Tour Operator",
    dmc: "DMC Manager",
    admin: "Administrator",
};

const roleColors: Record<UserRole, string> = {
    agent: "bg-info-500",
    operator: "bg-success-500",
    dmc: "bg-warning-500",
    admin: "bg-coral-500",
};

export function TopBar() {
    const dispatch = useAppDispatch();
    const { darkMode } = useAppSelector((s) => s.ui);
    const user = useAppSelector((s) => s.auth.user);
    const role = user?.role ?? "agent";

    const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const unreadCount = mockNotifications.filter((n) => !n.read).length;

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setRoleDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <header
            className="h-16 flex items-center justify-between px-4 lg:px-6 border-b sticky top-0 z-30"
            style={{
                background: "var(--topbar-bg)",
                borderColor: "var(--topbar-border)",
            }}
        >
            {/* Left side */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => dispatch(toggleMobileSidebar())}
                    className="btn-icon lg:hidden"
                >
                    <Menu size={20} />
                </button>

                {/* Search */}
                <div className="hidden sm:flex items-center gap-2 rounded-lg px-3 py-2 w-64 lg:w-80" style={{ background: "var(--color-surface-alt)" }}>
                    <Search size={16} style={{ color: "var(--color-text-muted)" }} />
                    <input
                        type="text"
                        placeholder="Search bookings, clients, products..."
                        className="bg-transparent border-none outline-none text-sm w-full"
                        style={{ color: "var(--color-text)" }}
                    />
                    <kbd className="hidden lg:inline text-[10px] font-mono px-1.5 py-0.5 rounded border" style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}>
                        ⌘K
                    </kbd>
                </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
                {/* Role Switcher */}
                <div ref={dropdownRef} className="relative">
                    <button
                        onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                        className="btn-ghost flex items-center gap-2 text-xs"
                    >
                        <span className={`w-2 h-2 rounded-full ${roleColors[role]}`} />
                        <span className="hidden md:inline">{roleLabels[role]}</span>
                        <ChevronDown size={14} />
                    </button>

                    {roleDropdownOpen && (
                        <div className="absolute right-0 top-full mt-1 w-48 rounded-lg border shadow-soft-lg py-1 z-50" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                            {(Object.keys(roleLabels) as UserRole[]).map((r) => (
                                <button
                                    key={r}
                                    onClick={() => {
                                        dispatch(setRole(r));
                                        setRoleDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors ${r === role ? "font-semibold" : ""}`}
                                    style={{ color: "var(--color-text)" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-surface-alt)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                >
                                    <span className={`w-2 h-2 rounded-full ${roleColors[r]}`} />
                                    {roleLabels[r]}
                                    {r === role && <span className="ml-auto text-coral-500">✓</span>}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Dark mode toggle */}
                <button onClick={() => dispatch(toggleDarkMode())} className="btn-icon">
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Notifications */}
                <button
                    onClick={() => dispatch(toggleNotifications())}
                    className="btn-icon relative"
                >
                    <Bell size={18} />
                    {unreadCount > 0 && (
                        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-coral-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                            {unreadCount}
                        </span>
                    )}
                </button>

                {/* User avatar */}
                <div className="avatar avatar-sm bg-brand ml-1 cursor-pointer" title={user?.name}>
                    {user?.initials}
                </div>
            </div>
        </header>
    );
}
