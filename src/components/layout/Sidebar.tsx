import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    LayoutDashboard, Users, GitPullRequestDraft, Calendar, BookOpen,
    DollarSign, Package, Truck, BarChart3,
    Settings, Plug, UserCog, Globe, Map, ShoppingBag, Building2,
    TrendingUp, Mail, ClipboardList, ChevronLeft, Compass, Sparkles,
    CreditCard, PieChart, Boxes, Receipt, FolderOpen, Target
} from "lucide-react";
import { useAppSelector, useAppDispatch } from "../../hooks/useStore";
import { toggleSidebar, closeMobileSidebar } from "../../store/uiSlice";
import type { UserRole } from "../../types";

interface SidebarNavItem {
    label: string;
    path: string;
    icon: React.ReactNode;
    badge?: number;
}

interface SidebarSection {
    title: string;
    items: SidebarNavItem[];
}

const iconSize = 18;

function getNavSections(role: UserRole): SidebarSection[] {
    const shared: SidebarSection[] = [
        {
            title: "CRM",
            items: [
                { label: "Contacts", path: "/crm/contacts", icon: <Users size={iconSize} /> },
                { label: "Pipeline", path: "/crm/pipeline", icon: <GitPullRequestDraft size={iconSize} /> },
                { label: "Activities", path: "/crm/activities", icon: <ClipboardList size={iconSize} /> },
                { label: "Marketing", path: "/crm/marketing", icon: <Mail size={iconSize} /> },
            ],
        },
        {
            title: "Operations",
            items: [
                { label: "Products", path: "/erp/products", icon: <Package size={iconSize} /> },
                { label: "Inventory", path: "/erp/inventory", icon: <Boxes size={iconSize} /> },
                { label: "Suppliers", path: "/erp/suppliers", icon: <Truck size={iconSize} /> },
                { label: "Bookings", path: "/erp/bookings", icon: <BookOpen size={iconSize} /> },
                { label: "Finance", path: "/erp/finance", icon: <CreditCard size={iconSize} /> },
                { label: "Documents", path: "/erp/documents", icon: <FolderOpen size={iconSize} /> },
            ],
        },
        {
            title: "Analytics",
            items: [
                { label: "BI Dashboard", path: "/analytics/dashboard", icon: <BarChart3 size={iconSize} /> },
                { label: "Reports", path: "/analytics/reports", icon: <PieChart size={iconSize} /> },
                { label: "Performance", path: "/analytics/performance", icon: <TrendingUp size={iconSize} /> },
            ],
        },
    ];

    switch (role) {
        case "agent":
            return [
                {
                    title: "Agent",
                    items: [
                        { label: "Dashboard", path: "/agent", icon: <LayoutDashboard size={iconSize} /> },
                        { label: "Pipeline", path: "/agent/pipeline", icon: <Target size={iconSize} /> },
                        { label: "Clients", path: "/agent/clients", icon: <Users size={iconSize} /> },
                        { label: "Bookings", path: "/agent/bookings", icon: <BookOpen size={iconSize} />, badge: 3 },
                        { label: "Commissions", path: "/agent/commissions", icon: <DollarSign size={iconSize} /> },
                        { label: "Itinerary Builder", path: "/agent/itinerary", icon: <Sparkles size={iconSize} /> },
                    ],
                },
                ...shared,
            ];
        case "operator":
            return [
                {
                    title: "Tour Operator",
                    items: [
                        { label: "Dashboard", path: "/operator", icon: <LayoutDashboard size={iconSize} /> },
                        { label: "Products", path: "/operator/products", icon: <ShoppingBag size={iconSize} /> },
                        { label: "Rate Loading", path: "/operator/rates", icon: <Receipt size={iconSize} /> },
                        { label: "Inventory", path: "/operator/inventory", icon: <Calendar size={iconSize} /> },
                        { label: "Suppliers", path: "/operator/suppliers", icon: <Truck size={iconSize} /> },
                        { label: "Margins", path: "/operator/margins", icon: <TrendingUp size={iconSize} /> },
                    ],
                },
                ...shared,
            ];
        case "dmc":
            return [
                {
                    title: "DMC",
                    items: [
                        { label: "Dashboard", path: "/dmc", icon: <LayoutDashboard size={iconSize} /> },
                        { label: "Services", path: "/dmc/services", icon: <Compass size={iconSize} /> },
                        { label: "Availability", path: "/dmc/availability", icon: <Calendar size={iconSize} /> },
                        { label: "B2B Portal", path: "/dmc/b2b-portal", icon: <Globe size={iconSize} /> },
                        { label: "Suppliers", path: "/dmc/suppliers", icon: <Building2 size={iconSize} /> },
                    ],
                },
                ...shared,
                {
                    title: "Intelligence",
                    items: [
                        { label: "Destination Intel", path: "/analytics/destination-intel", icon: <Map size={iconSize} /> },
                    ],
                },
            ];
        case "admin":
            return [
                {
                    title: "Admin",
                    items: [
                        { label: "Dashboard", path: "/admin", icon: <LayoutDashboard size={iconSize} /> },
                        { label: "Financials", path: "/admin/financials", icon: <DollarSign size={iconSize} /> },
                        { label: "Team", path: "/admin/team", icon: <UserCog size={iconSize} /> },
                        { label: "Configuration", path: "/admin/config", icon: <Settings size={iconSize} /> },
                        { label: "Integrations", path: "/admin/integrations", icon: <Plug size={iconSize} /> },
                    ],
                },
                ...shared,
            ];
        default:
            return shared;
    }
}

export function Sidebar() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const { sidebarCollapsed, sidebarMobileOpen } = useAppSelector((s) => s.ui);
    const user = useAppSelector((s) => s.auth.user);
    const role = user?.role ?? "agent";

    const sections = useMemo(() => getNavSections(role), [role]);

    return (
        <>
            {/* Mobile overlay */}
            {sidebarMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => dispatch(closeMobileSidebar())}
                />
            )}

            <aside
                className={`
          fixed top-0 left-0 h-full z-50 flex flex-col
          transition-all duration-300 ease-in-out
          ${sidebarCollapsed ? "w-[72px]" : "w-sidebar"}
          ${sidebarMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
                style={{ background: "var(--sidebar-bg)" }}
            >
                {/* Logo */}
                <div className="h-16 flex items-center px-4 border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-gradient-coral flex items-center justify-center shrink-0">
                            <Compass size={18} className="text-white" />
                        </div>
                        {!sidebarCollapsed && (
                            <span className="text-white font-heading font-bold text-base truncate">
                                TravelOps
                            </span>
                        )}
                    </div>

                    {/* Collapse button (desktop) */}
                    <button
                        onClick={() => dispatch(toggleSidebar())}
                        className="hidden lg:flex ml-auto p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <ChevronLeft
                            size={16}
                            className={`text-white/60 transition-transform duration-300 ${sidebarCollapsed ? "rotate-180" : ""}`}
                        />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto sidebar-scroll py-4 px-3">
                    {sections.map((section) => (
                        <div key={section.title} className="mb-5">
                            {!sidebarCollapsed && (
                                <div className="sidebar-section">{section.title}</div>
                            )}
                            <ul className="space-y-0.5">
                                {section.items.map((item) => {
                                    const isActive = location.pathname === item.path || (item.path !== "/agent" && item.path !== "/operator" && item.path !== "/dmc" && item.path !== "/admin" && location.pathname.startsWith(item.path));
                                    return (
                                        <li key={item.path}>
                                            <NavLink
                                                to={item.path}
                                                onClick={() => dispatch(closeMobileSidebar())}
                                                className={`sidebar-link ${isActive ? "active" : ""} ${sidebarCollapsed ? "justify-center px-0" : ""}`}
                                                title={sidebarCollapsed ? item.label : undefined}
                                            >
                                                {item.icon}
                                                {!sidebarCollapsed && (
                                                    <>
                                                        <span className="truncate">{item.label}</span>
                                                        {item.badge && (
                                                            <span className="ml-auto bg-coral-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>

                {/* User Card */}
                <div className="p-3 border-t border-white/10 shrink-0">
                    <div className={`flex items-center gap-3 ${sidebarCollapsed ? "justify-center" : ""}`}>
                        <div className="avatar avatar-sm bg-coral-500" title={user?.name}>
                            {user?.initials}
                        </div>
                        {!sidebarCollapsed && (
                            <div className="min-w-0">
                                <div className="text-white text-xs font-medium truncate">{user?.name}</div>
                                <div className="text-white/40 text-[10px] capitalize">{user?.role === "dmc" ? "DMC Manager" : user?.role}</div>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}
