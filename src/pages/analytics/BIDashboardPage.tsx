import { StatCard } from "../../components/ui/StatCard";
import { ChartCard, AreaChartWidget, BarChartWidget, PieChartWidget, LineChartWidget } from "../../components/ui/ChartWidgets";
import { revenueByMonth, bookingsByDestination, bookingsBySource, monthlyBookings } from "../../data/mockData";
import { BarChart3, DollarSign, TrendingUp, Users, BookOpen, Globe } from "lucide-react";

const conversionData = [
    { name: "Sep", value: 24, value2: 20 }, { name: "Oct", value: 28, value2: 24 },
    { name: "Nov", value: 32, value2: 26 }, { name: "Dec", value: 26, value2: 22 },
    { name: "Jan", value: 35, value2: 30 }, { name: "Feb", value: 38, value2: 32 },
];

export function BIDashboardPage() {
    return (
        <div className="dashboard-page">
            <div className="page-header">
                <div>
                    <h1 className="page-title flex items-center gap-2"><BarChart3 size={22} className="text-coral-500" /> Business Intelligence</h1>
                    <p className="page-subtitle">Real-time metrics with drill-down analytics</p>
                </div>
                <select className="form-select w-40">
                    <option>Last 6 months</option>
                    <option>Last 3 months</option>
                    <option>Last 30 days</option>
                    <option>This year</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                <StatCard label="Revenue" value="$485K" trend={{ value: 18, label: "YoY" }} icon={<DollarSign size={20} className="text-coral-500" />} iconBg="bg-coral-100" />
                <StatCard label="Bookings" value="234" trend={{ value: 12, label: "MoM" }} icon={<BookOpen size={20} className="text-info-500" />} iconBg="bg-info-100" />
                <StatCard label="Avg Deal" value="$2,073" trend={{ value: 5, label: "QoQ" }} icon={<TrendingUp size={20} className="text-success-500" />} iconBg="bg-success-100" />
                <StatCard label="Conversion" value="28%" trend={{ value: 4, label: "MoM" }} icon={<Users size={20} className="text-warning-500" />} iconBg="bg-warning-100" />
                <StatCard label="Destinations" value="42" icon={<Globe size={20} className="text-brand" />} iconBg="bg-ocean-100" />
                <StatCard label="Profit Margin" value="24.5%" trend={{ value: 2, label: "QoQ" }} icon={<DollarSign size={20} className="text-success-500" />} iconBg="bg-success-100" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChartCard title="Revenue Trend" subtitle="Current vs previous period"><AreaChartWidget data={revenueByMonth} /></ChartCard>
                <ChartCard title="Conversion Rate" subtitle="Lead to booking conversion"><LineChartWidget data={conversionData} /></ChartCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ChartCard title="Bookings by Destination"><BarChartWidget data={bookingsByDestination} /></ChartCard>
                <ChartCard title="Revenue Sources"><PieChartWidget data={bookingsBySource} /></ChartCard>
                <ChartCard title="Monthly Volume"><BarChartWidget data={monthlyBookings} /></ChartCard>
            </div>
        </div>
    );
}
