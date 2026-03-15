import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";
import { TopBar } from "../components/layout/TopBar";
import { NotificationPanel } from "../components/shared/NotificationPanel";
import { useAppSelector } from "../hooks/useStore";

export function DashboardLayout() {
    const { sidebarCollapsed } = useAppSelector((s) => s.ui);

    return (
        <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
            <Sidebar />
            <div
                className={`transition-all duration-300 ${sidebarCollapsed ? "lg:ml-[72px]" : "lg:ml-sidebar"}`}
            >
                <TopBar />
                <main className="min-h-[calc(100vh-4rem)]">
                    <Outlet />
                </main>
            </div>
            <NotificationPanel />
        </div>
    );
}
