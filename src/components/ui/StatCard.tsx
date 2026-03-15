import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { ReactNode } from "react";

interface StatCardProps {
    label: string;
    value: string | number;
    trend?: { value: number; label: string };
    icon: ReactNode;
    iconBg: string;
}

export function StatCard({ label, value, trend, icon, iconBg }: StatCardProps) {
    const trendDir = trend ? (trend.value > 0 ? "up" : trend.value < 0 ? "down" : "flat") : null;
    return (
        <div className="stat-card card-hover">
            <div className={`stat-icon ${iconBg}`}>
                {icon}
            </div>
            <div className="min-w-0 flex-1">
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
                {trend && (
                    <div className={`stat-trend ${trendDir === "up" ? "stat-trend-up" : trendDir === "down" ? "stat-trend-down" : "text-slate-400"}`}>
                        {trendDir === "up" ? <TrendingUp size={12} /> : trendDir === "down" ? <TrendingDown size={12} /> : <Minus size={12} />}
                        {trend.value > 0 ? "+" : ""}{trend.value}% {trend.label}
                    </div>
                )}
            </div>
        </div>
    );
}
